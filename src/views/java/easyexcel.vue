<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>Java领域解析，生成Excel比较有名的框架有Apache poi,Jxl等，但他们都存在一个严重的问题就是非常的耗内存，如果你的系统并发量不大的话可能还行，但是一旦并发上来后一定会OOM或者JVM频繁的full gc.
EasyExcel是阿里巴巴开源的一个excel处理框架，以使用简单，节省内存著称，今天我们来使用阿里巴巴开源的EasyExcel框架来实现Excel的导入导出功能
EasyExcel文档地址：https://alibaba-easyexcel.github.io/index.html

导入依赖
easyexcel 依赖
< dependency>
    < groupId>com.alibaba< /groupId>
    < artifactId>easyexcel< /artifactId>
    < version>2.2.7< /version>
< /dependency>

准备一个entity类。属性上的注解@ExcelProperty是设置生成的excel表格的列名，如果不写 生成的列名就是你实体类的属性名
package com.example.getexcel.entity;
import com.alibaba.excel.annotation.ExcelProperty;
import lombok.Data;
@Data
@EqualsAndHashCode(callSuper = false)
//一些表头基本配置
@ContentStyle(horizontalAlignment= HorizontalAlignment.CENTER)
@HeadStyle(horizontalAlignment= HorizontalAlignment.CENTER)
@ContentFontStyle(fontHeightInPoints=12)
@HeadFontStyle(fontHeightInPoints=12)
public class House {

    @ColumnWidth(50)
    @ExcelProperty(value ="序号" , index = 0)
    private Integer id;

    @ExcelProperty(value ="电话" , index = 1)
    private String phone;

    @ExcelProperty(index = 2, value = {"基本信息","地址"})
    private String location;

    @ExcelProperty(index = 3, value = {"基本信息","年龄"})
    private String age;

    @ExcelProperty(index = 4, value = {"基本信息","性别"})
    private String gender;
}
如果对象里面有些字段我们并不想导出到Excel中，只要使用@ExcelIgnore注解就可以了
@ExcelProperty的index可以指定导出的列索引
@ColumnWidth(50)  指定宽度
@ContentLoopMerge(eachRow = 2) 表示这一列每隔两行就进行合并
@ContentLoopMerge还有一个columnExtend属性，可以对列进行合并
@ContentLoopMerge(eachRow = 2,columnExtend = 4)
如果需要复杂的合并可以自己定义一个策略，具体实现可以参考 https://www.yuque.com/easyexcel/doc/write#cac25459

编写下载代码
Service层
public BaseResult systemOperationLogDownload(HttpServletResponse response){
 List< SystemOperationLog>  logList = SystemOperationLogMapper.selectSystemOperationLogAll();
    BaseResult result = new BaseResult();
    try {
        response.setContentType("application/vnd.ms-excel");
        response.setCharacterEncoding("utf-8");
        // 这里URLEncoder.encode可以防止中文乱码 当然和easyexcel没有关系
        String fileName = URLEncoder.encode("测试"+System.currentTimeMillis(), "UTF-8");
        response.setHeader("Content-disposition", "attachment;filename=" + fileName + ".xlsx");
        EasyExcel.write(response.getOutputStream(), SystemOperationLog.class)  //  指定写用哪个class去写
                .registerWriteHandler(new LongestMatchColumnWidthStyleStrategy())// 表格宽度自适应
                .sheet("模板")  // excel中sheet页名称
                .doWrite(logList);
        result.setSuccess("下载成功");
    }catch (Exception e){
        result.setError("下载失败");
    }
    return  result;
}
Controller层
@GetMapping("/systemOperationLogDownload")
public void systemOperationLogDownload(HttpServletResponse response){
    omssService.systemOperationLogDownload(response);
    // 这里如果返回具体的类，后台会报错 No converter for XXX with preset Content-Type ‘application/vnd.ms-excel；charset=utf-8‘,所以什么都不返回
}

附件上传数据导入功能
由于读取excel需要实现监听器，并且该监听器不能被spring容器管理，所以我们spring的注解不能在里面用，所以我们需要将service层的接口传入该监听器，实现将excel的内容存储至数据库中

先书写listener监听器逻辑
@Slf4j
 // 分批次存储到数据库，然后清空列表，方便内存回收，在导入
public class SystemOperationLogListener extends AnalysisEventListener< SystemOperationLog> {

    // 每隔500条存储数据库，实际使用中可以3000条，然后清理list ，方便内存回收
    private static final int BATCH_COUNT = 500;
    List < SystemOperationLog> list = new ArrayList<>();

