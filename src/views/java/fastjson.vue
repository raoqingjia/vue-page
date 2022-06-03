<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>JSONObject详解</h3>
          <pre>
JSONObject只是一种数据结构，可以理解为JSON格式的数据结构（key-value 结构），可以使用put方法给json对象添加元素。JSONObject可以很方便的转换成字符串，也可以很方便的把其他对象转换成JSONObject对象。
引入依赖
< dependency>
   < groupId>com.alibaba< /groupId>
   < artifactId>fastjson< /artifactId>
   < version>1.2.32< /version>
< /dependency></pre>
          <h3>构建json</h3>
          <pre>
1、实例化一个JSONObject 对象，用put() 方法将数据写入。
JSONObject zhangsan = new JSONObject();
zhangsan.put("name", "张三");
zhangsan.put("age", 18.4);
zhangsan.put("birthday", "1900-20-03");
System.out.println(zhangsan.toString());

2、使用HashMap构建
实际上即先创建好一个 HashMap 对象并且将数据打包进去，而后在创建 JSONObject 时将其作为一个参数传进去。
Map< String, Object> data = new HashMap< String, Object>();
data.put("name", "John");
data.put("sex", "male");
data.put("age", 22);
data.put("is_student", true);
data.put("hobbies", new String[] {"hiking", "swimming"});
JSONObject obj = new JSONObject(data);
// 或是下面这种写法，将 java 对象转换为 json 对象
JSONObject obj = JSONObject.fromObject(data);

3、使用JavaBean构建
这种方法在实际中更加常用。
创建 javaBean：
public class PersonInfo {
    private String name;
    private String sex;
    private int age;
}
构建 json：
PersonInfo info = new PersonInfo();
info.setName("John");
info.setSex("male");
info.setAge(22);
JSONObject obj = new JSONObject(info);
// 或是下面这种写法，将 java 对象转换为 json 对象
JSONObject obj = JSONObject.fromObject(data);</pre>
          <h3>解析 json</h3>
          <pre>
解析 json 主要是基本类型如 Number、boolean 等，与数组 Array。
基本类型的解析直接调用 JSONObject 对象的 getXxx(key) 方法，如果获取字符串则 getString(key)，布尔值则 getBoolean(key)。
数组的解析需要通过 JSONObject 对象的 getJSONArray(key) 方法获取到一个 JSONArray 对象，再调用 JSONArray 对象的 get(i) 方法获取数组元素，i 为索引值。

1、只包含一个对象的 json 字符串解析
//将得到json数据转换为一个json对象
JSONObject jsonObject = new JSONObject(data);
//获取"persons"的json对象
jsonObject = jsonObject.getJSONObject("persons");
//通过相应的get方法,获取相应的属性
int id = jsonObject.getInt("id");
String name = jsonObject.getString("name");
int age = jsonObject.getInt("age");
//将获取到的数据放到一个Person对象中
Person person = new Person(id, name, age);

2、含有多个对象的 json 字符串
List< Person> list = new ArrayList<>();
//将得到json数据转换为一个json对象
JSONObject jsonObject = new JSONObject(data);
//获取"persons"的json对象,并将其转换为一个json数组
JSONArray array = jsonObject.getJSONArray("persons");
//通过循环获取数据,并放入list集合中
for (int i = 0;i< array.length();i++){
    int id = array.getJSONObject(i).getInt("id");
    String name = array.getJSONObject(i).getString("name");
    int age = array.getJSONObject(i).getInt("age");
    Person person = new Person(id, name, age);
    list.add(person);
}
return list;</pre>
          <h3>序列化 JSON.toJSONString(object)</h3>
          <pre>序列化就是指 把JavaBean对象转成JSON格式的字符串

1.一般对象序列化
Map< String,Object> map = new HashMap< String,Object>();
map.put("id","1");
map.put("name","zhangsan");
map.put("now", LocalDateTime.now());
map.put("now1", new Date());
map.put("nullVal", null);
String s = JSON.toJSONString(map);
输出结果：{“now”:“2022-03-30T17:26:06.014”,“name”:“zhangsan”,“now1”:1648632366015,“id”:“1”}

2.list对象序列化
List< GridManagerVo> list = new ArrayList<>();
GridManagerVo vo = new GridManagerVo();
vo.setId("123");
GridManagerVo vo1 = new GridManagerVo();
vo1.setId("12343");
GridManagerVo vo2 = new GridManagerVo();
vo2.setId("12323");
list.add(vo);
list.add(vo1);
list.add(vo2);
String jsonArray = JSON.toJSONString(list);
输出结果：[{“id”:“123”},{“id”:“12343”},{“id”:“12323”}]

