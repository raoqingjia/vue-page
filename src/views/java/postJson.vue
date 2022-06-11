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
请求报文是json格式的，接口是post请求方式，当时post的代码是直接复制粘贴之前get请求的代码，结果没注意，接口一请求就包400,查了半天原来是post接口对json报文接口格式代码有问题
@RequestMapping(path = "/setStringRedisData", method = RequestMethod.POST)
public BaseResult setStringRedisData(@RequestParam String  key, @RequestParam  String value, String time){
    logger.info("/redis/setStringRedisData 入参 key=>{},value=>{},time=>{}",key,value,time);
    BaseResult result = redisService.setStringRedisData(key,value,time);
    logger.info("/redis/setStringRedisData 结果=>{}", JSON.toJSONString(result));
    return result;
}
上便是post接口入代码，每次请求接口都包400，入参错误，意思是未获取到key入参字段，但是明明报文里有key字段，原来是我json格式用postman中定义的是raw格式，Content-Type定义的不是application/x-www-form-urlencoded编码的内容</pre>
          <h3>java后台接收json数据</h3>
          <pre>
1.以@RequestParam接收
@PostMapping("/getList")
public String ccc1(@RequestParam("name") String name) {
    return name;
}
@RequestParam可以接受处理Content-Type: 为 application/x-www-form-urlencoded编码的内容。（Http协议中，如果不指定Content-Type，则默认传递的参数就是application/x-www-form-urlencoded类型）
postman中的raw就不行

2.以实体类方式接收
@PostMapping("/getList")
public String getList(@RequestBody TestUser user) {
    return "success";
}
@RequestBody接收x-www-form-urlencoded格式的json报415这里得区分一下是postman还是生产接口，有时候postman的请求方式是x-www-form-urlencoded格式就包415，但是接收raw格式的没问题，这里后续单独写文章分析，这里先注意一下

3.要想省事用JSONObject
@PostMapping("/getList")
public String getList(@RequestBody JSONObject params) {
    return "success";
}
4.以map接收
@PostMapping("/getList")
public boolean getList(@RequestBody Map< String,Object> map) {
    if (map.containsKey("name")){
        String name = map.get("name").toString();
        boolean b = testUserService.selectAllByName(name);
        return b;
    }else {
        return false;
    }
}
5.List接收
当前端传来这样一个json数组：[{id,username,password},{id,username,password},
{id,username,password},...]时，用List< E>接收
@PostMapping("/getList")
public String getList(@RequestBody List< TestUser> list) {
    for (TestUser user : list) {
        System.out.println(user.toString());
    }
    return "success";
}</pre>
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