    // 由于 SystemOperationLogListener 不能交给Spring管理 所以我们只能手动传入 omssService
    public OmssService omssService;

    public SystemOperationLogListener(){ }
    public SystemOperationLogListener(OmssService omssService){
       this.omssService = omssService;
    }

    @Override
    public void invoke(SystemOperationLog systemOperationLog, AnalysisContext context) {
        log.info("解析到一条数据:{}", JSON.toJSONString(systemOperationLog));
        SystemOperationLog logItem = new SystemOperationLog();
        logItem.setCreateBy(systemOperationLog.getCreateBy());
        logItem.setCreateDate(systemOperationLog.getCreateDate());
        logItem.setLogType(systemOperationLog.getLogType());
        logItem.setOperationInfo(systemOperationLog.getOperationInfo());
        logItem.setOperationResult(systemOperationLog.getOperationState());
        logItem.setOperationState(systemOperationLog.getOperationState());
        logItem.setOperationType(systemOperationLog.getOperationType());
        logItem.setRemark(systemOperationLog.getRemark());
        logItem.setState(systemOperationLog.getState());
        logItem.setUpdateBy(systemOperationLog.getUpdateBy());
        logItem.setUpdateDate(systemOperationLog.getUpdateDate());
        list.add(logItem);
        // 达到BATCH_COUNT了，需要去存储一次数据库，防止数据几万条数据在内存，容易OOM
        if (list.size() >= BATCH_COUNT) {
            try {
                saveData();
            } catch (IOException e) {
                log.error("保存失败{}",e.getMessage());
            }
            // 存储完成清理 list
            list.clear();
        }
    }
    @Override
    public void doAfterAllAnalysed(AnalysisContext context) {
        // 这里也要保存数据，确保最后遗留的数据也存储到数据库
        try {
            saveData();
        } catch (IOException e) {
            log.error("保存失败{}",e.getMessage());
        }
        log.info("所有数据解析完成！");
    }
    // 加上存储数据库
    private void saveData() throws IOException {
        log.info("{}条数据，开始存储数据库！", list.size());
        list.remove(0);
        omssService.systemOperationLogUpload(list);
        log.info("存储数据库成功！");
    }
}

Service层代码
public String  systemOperationLogUpload(List< SystemOperationLog> list) throws IOException {
        SystemOperationLogMapper.systemOperationLogUpload(list);
        return "上传成功";
}

Mapper
int systemOperationLogUpload(List< SystemOperationLog> record);

Xml
< insert id="systemOperationLogUpload" parameterType="java.util.List" >
  insert into system_operation_log_201912 (log_type, operation_type,
    operation_info, operation_state, operation_result,
    state , create_by, create_date, update_by, update_date ,remark )
  values
  < foreach index="index" separator="," collection="list" item="item">
    (#{item.logType},
    #{item.operationType},
    #{item.operationInfo},
    #{item.operationState},
    #{item.operationResult},
    #{item.state},
    #{item.createBy},
    #{item.createDate},
    #{item.updateBy},
    #{item.updateDate},
    #{item.remark})
  < /foreach>
< /insert>

Controller层
@PostMapping("/systemOperationLogUpload")
public String systemOperationLogUpload(@RequestParam("file") MultipartFile multipartFile) throws IOException {
    log.info("systemOperationLogUpload multipartFile =>",multipartFile);
    EasyExcel.read(multipartFile.getInputStream(), SystemOperationLog.class, new SystemOperationLogListener(omssService)).sheet().doRead();
    return "上传成功";
}
Postman方式，解决MultipartFile上传报空错误
public String upLoadFile(@RequestParam("file") MultipartFile multipartFile)
加上@RequestParam(“file”)注解，以及在postman中Header中设置key=Content-Type,value=multipart/form-data，再次运行，上传文件成功。
这里说明下@RequestParam参数里面为什么用"file"，是因为postman中Body中key值为file</pre>
          <img src="../../img/java/easyexcel01.png" alt="postman模拟附件上传" height="300px" width=500px">
          <pre>AnalysisEventListener
@Override
public void invoke(Dto dto, AnalysisContext context) {
// 每一条数据都会循环，可以实现空数据，重复数据的检查
// 在外层增加list，就可以实现数据临时的缓存
}

@Override
public void doAfterAllAnalysed(AnalysisContext context) {
// 通过变量list 也可以实现检查，并且能实现批量存储
}</pre>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'easyexcel',
        data() {
            return {
                created: this.$route.query.created,
                title: this.$route.query.name
            }
        },
        mounted() {
            this.$nextTick(function () {
            })
        },
        methods: {
            toggle() {

            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