3.指定SerializerFeature特性进行序列化
时间格式化
String s2 = JSON.toJSONString(map, SerializerFeature.WriteDateUseDateFormat);
使用单引号
String s3 = JSON.toJSONString(map, SerializerFeature.UseSingleQuotes);
格式化
String s4 = JSON.toJSONString(map, SerializerFeature.PrettyFormat);
输出null值
String s5 = JSON.toJSONString(map, SerializerFeature.WriteMapNullValue);
输出class类型
String s6 = JSON.toJSONString(map, SerializerFeature.WriteClassName);
##这种情况就可以直接强制转换，因为带了class类型
Map res = (HashMap)JSON.parse(s6);
指定日期格式
String s7 = JSON.toJSONStringWithDateFormat(map,"yyyy-MM-dd");</pre>
          <h3>反序列化 JSON.parseObject JSON.parseArray</h3>
          <pre>
反序列化就是把JSON格式的字符串转化为Java Bean对象。

1.反序列化为指定class类型
Map map1 = JSON.parseObject(s7, Map.class);

2.反序列化为list集合
List< GridManagerVo> gridManagerVos = JSON.parseArray(jsonArray, GridManagerVo.class);</pre>
          <h3>@JSONField 注解</h3>
          <pre>
1. JSONField配置方式
FieldInfo可以配置在getter/setter方法或者字段上。例如：

1.1 配置在getter/setter上
public class A {
  private int id;

  @JSONField(name="ID")
  public int getId() {return id;}
  @JSONField(name="ID")
  public void setId(int value) {this.id = id;}
}

1.2 配置在field上
public class A {
  @JSONField(name="ID")
  private int id;

  public int getId() {return id;}
  public void setId(int value) {this.id = id;}
}

2.使用name指定字段名称
当前端传过来的字段名不一样的时候，我们可以在字段名上加上这个注解
public class A {
      @JSONField(name="ID")
      private int id;

      public int getId() {return id;}
      public void setId(int value) {this.id = id;}
}

3. 使用format配置日期格式化
public class A {
      // 配置date序列化和反序列使用yyyyMMdd日期格式
      @JSONField(format="yyyyMMdd")
      public Date date;
}

4. 使用serialize/deserialize指定字段不序列化
public class A {
    @JSONField(serialize=false)
    public Date date;
}
public class A {
    @JSONField(deserialize=false)
    public Date date;
}

5. 使用ordinal指定字段的顺序
缺省fastjson序列化一个java bean，是根据fieldName的字母序进行序列化的，你可以通过ordinal指定字段的顺序。这个特性需要1.1.42以上版本。
public static class VO {
    @JSONField(ordinal = 3)
    private int f0;
    @JSONField(ordinal = 2)
    private int f1;
    @JSONField(ordinal = 1)
    private int f2;
}

