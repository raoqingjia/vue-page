<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>综述</h3>
          <pre>1、MyBatis中在查询进行select映射的时候，返回结果的类型可以用resultType或者resultMap
2、resultType是直接表示返回类型的，而resultMap则适合应用复杂的映射关系
3、但是resultType跟resultMap不能同时存在</pre>
          <h3>ResultType</h3>
          <pre>resultType可以直接返回给出的返回值类型，比如String、int、Map，等等，其中返回List也是将返回类型定义为Map，然后mybatis会自动将这些map放在一个List中，resultType还可以是一个对象，举例如下：
1、返回常见类型：（类似于int或者Integer）
< select id="getLogCount" resultType="int">
　select COUNT(*) from AttLog where attTime = #{attTime} and userId = #{userId};
< /select>

2、返回Map
< select id="getDeviceInfoByDeviceId" resultType="Map">
　　select userCount as usercount,
　　fingerCount as fingercount,
　　faceCount as facecount,
　　attRecordCount as recordcount,
　　lastOnline,
　　state as status
　　from DeviceInfo where deviceId = #{deviceId} and tb_isDelete = 0;
< /select>

3、返回一个对象或者一个list（list里面是resultType的类型）
< select id="queryAllDeviceInfo" resultType="com.cachee.ilabor.att.clientmodel.DeviceInfo">
   select * from deviceInfo where tb_isDelete = 0;
< /select>

4、返回一个对象
对于SQL语句查询出的字段在相应的pojo中必须有和它相同的字段对应。
但是，如果列名没有精确匹配,你可以在列名上使用 select 字句的别名(一个 基本的 SQL 特性)来匹配标签。
< select id="selectUsers" parameterType="int" resultType="User">
  select
    user_id             as "id",
    user_name           as "userName",
    hashed_password     as "hashedPassword"
    from some_table
  where id = #{id}
< /select>

resultType对应的是java对象中的属性，大小写不敏感，
resultType如果放的是java.lang.Map, key是查询语句的列名，value是查询的值，大小写敏感
resultMap:指的是定义好了的id的，是定义好的resyltType的引用
注意：用resultType的时候，要保证结果集的列名与java对象的属性相同，而resultMap则不用，而且resultMap可以用typeHander转换
parameterType:参数类型，只能传一个参数，如果有多个参数要封装，如封装成一个类，要写包名加类名，基本数据类型则可以省略
一对1、一对多时，若有表的字段相同必须写别名，不然查询结果无法正常映射，出现某属性为空或者返回的结果与想象中的不同，而这往往是没有报错的。</pre>
          <h3>ResultMap</h3>
          <pre>应用场景：适合使用返回值是自定义实体类的情况
映射实体类的数据类型
id: resultMap的唯一标识
column: 库表的字段名
property： 实体类里的属性名

配置映射文件
type:映射实体类的数据类型  id：resultMap的唯一标识  column:库表的字段名 property:实体类里的属性名
< resultMap type="person" id="BaseResultMap">
  < id column="person_id" property="personId" />
  < result column="name" property="name" />
  < result column="gender" property="gender" />
  < result column="person_addr" property="personAddr" />
  < result column="birthday" property="birthday" />
< /resultMap>

id:当前sql的唯一标识
parameterType：输入参数的数据类型
resultType：返回值的数据类型
#{}:用来接受参数的，如果是传递一个参数#{id}内容任意，如果是多个参数就有一定的规则,采用的是预编译的形式select
* from person p where p.id = ? ，安全性很高

sql语句返回值类型使用resultMap
< select id="selectPersonById" parameterType="java.lang.Integer" resultMap="BaseResultMap">
   select * from person p where p.person_id = #{id}
< /select>

resultMap:适合使用返回值是自定义实体类的情况
resultType：适合使用返回值的数据类型是非自定义的，即jdk的提供的类型

< select id="selectPersonCount" resultType="java.lang.Integer">
  select count(*) from  person
< /select>
< select id="selectPersonByIdWithMap" parameterType="java.lang.Integer" resultType="java.util.Map">
  select * from person p where p.person_id= #{id}
< /select>

https://blog.csdn.net/xushiyu1996818/article/details/89075069</pre>

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
