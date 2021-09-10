<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>
知识点见'备注'位置
controller层
@PostMapping(value="/notice", produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
  // 备注： @RequestBody 接受的json格式的字符串 ，返回的是JSONObject格式
public JSONObject queryNotice(@RequestBody String param){
    JSONObject result =  webService.queryNotice(param);
    return result;
}
service层
public JSONObject queryNotice(String param) {
    // 备注： 前台传的是字符串格式的json对象，这里得将字符串转换成json对象
    JSONObject jsonParams = JSONObject.parseObject(param);
    String level = jsonParams.getString("level");
    int limit = jsonParams.getInteger("limit");
    //  备注：这里取出来的是json格式数组
    JSONArray list = jsonParams.getJSONArray("data");
    for (int i = 0; i < list.size(); i++) {
        // 备注：把里面的对象转化为JSONObject
        JSONObject obj = list.getJSONObject(i);
        // 备注：额外扩展，如何遍历对象获取对象的key和value值
        Iterator it = obj.entrySet().iterator();
          while (it.hasNext()) {
              Map.Entry< String, Object> entry = (Map.Entry< String, Object>) it.next();
              if (entry.getKey()!=null) {
                  pageResult.setCharValue((String) entry.getValue());
                  log.info("entry.getKey()->{}", entry.getValue());
                  log.info("entry.getValue->{}", entry.getValue());
              }
          }
    }
     // 备注： 即将返回的前台结构按json格式返回
    JSONObject result = new JSONObject();
    try{
      //  开始查询数据库信息
      List< WebPageNotice>  list = AbsWebPageMapper.queryNotice(level,limit);
      //  拼装返回前台数据格式
      result.put("bizCode", "00000");
      result.put("bizDesc", "success");
      result.put("data", list);
    } catch (Exception e) {
      result.put("bizCode", "00001");
      result.put("bizDesc", "error");
      result.put("data", e);
    }
    return result;
}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'colresizable',
    data () {
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
      toggle(){

      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