6.使用serializeUsing制定属性的序列化类在fastjson 1.2.16版本之后，JSONField支持新的定制化配置serializeUsing，可以单独对某一个类的某个属性定制序列化，比如：
public static class Model {
    @JSONField(serializeUsing = ModelValueSerializer.class)
    public int value;
}
public static class ModelValueSerializer implements ObjectSerializer {
  @Override
  public void write(JSONSerializer serializer, Object object, Object fieldName, Type fieldType,
                    int features) throws IOException {
      Integer value = (Integer) object;
      String text = value + "元";
      serializer.write(text);
}

五、空值处理
普通
String text = JSON.toJSONString(obj, SerializerFeature.WriteMapNullValue,SerializerFeature.WriteNullListAsEmpty);
Spring
fastJsonConfig.setSerializerFeatures(SerializerFeature.WriteMapNullValue)</pre>
          <h3>JSONObject，JSONArray</h3>
          <pre>JSONObject，JSONArray为JSON的子类
JSONObject相当于Map< String, Object>
JSONArray相当于List< Object>

一、JSONObject和JSONArray的数据表示形式
JSONObject的数据是用 { } 来表示的，
例如： { “id” : “123”, “courseID” : “huangt-test”, “title” : “提交作业”, “content” : null }
而JSONArray，顾名思义是由JSONObject构成的数组，用 [ { } , { } , … , { } ] 来表示
例如： [ { “id” : “123”, “courseID” : “huangt-test”, “title” : “提交作业” } , { “content” : null, “beginTime” : 1398873600000 “endTime” } ] ；
表示了包含2个JSONObject的JSONArray。
可以看到一个很明显的区别，一个用的是 { } ，一个最外面用的是 [ ] ；

二、如何从字符串String获得JSONObject对象和JSONArray对象
JSONObject jsonObject = new JSONObject ( String str);
JSONArray jsonArray = new JSONArray(String str ) ;

三、如何从JSONArray中获得JSONObject对象
大家可以把JSONArray当成一般的数组来对待，只是获取的数据内数据的方法不一样
JSONObject jsonObject = (JSONObject)jsonArray.get(i);
JSONObject jsonObject = jsonArray.getJSONObject(i) ;
两者都可。第一种注意转换

四、小结
JSON对象(JSONObject)中的数据都是以key-value形式出现，所以它实现了Map接口：
常用的方法：
getString(String key)
remove(Object key)

JSONArray则是JSON数组，JSON数组对象中存储的是一个个JSON对象，所以类中的方法主要用于直接操作JSON对象
最常用的方法：
getJSONObject(int index)
</pre>
          <h3>JSONObject.toJSONString和JSON.toJSONString的区别</h3>
          <pre>
JSONObject.toJSONString和JSON.toJSONString的区别，其实没有区别，大家可以看源码，JSONObject是继承JSON的，而toJSONString这个方法只在JSON这个类里有，JSONObject并没有重写，所以，他们是一模一样的调用
          </pre>
          <h3>JSON.parse 和 JSONObject.parseObject 有什么区别</h3>
          <pre>
1、JSON.parse()返回的结果是Object对象
2、JSON.parseObject()的返回结果可以是JSONObject(一个Map的实现类)也可以是指定的类型(可以用来处理泛型).
3、JSONObject继承了JSON，JSONObject中没有定义parset的方法，它是通过调用父类(JSON)中的parse方法进行解析的</pre>
          <h3>com.alibaba.fastjson.JSONException: not match : - = </h3>
          <pre>在用@RequestBody注解进行参数传递时，偶尔会出现以上的异常，一般出现在"JSON字符串转为对象"
错误信息例子：
com.alibaba.fastjson.JSONException: not match : - =, info : pos 3, line 1, column 4{id=66, firmware_id=15, version=V20190617_170943, file_hash=c9782aeff870c229f4a9d3efbaa11fa7, file_size=511020, description=测试, product_id=8}
错误代码举例：
//使用JSONObject进行了数据库接收
String test1(@RequestBody JSONObject jsonObject){
    String versionInfoStr = jsonObject.getString("versionInfo");
    VersionInfo versionInfo = JSONObject.parseObject(versionInfoStr, VersionInfo.class);
    return null;
}
正确代码举例:
// 把JSONObject改成String接收的就不会出现错误
String test2(@RequestBody String str){
    String jsonStr = StringEscapeUtils.unescapeJavaScript(str);   //这一步是为了把str的转义字符去掉，也可以不调这个方法
    JSONObject jsonObject = JSONObject.parseObject(jsonStr);
    String versionInfoStr = jsonObject.getString("versionInfo");
    VersionInfo versionInfo = JSONObject.parseObject(versionInfoStr, VersionInfo.class);
    return null;
}
主要的问题就出现在getString这句代码
错误代码中getString得到的值为
{id=66, firmware_id=15, version=V20190617_170943, file_hash=c9782aeff870c229f4a9d3efbaa11fa7, file_size=511020, description=测试, product_id=8}
而正确代码中得到的是
{"id":"66","firmware_id":"15","version":"V20190617_170943","file_hash":"c9782aeff870c229f4a9d3efbaa11fa7","file_size":"511020","description":"测试","product_id":"8"}
可以看出错误代码中省去了双引号，不是一个正确的JSON字符串，因为@RequestBody是将前端json格式的数据转java对象了，这才导致转换成对象出现异常。这样也解释了报错信息not match : - =，因为fastjson解析是根据 “” ，所以不能匹配 ：- =</pre>
          <h3>com.alibaba.fastjson.JSONException: syntax error, expect {, actual string, pos 0, fastjson-version
            1.2.47</h3>
          <pre>
近期在封装fastjson后，加入了redis进行开发时遇到的巨坑：  com.alibaba.fastjson.JSONException: syntax error, expect {, actual string, pos 0, fastjson-version 1.2.47
错误原因：
这个错误是指json字符串的格式不正确，导致解析失败
正常来说，我们用fastjson包内置的json解析方法是没问题的。例如JSON.toJsonString（），然后在转会对象用JSON.parseObject()这样没问题。但是，假设我们加入用redis操作字符串的set方法放入redis，在用get取出来的时候，就会出问题了。
 但是我们从redis中取出的结果如下
getJsonString 结果=>"{\"address\":\"beijing\",\"data\":\"bboss.redis.JsonString\",\"gender\":\"man\",\"name\":\"JsonString\",\"id\":\"101\"}"
什么情况？加了转义的\，导致解析失败了。这就是报错的原因。
当然，也是有解决办法的
第一种就是用String类提供的替换方法，替换掉\和去掉前后的""。后在交给JSON.parseObject()转换
第二种就是调用JSON.parse()这个解析方法。解析后在交给JSON.parseObject()来转换。
public BaseResult getJsonString(String key) {
BaseResult result = new BaseResult();
  try {
      String value = stringRedisTemplateSentinel.opsForValue().get(key);
      log.info("getJsonString value 结果=>{}", value);
      String parse = (String) JSON.parse(value);  //   JSON.parse 先转义
      result.setSuccess(JSONObject.parseObject(parse, User.class));  //   JSON.parse 先转义转成对象格式
  } catch (Exception e) {
      result.setError(e.getMessage());
  }
  return result;
}
顺带一提：使用redis的哈希操作是不会导致字符串变化的</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'colresizable',
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
