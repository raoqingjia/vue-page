<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>parameterType属性</h3>
          <pre>
Mybatis的Mapper文件中的select、insert、update、delete元素中有一个parameterType属性，用于对应的mapper接口方法接受的参数类型。本文主要给大家介绍了关于MyBatis传入参数parameterType类型的相关内容，分享出来供大家参考学习，下面话不多说了，来一起看看详细的介绍吧。
1. MyBatis的传入参数parameterType类型分两种
基本数据类型：int,string,long,Date;
复杂数据类型：类和Map

2. 如何获取参数中的值:
基本数据类型：#{参数} 获取参数中的值
复杂数据类型：#{属性名}  ，map中则是#{key}

3.参数映射高级配置
提示 JDBC 要求，如果一个列允许使用 null 值，并且会使用值为 null 的参数，就必须要指定 JDBC 类型（jdbcType）。
要更进一步地自定义类型处理方式，可以指定一个特殊的类型处理器类（或别名），比如：
#{age,javaType=int,jdbcType=NUMERIC,typeHandler=MyTypeHandler}
参数的配置好像越来越繁琐了，但实际上，很少需要如此繁琐的配置。
对于数值类型，还可以设置 numericScale 指定小数点后保留的位数。
#{height,javaType=double,jdbcType=NUMERIC,numericScale=2}

4.案例：
4.1 基本数据类型案例
< sql id="Base_Column_List" >
  id, car_dept_name, car_maker_name, icon,car_maker_py,hot_type
< /sql>
< select id="selectByPrimaryKey" resultMap="BaseResultMap" parameterType="java.lang.Long" >
  select  < include refid="Base_Column_List" />
  from common_car_make  where id = #{id,jdbcType=BIGINT}
< /select>

4.2 复杂类型--map类型
< select id="queryCarMakerList" resultMap="BaseResultMap" parameterType="java.util.Map">
  select  < include refid="Base_Column_List" />
  from common_car_make cm
  where 1=1
  < if test="id != null">
   and cm.id = #{id,jdbcType=DECIMAL}
  < /if>
  < if test="carDeptName != null">
   and cm.car_dept_name = #{carDeptName,jdbcType=VARCHAR}
  < /if>
  < if test="hotType != null" >
   and cm.hot_type = #{hotType,jdbcType=BIGINT}
  < /if>
  ORDER BY cm.id
< /select>

4.3 复杂类型--类类型
< update id="updateByPrimaryKeySelective" parameterType="com.epeit.api.model.CommonCarMake" >
 update common_car_make
 < set >
  < if test="carDeptName != null" >
  car_dept_name = #{carDeptName,jdbcType=VARCHAR},
  < /if>
  < if test="carMakerPy != null" >
   car_maker_py = #{carMakerPy,jdbcType=VARCHAR},
  < /if>
  < if test="hotType != null" >
   hot_type = #{hotType,jdbcType=BIGINT},
  < /if>
 < /set>
 where id = #{id,jdbcType=BIGINT}
< /update>

4.4 复杂类型--map中包含数组的情况
< select id="selectProOrderByOrderId" resultType="com.epeit.api.model.ProOrder" parameterType="java.util.HashMap" >
  select sum(pro_order_num) proOrderNum,product_id productId,promotion_id promotionId
  from pro_order
  where 1=1
  < if test="orderIds != null">
   and
   < foreach collection="orderIds" item="item" open="order_id IN(" separator="," close=")">
    #{item,jdbcType=BIGINT}
   < /foreach>
  < /if>
  GROUP BY product_id,promotion_id
< /select>

