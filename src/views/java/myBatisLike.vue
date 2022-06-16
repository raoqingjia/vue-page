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
方式一
在Mybatis中的第一种写法：
< select id="findUserByLikeName1" parameterType="java.lang.String" resultMap="user">
    select * from t_user where name like '%${name}%'
< /select>
$ 这种会有sql注入的问题，需要明白在 Mybatis中 $ 和 # 使用的区别。这种写法也不能加jdbcType=VARCHAR,否则也会报错。
# 符号则运用的场景比较广泛，原因是其工作原理是采用占位符的方式，将参数进行预编译操作，将传入参数统一做字符串处理，所以不存在sql的注入风险

做了个简单的测试：
@Test
public void findUserByLikeName1(){
    List< User> test = userMapper.findUserByLikeName1("Cloud");
    //select * from t_user where name like '%Cloud%'
    System.out.println(test.size());// 查出一条
    List< User> test1 = userMapper.findUserByLikeName1("' or '1=1");
    //select * from t_user where name like '%' or '1=1%'
    // 分析： '1=1%' 成立
    System.out.println(test1.size());// 查出了全部数据
}
注意：排序的字段也容易出现这个问题，在使用的时候也一定要注意。
order by ${orderBy}
第一种方式在实际开发过程中千万要注意，不要写成这样了。

方式二
在Mybatis中的第二种写法：
< select id="findUserByLikeName2" parameterType="java.lang.String" resultMap="user">
    select * from t_user where name like #{name,jdbcType=VARCHAR}
< /select>
直接在代码中拼接%, 不存在sql注入

@Test
public void findUserByLikeName2(){
    String name = "Cloud";
    List< User> test = userMapper.findUserByLikeName2("%" +name+"%");
    // select * from t_user where name like ?
    System.out.println(test.size());
 }
这种方式在一些项目中也会看到。如果没有使用如Mybatis等ORM框架，直接写sql查询就这样拼接了。

方式三（推荐）
在Mybatis中的第三种写法：
< select id="findUserByLikeName3" parameterType="java.lang.String" resultMap="user">
    select * from t_user where name like concat('%',#{name,jdbcType=VARCHAR},'%')
< /select>
concat Mysql和 Oracle区别 ,不存在sql注入
测试：
@Test
public void findUserByLikeName3(){
    String name = "Cloud";
    List< User> test = userMapper.findUserByLikeName3(name);
    // select * from t_user where name like concat('%',?,'%')
    System.out.println(test.size());
}
在实际开发中推荐使用这种方式。

注意
当使用方式三的时候，如果查询的关键字就是% ，那情况会是什么？ 初始化数据中name有9条数据中包含%。
查询的sql如下：
select * from t_user where name like concat(’%’,’%’,’%’)
查出来全部的数据，并不是只包含了%的数据，如果查询_也是一样的。
那这种情况肯定是不满足查询需求的，则需要调整。

①在代码中进行转义
@Test
public void findUserByLikeName3(){
    String name = "%";
    name = name.replaceAll("_", "\\\\_");
    name = name.replaceAll("%", "\\\\%");
    List< User> test = userMapper.findUserByLikeName3(name);
    System.out.println(test.size());
}
②使用ESCAPE
< select id="findUserByLikeName4" parameterType="java.lang.String" resultMap="user">
select * from t_user where name like concat('%',#{name,jdbcType=VARCHAR},'%') ESCAPE '/'
< /select></pre>
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