4.5 注解@Param：这个比较特殊
案例一：
@Param(value="startdate") String startDate ：注解单一属性；这个类似于将参数重命名了一次
如调用mybatis的*mapper.xml中配置sql语句（DAO层）
List< String> selectIdBySortTime(@Param(value="startdate")String startDate);
则xml中的语句，需要配合@param括号中的内容:参数为startdate
< select id="selectIdBySortTime" resultType="java.lang.String" parameterType="java.lang.String">
 select distinct ajlcid from ebd_fh_ajlc where sorttime >= to_date(#{startdate,jdbcType=VARCHAR},'YYYY-MM-DD') and created_date=updated_date
 and keyvalue in (select distinct companyname from ebd_fh_company_list where isupdate='0')
< /select>

案例二：
注解javaBean,@Param(value="dateVo") DateVo dateVo；则需要注意编写的参数
List< String> selectIds(@Param(value="dateVo")DateVo dateVo);
对应的mapping文件
< select id="selectIds" resultType="java.lang.String" parameterType="com.api.entity.DateVo">
  select distinct ajlcid from ebd_fh_ajlc where sorttime >= to_date(#  {dateVo.startDate,jdbcType=VARCHAR},'YYYY-MM-DD') and created_date=updated_date
  and keyvalue in (select distinct companyname from ebd_fh_company_list where isupdate='0')
< /select></pre>
          <h3>Mybatis中传递多个参数</h3>
          <pre>1、@Param注解传参法
Public User selectUser(@Param(“userName”) String name,@Param(“userArea”) String area);
< select id=" selectUser" parameterType="map" resultMap="BaseResultMap">
  select * from user_user_t where user_name = #{userName，jdbcType=VARCHAR} and user_area=#{userArea,jdbcType=VARCHAR}
< /select>
#{}里面的名称对应的是注解 @Param括号里面修饰的名称。
这种方法在参数不多的情况还是比较直观的，推荐使用。
当接口中只有一个参数(并且没有用@Param())时候，需要在xml中添加响应的参数类型parameterType；
如果是多个参数(每个参数都是用@Param())的时候，就不会去读参数类型parameterType，直接取得参数里面的值。

2、Map传参法
Public User selectUser(Map< String，Object> paramMap);
< select id=" selectUser" parameterType="java.util.Map" resultMap="BaseResultMap">
  select * from user_user_t where user_name = #{userName，jdbcType=VARCHAR} and user_area=#{userArea,jdbcType=VARCHAR}
< /select>
#{}里面的名称对应的是 Map里面的key名称。
这种方法适合传递多个参数，且参数易变能灵活传递的情况。

3、Java Bean传参法
创建User对象
Public User selectUser(User paramMap);
< select id="selectUser" parameterType="com.po.User" resultType="com.po.User">
		select * from t_user where username=#{username} and password=#{password}
< /select>
#{}里面的名称对应的是 User类里面的成员属性。
这种方法很直观，但需要建一个实体类，扩展不容易，需要加属性，看情况使用。

4、直接使用JSON传递参数
Controller层收到JSON型数据后，直接传递给mapper层进行查询操作，简单 方便

@ApiOperation(value = "多个参数查询_通过JSON传递多个参数")
@PostMapping("findByJSONObject")
public ResultMsg findByJSONObject(@RequestBody JSONObject params){
    List result= employeeMapper.findByJSONObject(params);
    return ResultMsg.getMsg(result);
}
List < Employee> findByJSONObject(JSONObject params);

< select id="findByJSONObject" resultMap="BaseResultMap" parameterType="com.alibaba.fastjson.JSONObject">
  select *  from employee where gender = #{gender} and age = #{age}
< /select>

5、传递集合类型参数List、Set、Array
在一些复杂的查询中（如 sql中的 in操作），传统的参数传递已无法满足需求，这时候就要用到List、Set、Array类型的参数传递，具体使用如下：
@ApiOperation(value = "多个参数查询_通过List、Set、Array传递多个参数")
@PostMapping("findByList")
public ResultMsg findByList(@RequestBody List< String> list){
    List result= employeeMapper.findByList (list);
    return ResultMsg.getMsg(result);
}
mapper
List < Employee> findByList(List list);
xml
< select id="findByList" resultMap="BaseResultMap" >
  SELECT * from employee where age in
    < foreach collection="list" open="(" separator="," close=")" item="age">
      #{age}
    < /foreach>
< /select>
这里foreach表示循环操作，具体的参数含义如下：

foreach元素的属性主要有 item，index，collection，open，separator，close。
item表示集合中每一个元素进行迭代时的别名，
index指定一个名字，用于表示在迭代过程中，每次迭代到的位置，
open表示该语句以什么开始，
separator表示在每次进行迭代之间以什么符号作为分隔符，
close表示以什么结束
在使用foreach的时候最关键的也是最容易出错的就是collection属性，该属性是必须指定的，但是在不同情况下，该属性的值是不一样的，主要有一下3种情况：
1.如果传入的是单参数且参数类型是一个List的时候，collection属性值为list
2.如果传入的是单参数且参数类型是一个array数组的时候，collection的属性值为array
3.如果传入的参数是多个的时候，我们就需要把它们封装成一个Map或者Object

6.参数类型为对象+集合
该类参数与java Bean参数形式类似，只不过更复杂一些，如下面的Department类，除了基本字段还包括一个Employee的列表
bean
@Data
public class Department {
    private Long id;
    private String deptName;
    private String descr;
    private Date createTime;
    List< Employee> employees;
}

controller
@ApiOperation(value = "多个参数查询_对象+集合参数")
@PostMapping("findByDepartment")
public ResultMsg findByDepartment(@RequestBody Department department){
    List result= employeeMapper.findByDepartment(department);
    return ResultMsg.getMsg(result);
}

mapper
List < Employee> findByDepartment(@Param("department")Department department);

xml
< select id="findByDepartment" resultMap="BaseResultMap" parameterType="com.wg.demo.po.Department">
    SELECT * from employee where dept_id =#{department.id} and age in
    < foreach collection="department.employees" open="(" separator="," close=")" item="employee">
        #{employee.age}
    < /foreach>
< /select>
这里foreach 对应Departmen部门中的List employees
          </pre>
          <h3>实体类型注册别名</h3>
          <pre>有时候在MyBatis的映射文件中，会发现这样一种情况：parameterType的参数有时候直接写类型名称就可以了，比如：
< delete id="deleteUser" parameterType="Integer">
        delete from user where uid = #{uid}
< /delete>

但有时候，需要写全限定类名（需要把完整的包路径写上），比如：
< insert id="addUser" parameterType="com.po.MyUser">
    insert into user (uname,usex) values(#{uname},#{usex})
< /insert>

为什么实体类不能直接写类名（MyUser）呢？
为此，我查询了MyBatis的官方文档，mybatis已经把常用的数据类型注册了"别名"，因此当使用基本类型或者String类型时可以直接写类型名称，使用实体类型时必须使用全限定类名。

如果不想用全限定类型名称怎么办？
MyBatis提供了两种方法为你的实体类型注册别名： a、XML配置  b、注解方式

a、XML配置：在mybatis的配置文件中，配置以下内容：
< typeAliases>
  < typeAlias alias="MyUser" type="com.po.MyUser"/>
< /typeAliases>
配置好后就可以直接在sql映射文件中使用别名，降低冗余的全限定类名书写。
< insert id="addUser" parameterType="MyUser">
    insert into user (uname,usex) values(#{uname},#{usex})
< /insert>

b、注解方式：
在mybatis的配置文件中，配置如下内容,name里为你的实体类型所在的包，即你想为实体类型注册别名所在类的包路径
< typeAliases>
  < package name="com.po"/>
< /typeAliases>
配置完成好后，在MyUser类中使用@Alias注解
@Alias("MyUser")
public class MyUser{
......
}
这样就可以直接在sql映射文件中使用别名.
< insert id="addUser" parameterType="MyUser">
    insert into user (uname,usex) values(#{uname},#{usex})
< /insert>
在每个com.po包中的JavaBean，如果没有使用注解的情况下，会使用Bean的首字母小写的非限定名来作为它的别名。比如上个例子中，没有使用@Alias(“MyUser”)情况下，自动注册以myUser为别名。
          </pre>
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
