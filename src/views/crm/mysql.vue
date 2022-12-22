<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>MySQL的客户端和服务端</h3>
          <pre>
<span>① 服务端：</span>
在系统服务中开启关闭MySQL;可以设置手动启动或自动启动，自动启动会占内存的；
MySQL服务器占用3306端口。
<span>② 客户端：</span>
使用命令行去链接，在命令行中只能执行SQL命令，mysql命令不区分大小写
如果MySQL设置手动启动，每次开机都都要执行net start mysql启动mysql</pre>
          <h3>MySQL的默认配置</h3>
         <pre>
<span>① 查看数据库配置文件</span>
  linux cat/var/lib/mysql/db1/db.opt
  windows mysql安装目录/data 把文件拖拽到记事本
<span>② 数据库使用默认字符编码</span>
  utf8 英文单字节 中文三字节 Unicode统一码   //面向全球
  GBK 双字节   //只面向国内
  数据库建立时就需要考虑用户编码的定义
<span>③ 字符的排序方式</span>
  collation 排列、校对
  show collation;
  show collation like 'gbk%';  %在此表示通配符
  show collation like 'utf8%'    查找utf8开头的排列方式
  show collation like 'utf8\_%'  查找utf8_ 开头的排列方式  通过%值匹配匹配 utf8_  \_将_转译，否则将_理解也是一个通配符
  下面是常用的排序
  gbk_chinese_ci  中文字符排序不区分大小写 _ci是表示不区分大小写
  utf8_general_ci
<span>④ 数据库目录中的表文件</span>
  user.frm  --表结构文件
  user.myd  --数据存储文件
  user.myi  ---索引文件
<span>⑤ 存储引擎engine</span>
  1）innodb
  支持数据库高级功能  支持事务、外键
  2）myisam
  数据存储基本功能/效率非常高  常用的存储引擎
</pre>
          <h3>MySQL的命令执行</h3>
          <pre>
 demo 是数据库名  sheet01 是数据表名
<span>① 对MySQL的操作</span>
<p class="pre-cmd">* 关闭/重启mysql的服务
  net stop mysql
  net start mysql
* 命令连接到MySQL服务器
  mysql -uraoqingjia  -p123456
* 指定ip和端口
  mysql -h   指定IP地址 -P   指定端口 大写的P是端口，小写的P是密码
  mysql -hlocalhost -P3306
* 退出客户端
  exit 或 \q    window里面ctrl+c也退出啦</p>
<span>② 对数据库的操作</span>
<p class="pre-cmd">
* 显示mysql中所有数据库
  show databases;  等同于  show schemas;
  //别忘了加s、加分号;  schema：数据库中一组对象的集合，即数据库
* 创建数据库
  create database demo;  //database没有s 别忘了加分号 ;
  create database demo charset utf8   //utf8字符编码的设定是重点
  create database demo charset gbk
*  查看指定数据库信息
  show create database  demo0;
*  修改数据库编码
  alter database demo  charset gbk;
  修改编码类型的同时，排序的方式也会发生改变变成gbk_chinese_ci
  数据库的库名不许改，只能改库的编码，和排序方式
* 修改数据库排序（很少用）
  alter database demo  collate  gbk_bin;
  这里写的是collate动词
*  进数据库
  use demo;
* 删除库（不可恢复）
  drop database demo01;</p>
 <span>③  对数据表的操作</span>
<p class="pre-cmd">*  查看数据库中所有的表
  show tables;   //table需要加s
*  查看一张表的编码类型，字段
  desc  sheet01;
*  查看一张数据表的字段和数据
  select * from sheet01;   //  *是查询所有字段
  select age,id,name  from sheet01;  //值查询age，id，name三个字段
  select * from sheet01  limit 10;    //  limit 10 只看前10行
* 创建数据表
  create table sheet01 (     // 表结构，记得是用括号()
      id int,                  //id是你声明的key值,是int整数类型，记得逗号隔开
      name varchar(100),       //varchar(100)可变的字符，字符最多存100个字节
      salary decimal(6,2)      // 一共6位数，有2位小数，前四后二  例如  2222.22
    )engine=innodb charset=gbk;                   //记得加分号 engine=innodb / myisam
  创建表结构时没必要非写成一行，可以enter回车最后;结束就行
  varchar长度可变的字符串，最长不能超过16
* 向表里添加数据
  insert into sheet01
            (id,name,salary) values
            (1,'Tom',100.87);
  insert into sheet01
            (id,name,salary)
            values
            (2,'Jerry',150.33);
  insert into sheet01 (id,name,salary) values (3,'Emily',300.06);
如何你想表中插入数据是，像id,name,salary写成了ids,names,salarys会报错，或者是插入数据不符合表定义的类型也会报错
* 修改表名
  rename table sheet01 to  tb_sheet01;  //sheet01表名修改为tb_sheet01
* 修改表的引擎属性
  alter table  sheet01
  engine=myisam;
* 修改表编码
  alter table  sheet01
  charset=utf8;
* 查看修引擎、编码是否改成功码
  show create table  sheet01;
  show create table  sheet01\G;  // \G防止显示详细信息时换行
* 添加字段
  first  加在第一个 、 after  指定加在某个字段之后
  alter table sheet01 add (  //如果不涉及插入位置可以一次插入多个
       sex char(1),
       tel char(11)
  );
  alter table sheet01 add  id int  first;    //将id添加在第一个字段前
* 修改字段名和数据类型
  alter table sheet01 change sex gender varchar(10); 将sex改为gender并且赋值变量类型
* 修改字段数据类型
  alter table sheet01 modify age varchar(20);   将age类型修改为varchar(20)
* 修改字段顺序
  alter table sheet01 modify age varchar(20) after name ;  将age改到name的后边
* 修改id是7的商品，price降价12%，修num改库存量为20
  update sheet01
  set price=round(price*0.88),num=20
  where id=7;
* 删除商品id是7
  delete from sheet01 where id=7;
* 删除字段
  alter table sheet01 drop  age;  直接删除age;
* 删除表（不可恢复）
  drop table sheet01;
  drop table if exists sheet01;   //if exists表示如果存在则删除
</p>
<span>③ 数据库分类</span>
1） 关系型数据库
用表保存数据，相关数据存入一张表
2) 非关系型数据库
   对象数据库
   键值数据库
<span>④ 命令行错误提示</span>
-> 这样显示说明你没加分号，需要加;
ERROR 1049 说明输入的 名称有误，没有找到
ERROR 1064 说明输入的命令是错的，看看是不是没加s，或是单词写错了，或是定义类型是错的
ERROR 1045 (28000): Access denied for user 'raoiqngjia'@'localhost' (using password: YES)
//报这个错误时我修改了好多配置但是感觉太费事，最简单粗暴的是卸载重装，因为我上次安装时设置密码时貌似不符合规格
error    Subquery returns more than 1 row
查询结果有多行，过滤结果不能用 = 判断
Unknown column 'total' in 'field list'    文件中没有找到 total
Table '表名db.table'' doesn't exist               多半是表不存在或者表名写错或者database选错

          </pre>
          <h3>MySQL的数据类型</h3>
          <pre>
<span>字符串</span>
char(固定字符长度)      定长字符串()指定固定长度,字符长度不足时补充空格 最多255个字节，
varchar(最大字符长度)   可变长度字符串，超过最大长度将会出错   最多65535个字节，但使用时一般不超过255个字节
text                    65535字节，但是只占表的10个字节，如果表述文本就用text
blob                    大数据对象，以字节方式存储数据
<span>数字</span>
tinyint          1个字节  -128~127
smallint         2个字节
int              4个字节  21.4亿左右
bigint           8个字节
float            4个字节
double           8个字节
decimal/numeric  10个字节
float/double  可能保存的值不精确 ，
decimal保存精确浮点数需要指定总长数，跟小数点位数
decimal(4,2)  54.23;
decimal(5,2)  654.23;

unsigned   不带符号
zerofill   显示时，位数不足，可以补0
int(6)  zerofill   不影响保存的数据范围，值影响查询显示的位数，不足6位位补0，超出6位数字无影响，不加zerofill是没有补0效果的
<span>日期类型</span>
date         年月日
time         时分秒
datetime     年月日时分秒到9999年
timestamp    同datetime，到2038年，尽量别用
在行数据更新时，会自动修将当前行第一个timestemp字段改为系统当前时间
也可以使用bigint整数表示时间
java中时间是用长整型毫秒值表示
毫秒值： 1970-1-1-0点开始  1s=1000ms
<span>注意点</span>
gbk    中文2个字节   英文1个字节
utf8   中文3个字节   英文1个字节
一张表的表头字段总字节量限制为 65535
varchar 需要额外2个字节表示长度
一个字段如果允许null值，需要额外的1个字节，理解为null占1个字节
text类型是65535个字节，但是仅占用表的10个字节额度


测试数据类型，以及表65535字节量限制
create table sheet(
      id      int(6),         --4个字节
      title   varchar(21842)  --21842*3+2+1
)engine=innodb charset utf8;

create table sheet(
      id       int(6),         --4个字节
      des      text,  --10个字节
      title    varchar(21833)  --21833*3+2+1
)engine=innodb charset utf8;

          </pre>
          <h3>表约束</h3>
          <pre>
* 限制字段的取值
* 所有的约束保存在 information_schema库中 table_constraints 表中
* 主键、非空、唯一、检查(mysql不支持)  这五种约束都不是必须
https://www.cnblogs.com/haodawang/p/5967222.html
<span>主键简介</span>
1）对一行数据的唯一标识
    不能重复
    不能为空为null值
2）尽量使用业务无关数据，无意义的作为主键
    连续自增整数 auto_increment
    随机字符串（常用uuid）
3）主键会自动添加索引
<span>添加主键</span>
1）建表时添加主键
create table sheet(
  id bigint primary key auto_increment,   //auto_increment自增，可加可不加
)
2）修改表添加主键
  alter table sheet add primary key(id);
3) 删除主键
   alter table sheet  drop primary key

<span> auto_increment自增值   </span>
1） 查看下一个自增值
    show create table sheet\G;
1) 自增数值只会增加，不会因为删除数据减少
2）如果在表中手动插入一个更大的主键值，会从插入的这个值开始继续递增
3) 只有主键才能自增,其他地方不能用auto_increment
4）如果删除自增主键约束，先取消自增，再取消主键约束
    alter table sheet modify id bigint;  //先取消自增
    alter table sheet  drop primary key;  //再取消主键

<span>测试主键</span>
create table sheet(
  id bigint primary key auto_increment,
  name varchar(20)
)
插入 一行数据
insert into sheet (name) values ("张三");
insert into sheet (name) values ("李四");
查询
select * from sheet
<span>双主键(一般不用)</span>
两个字段合并作为主键
create table stu_inform(
    id int,
    name varchar(20),
    grade double,
    primary key(id,name)
);
接下来我们插入一个数据
insert into stu_inform values(1,'张三',100.00),(1,'李四',100.00);
你会发现这条语句是完全可行的，是完全没有错误的，这是为什么呢，这是因为这是一个联合主键，它的作用是id不能重复 且 姓名也不能重复，注意是且。
你如果这样写的话
insert into stu_inform values(1,'张三',100.00),(1,'张三',100.00);//Error
你如果这样写的话就是大错特错了，因为这违反了联合主键。因为id和姓名同时相同了就是这个道理。
<span>非空约束</span>
不能取null值,主键primary key一定是非空约束
如何添加非空约束
1） 创建表时
  create table sheet(
     id int primary key,    //主键一定是非空约束
     name varchar(20) not null
  );
2） 查看表中的非空约束
  desc sheet;
  show create table sheet\G;
3） 修改字段添加非空约束
   alter table sheet modify name varchar(32) not null;
4） 删除非空约束
   alter table sheet modify name varchar(32)  null;
<span>非空约束测试</span>
create table sheet(
     id bigint unsigned   primary key auto_increment,      //unsigned表示无符号，在这里表示是正数，自增组件是整数
     name varchar(20) not null,
     gender char(1)
   );
insert into sheet (gender) values ('M');  --这样的插入是错误的，因为那么是非空约束，那么也要赋值
ERROR 1364 (HY000): Field 'name' doesn't have a default value  报这个错误
insert into sheet (name,gender) values ('张三','M');  //给name赋值就对了
<span>唯一约束</span>
限制字段的值不能重复，但是允许多个null值，
唯一约束容易与主键混淆，记住主键是多是利用auto_increment生成数值，如果不添加auto_increment，每次给表里插入数据都要给主键赋值，主键与唯一约束最大的不同是，主键多半不涉及业务字段，只是起个参照作用，但是唯一约束的字段是涉及业务值而且不能重复
 1）创建表时添加唯一约束
  create table sheet(
    name varchar(20) unique,   //unique唯一约束,单个字段不重复
  )
  create table sheet(
    name varchar(20) ,
    gender char(1),
    ...,
    unique key (name,gender)  //两个组合字段不重复
  );
2） 修改字段，添加唯一约束
    alter table sheet modify name varchar(20) unique;
3)添加唯一约束字段，但是存在重复数据就无法添加
 alter table sheet add unique key (name，gender);
4)查看唯一约束名
  show create table sheet\G;
5)取消唯一约束
  alter table sheet drop index 约束名（利用4）看约束名）;
6)测试 修改学生表添加学号字段，不能重复
alter table sheet  add  stu_num int unsigned  unique after id;
-- 添加在id字段后添加stu_num字段
下面是另一种写法
alter table sheet add unique key 'abc' (stu_num)   //stu_num指定字段 abc约束名，不起名系统自动分配
<span>外键约束</span>
一般引用另一个主键中的值，一般不适用外键
mysql的 innodb引擎才支持，能用外键意味效率低
        myisam引擎不支持外键，不能用外键意味效率高
1）创建表时添加
create table sheet01(
   stu_id int,
    .....,
   foreign key(stu_id) references sheet02(id)   //给表中stu_id添加外键，利用的是sheet02表中id字段
);
2）修改字段添加外键
   alter table sheet01 add foreign  key(stu_id) references sheet02(id);
3）取消外键约束
   alter table sheet01  drop foreign  key 约束名;  约束名利用show create table sheet01查看
注意 sheet01 中的stu_id字段是引用sheet02中的id字段，二者的字段类型一定要一样;
<span>检查约束（mysql不支持）</span>
create  table sheet01(
    gender
    age
    ...,
    check(gender='M' or gender='F'),   gender只能取M 或 F
    check(age>=16 and age<=60),        age取 16至60之间
)
<span>设置默认值</span>
create table sheet01(
    status tinyint(1)  default 0   // 设置默认值default 0
);
<span>添加注释</span>
在逗号的前面利用comment添加注释，
create table sheet01(
    id  bigint primary key auto_increment  comment '自增主键'，
    status  tinyint      comment '状态'，
    name    varchar(10)  comment '姓名'，
    gender char(2)       comment '性别'
);
<span>添加注释</span>
一般来说mysql是运行在非严格模式下
    变量默认是空值
    非空字段会插入‘’
    字符串超长会截断插入
show variables  like 'sal_mode';
修改mysql运行在严格模式下
set global sql_mode='STRICT_TRANS_TABLES';</pre>
          <h3>sql分类</h3>
          <pre>
sql structured query language
结构化查询语言
sql标准语法
各个数据库厂商都有自己的扩展语法
mysql       扩展
oracle      plsql
sql server  t-sql
sql分类
DDL   --定义语言，建库建表修改表..... create alter drop truncate  不支持事物
truncate  table sheet  删除表自增清零 执行效率高  truncate删除表并创建一张新表
delete from sheet      自增数值不清零
DML   -- 数据操作语言，增删改  insert delete update  select 支持事物
DQL   -- 数据查询语言，select
TCL   -- 事物控制语言  commit rollback
DCL   -- 数据控制语言  给用户分配权限相关SQL

 DML 操作数据
<span>插入数据 insert</span>
insert into sheet01 (gender,name)  values ('M','张三')，('F','李四')
向表中一次插入多条数据，（非标准SQL，只有mysql支持）
insert into sheet01 (gender,name) select name，gender from sheet02；
从sheet02表拿name，gender字段插入到sheet01表中
<span>复制表数据</span>
insert into sheet01 (gender,name) select name，gender from sheet01；
从sheet01表拿name，gender字段插入到sheet01表中，这就算是同表复制了
create table sheet03 as select id,gender,name from sheet01;
指定字段复制sheet01数据，并创建新表sheet03，但是这样的复制，可能造成字段约束类型丢失，要查表后添加约束类型
<span>修改数据</span>
1)整张表多个字段修改
update sheet01 set name='abc' ,age=23 ,gender=null ;
1)指定位置，多个字段修改
update sheet01 set name='abc' ,age=23 ,gender=null where id=43;
update sheet01 set age=age+1   where id=43;
update sheet01 set age=age+1   where gender is null;  //不能=null 而是is null;
2) 多个字段多行修改
update sheet01 set name='abc' ,age=23 ,gender=null where id in(4,3,5,2);
<span>删除数据</span>
清空表数据
1）delete from sheet01;
指定位置清空某一行数据
2）delete from sheet01  where id=43;
delete from sheet01  where id in(   //这里增加了过滤条件
     select id from sheet02 where name='LiMing'
);
<span>DQL 查询操作</span>
select
   x.id    first_id,
   x.name ,
   y.id    second_id,  //second_id是起的别名
   y.gender
from
   sheet01 x ,sheet02 y   //sheet01用表示 x ,sheet02用表示 y
 where
    x.id=y.id   //限制条件sheet01中id字段等于sheet02中id
 limit 20;

<span>添加查询过滤条件</span>
where 的判断子句
 = 等
<>  or != 不等
>   大于
<    小于
>=      大于等于
<=         小于等于
and   并且,优先级高
eg: salary>= 1000 and salary<=2000
or    或者
between 小 and 大  范围判断[小, 大]  是闭区间等于
eg:  where id  between 100 and 120
in  指定固定的值
id in (2,3,5,6)

is null   判断是否是null值
is not null

like   模糊查询 通常只查字符串
%  匹配0到多个任意字符
_  匹配单个任意字符
\_ 转义成斜杠字符
\% 转义成百分号字符
\\ 转义成一个斜杠字符
not between 小 and 大
not in
not like
escape '\' 指定转译运算符
       '\_' 普通下划线字符
       '\%' 普通百分号字符

1）查询薪水大于等于1000
select  id,name,salary from sheet01 where salary>=10000 ;
2）查询薪水是大于10000 ，小于15000的
select  id,name,salary from sheet01 where salary in(10000,15000);
或者
select  id,name,salary from sheet01 where salary >=10000 and salary=<15000;
3）查询薪水是不是大于10000 ，小于15000的
select  id,name,salary from sheet01 where salary not in(10000,15000);
4）查询job_id是IT_PROG
select  id,name,salary from sheet01 where job_id='IT_PROG';   //='IT_PROG' 等于的是字符串
或是
select  id,name,salary from sheet01 where job_id in('IT_PROG');
5) 查询 name中包含 ar 的字段
select  id,name,salary from sheet01 where name like '%ar%';  //注意这里的%
6) 查询 name中第三个字符是e
 select id,name,salary from sheet01 where name like '_ _e%';  //_  匹配单个任意字符
7) 查询 姓名中有en 且在80 部门的员工
 select employee_id,first_name,salary,department_id from sheet where (first_name like '%en%' or last_name like '%en%') and department_id=80;
where (first_name like '%en%' or last_name like '%en%') and department_id=80  这种判断写法要理解
8) 注意这种 in 过滤 同时过滤两个字段
select  id,name,salary from sheet01 where (job_id ,salary)in('IT_PROG',15000);
 <span>order by 排序</span>
order by后面可以跟字段别名
select ... from ... where... order by  a 按a字段从小到大排序
order by a，b  按a字段排序，a相等按b排序
asc  ascend 升序 默认升序排序
desc descend  降序
order by a desc  b  asc    按a字段降序排，按b字段升序排lie
order by avg desc limit 1这个逻辑，以后求最高，最少可以借鉴这个逻辑
 <span>distinct  去重重复数据</span>
selsect distinct id  from   ....  查询字段 id 并去除重复数据
distinct 一般只去重一个字段，最多去重两个字段，字段多了就没意义了
select distinct id  from   sheet01 where id is not null order by id  去重排序查看id号码
<span>limit 分页查询</span>
limit  跳过数量，每页的数量
limit 关键字通常写在sql的最后面
limit 5 前五条
limit 0,10   从第一条开始的10条
limit 10,10  从第十一条开始的10
limit 20,10  从第二十一条开始的10条
查询第page页，每页10条
limit(页数-1)*每页条数 ，每页条数
limit 0,5     第1页，每页5条
limit 40,20   第3页的20条数据
limit 32,8    第5页的8条数据
<span>字段别名</span>
可以将复杂的字段起一个别名简单化
select name n ， gender as g from ...  as 一般不用加
select employee_id, concat(first_name,'--',last_name),salary*12 nianxin from employees;
concat()字段的拼接
salary*12 nianxin  对字段进行处理并附别名
* mysql 中where 子句不能使用字段别名，where子句是不能用别名来过滤的
select employee_id, concat(first_name,'--',last_name),salary*12 nianxin from employees where nianxin>=150000;  //error错误写法
select employee_id, concat(first_name,'--',last_name),salary*12 nianxin from employees where salary*12>=150000;  //error错误写法

 <span>mysql字符串函数</span>
char_length('a 中') - 字符数
length('a中') - 字节数，看设置的编码格式 utf8 三个字节  gbk 两个字节
concat('a','b','c') -字符串连接
concat(';','a','b','c') -用分隔符连接字符串
instr('id','def')  返回id中第def的位置，找不到返回0 类似于js中的indexof
locate('abc', '---abc---abc---abc-') - 返回第一个子串的位置，从1开始，找不到返回0
locate('abc', '---abc---abc---abc-',5) - 从指定位置向后找
insert('abcdefghijkl',2, 11, '---') - 子串中从2位置开始的11个字符替换成---
lower('AdFfLJf') - 变为小写
upper('AdFfLJf') - 变为大写
left('AdFfLJf',3)  - 返回最左边的三个字符  输出 AdF
right('AdFfLJf',3) - 返回最右边的三个字符  输出 LJf
lpad('abc', 8, '*') - 左侧填充，源字符串少于指定长度用*填充，相当于left填充
rpad('abc', 8, '*') - 右侧填充，源字符串少于指定长度用*填充，相当于right填充
trim('  a  bc   ') - 去除两端空格
substring('abcdefghijklmn', 3) - 从3位置开始的所有字符
substring('abcdefghijklmn', 3, 6) - 从3位置开始的6个字符
repeat('abc', 3) - 重复三遍abc
replace('Hello MySql','My','Your') - 子串替换
reverse('Hello') - 翻转字符串
space(10) - 返回10个空格
案例
select char_length('数学');  2个字符
select length('数学');  4个字节，编码格式不同字节不同
select employee_id,first_name,salary from employees where instr(first_name,'en')=3;
1）将电话号码中的 4 替换为8
select employee_id,first_name,salary,phone_number ,replace(phone_number,'4','8') from employees;
 replace(phone_number,'4','8') 是个字段，这个字段下面的数据中的4都替换为了8
2）email 中去掉第一个字符，与last_name不相同的员工
select  last_name,email,substring(email,2)   from employees where last_name<>substring(email,2);
3）first_name与last_name 长度相同
 select first_name,last_name from employees where char_length(first_name)=char_length(last_name);
4）first_name与last_name 用--连接  且--在一竖列上   用别名 newname显示
select   concat(lpad(first_name, 10, ''),'--',last_name) newName from employees;
5）first_name与last_name首字母相同的人
 select  name,first_name,last_name  from sheet01 where left(first_name,1)=left(last_name,1);
 <span>数字函数</span>
ceil(3.94);  - 舍去，向上取整 ，只能取到个位
floor(3.94); - 舍去，向下取整 ，只能取到个位
format(391.536, 2); - 数字格式化为字符串，###,###.###，四舍五入，第二个参数为小数位数，保留多少小数
round(673.4974); - 四舍五入
round(673.4974, 2); - 四舍五入到小数点后两位

truncate(234.39, 1); - 不四舍五入，直接砍去舍去至小数点后1位,直接切掉小数点
rand() - 随机浮点数,[0,1)
 获取 3-8的随机数
		select floor(rand()*6)+3;
 获取 8-10的随机数  0-2  *3 +8
		select floor(rand()*3)+8;

round() truncate()  0是个位 -1 十位 -2百位  1是 0.1位 2是0.02位
round(673.4974, -1);    670
round(673.4974, -2);    700
truncate(234.39, -1);   230
truncate(234.39, -2);   200
            <span>日期函数</span>
now();  2018-08-04 22:16:19 返回当前年月日时分秒
curdate();  2018-08-04 返回当的日期
curtime();  22:20:23 返回当前的时间
data(时间); 提取日期或日期/时间表达式的日期部分
time(时间); 提取日期或日期表达式的时间
extract(字段 from 日期);  返回日期/时间
  extract常用字段的合法值
  microsecond
  second
  minute
  hour
  day
  quarter
  month
  year
date_add(日期,interval 数量 字段)    给当前日期添加指定年月日
date_sub(日期,interval 数量 字段)      给当前日期减去指定年月日
datediff(日期1，日期2)  返回两个日期相差多少天  大日期在前 小日期在后为正
date_format(日期，格式) 用不同的格式显示
 date_format常用字段的合法值
%Y  年 4位
%y  年 2位
%W 星期名
%a 缩写星期名
%b缩写月名
%c 月数值
%d 月的天 （00-31）
%e  月的天    （0-31）
%M  月名
%m 月数值（00-12）
%I 小时（1-12）
%p AM或PM
%S 秒（00-59）
%s 秒（00-59）
%T 时间 24小时（hh:mm:ss）
last_day(now()) 返回当前月最后一天
- 把非标准格式的时间转成标准格式
str_to_date(非标准格式的时间,格式);

案例
select date(now());   2018-08-04
select time(now()); 22:51:23
select extract(year From now());  // 2018
select date_add(now(),interval 10  year);    //2028-08-04 23:09:37
select date_add(now(),interval -240  month); // 1998-08-04 23:09:57
select datediff(now(),'1995-6-12');  //8454天
select date_format(now(),'%Y-%m-%d %H:%i:%s'); // 2018-08-04 23:25:16
select date_format(now(),'%d/%m/%Y'); // 04/08/2018
select date_format(now(),'%Y年%m月%d号'); // 2018年08月04号
把14.08.2008 08:00:00 转成标准格式
select str_to_date('14.08.2008 08:00:00','%d.%m.%Y %H:%i:%s');
hire_date入职时间，求已经入职15年的员工
select  name,hire_date from employees  where  hire_date< date_add(now(),interval -15 year); //date_add(now(),interval -15 year) 向前推15年
select  name,hire_date from employees  where  datediff(now(),hire_date)>15*365+5;
1997年上半年入职的人
select  first_name,hire_date from employees where hire_date between '1997-1-1' and '1997-6-31';
select  first_name,hire_date from employees where extract(year from hire_date)=1997 and extract(month from hire_date)<7;
所有1月份入职的
select  first_name,hire_date from employees where  extract(month from hire_date)=1;

<span>数值计算</span>
+ - * /   7%2等效于mod(7,2);
查询员工信息，其年终奖为（年终奖=工资*3）;
select name,id,salary,salary*3 '年终奖' from sheet
<span>处理null值</span>
ifnull(数据1，数据2)  如果不是null 返回数据1 是null返回数据2
coalesce(数据1，数据2，....) 从左到右返回第一个不是null的值
update  sheet set salary=ifnull(salary,0);
select coalesce(null,213,43,null);   返回第一个不是null的，返回213
数学表达式中有null返回值都是null，这时候就要处理null值
select first_name,salary,number,salary*coalesce(number,0) from sheet01;  //coalesce(number,0) 如果number是null那就返回0喽,返回第一个不是null的值

<span>数据库的加密</span>
md5()  //常用的格式 一串16位的字符
sha()
select md5('123');  //202cb962ac59075b964b07152d234b70
select md5('456');  //250cf8b51c773f3f8dc8b4be867a9a02
insert into user('user','password') values('abc',md5('abs'));
<span>聚合函数</span>
对多行数据进行统计，多行数据交给函数处理，产生一个计算结果
count()  计数，数量 一般情况下()里写*
max()
min()
avg()
sum()
不能直接与普通字段一起查询，没有什么意义
select sum(salary),avg(salary),count(salary),max(salary),min(salary) from employees;
+-------------+-------------+---------------+-------------+-------------+
| sum(salary) | avg(salary) | count(salary) | max(salary) | min(salary) |
+-------------+-------------+---------------+-------------+-------------+
|   691400.00 | 6461.682243 |           107 |    24000.00 |     2100.00 |
+-------------+-------------+---------------+-------------+-------------+
1)count()遇到null时是会忽略null值的
用count()求一共有多少数据行数
select count(*) from employees;  //*类似通配符
select count(1) from employees;  //1可以使随意一个数1000也行，比*号效率更高
2)avg()遇到null时是会忽略null值的,有时候要用null的判断语句
select avg(ifnull(salary,0)) from employees; //防止salary有null时avg不处理
3）求1997年入职的人数
select count(1) from employees where extract(year from hire_date)=1997;
最后一个人进公司的时间
select max(hire_date) from employees;
<span>group by 分组</span>
group by可以使用字段别名
有时求聚合函数时，需要用group by分组，但是要注意使用场景，group by根据指定字段筛选组成一组,group by的筛选字段尽量写成第一个字段
group by 存在的位置
select * from sheet where ... group by .. order by ... limit ...;
按部门来分组
select  department_id,count(*) from employees group by department_id;
按每个部门下的每个主管来的人数分组
 select  department_id,manager_id,count(*) from employees group by department_id , manager_id;
按照入职年份来分组
select  extract(year from hire_date),first_name,count(*) from employees group by extract(year from hire_date);
<span>having </span>
多行函数分组计算，对聚合函数结果进行过滤，不能用where而是用having替代
where    普通过滤条件,后面不能跟聚合函数
having   过滤聚合函数结果，而且后面也只能跟聚合函数
having前必须有group by
select  count() from  where ... group by... having .. order by ... limit ...;
只有一个人的部门
select  department_id,count(*) count from employees group by department_id having count=1;
其实感觉可以理解为having只是在对多行函数进行过滤，而where是在对表中字段进行过滤
<span>子查询</span>
1. 嵌套在SQL语句中查询语句称为子查询，或理解为用一个查询的结果，作为另一个查询的过滤条件，放在where，having后的()里
2. 子查询能嵌套n层
3.一般来说select id只查询一个字段作为查询的结构作为另一个查询的过滤条件
4. 子查询可写的位置：
- 可以写在 where/having的后面作为查询条件的值
- 可以写在 from后面 当一张新表 **新表必须有别名**
- 可以写在创建表的时候
		create table t_emp_10 as
		(select * from emp where deptno=10);

select id,name  from  sheet where sal=(select min(sal) from....)
单值子查询用 =  <>   >  <
多值子查询用  in()
> all(1,2,3)  大于最大的值，这里要大于3
> any(1,2,3)  大于最小值就行

案例
1)查询最低工资的员工信息
select employee_id ,first_name,salary  from  employees where  salary=(select min(salary) from employees);
2)查只有一个下属的主管信息
select employee_id ,first_name,salary  from  employees where   employee_id in (select manager_id  from employees where manager_id is not null group by manager_id having count(*)=1);
这个语句很复杂，重在理解()里的查询结果
3)平均工资最高的部门编号
1.分组求平均
2.得到最高平均工资
3.最高平均工资过滤查部门编号
select department_id,avg(salary) avg from employees where department_id is not null group by department_id order by avg desc limit 1;
最后的order by avg desc limit 1这个逻辑算是太棒了，以后求最高，最少可以借鉴这个逻辑
4)下属人数最多的人，查询其个人信息
1.得到下属最多的人的id
2.用id过滤查询他的个人信息
得到下属最多的人的manager_id
select manager_id   from employees where manager_id is not null group by  manager_id order by count(*) desc limit 1;
查询这个人的信息
select employee_id ,first_name,salary from employees
where employee_id=(select manager_id   from employees where manager_id is not null group by  manager_id order by count(*) desc limit 1);
5)拿最低工资的人的信息
select employee_id,first_name,salary from employees where salary=(select min(salary) from employees);
6)最后入职的员工信息
select employee_id,first_name,hire_date  from employees where hire_date=(select max(hire_date) from employees);
7)工资多于平均工资的员工信息
select employee_id,first_name,salary  from employees where salary>(select avg(salary) from employees);

<span> 行内视图</span>
从一个查询的查询结果后再查询
select...from (select...from) tb

<span>多表链接查询</span>
通过外键，将多张表连接成一张大表
select  a.xx,a.vv,b.xx,b.vv  from a,b where a.id=b.xid
select
    x.* ,    // x.*  表示xueshengs所有字段信息
    k.name kecheng
from
    xueshengs x , xs_kc_link i , kecheng k
where
    x.id=i.xs_id  and k.id=i.kc_id;   // and并且

1) 查询员工信息，部门名称 employees与departments 各是一张表
select e.employee_id,e.first_name,d.department_id  from employees e,departments d where e.department_id=d.department_id;
如果两张表的字段不一样，就不必用 字段别名.属性 显示，直接用字段表示就行
2) 涉及三张表的链接
员工信息，部门名称，所在城市是Seattle
select
    e.employee_id,e.first_name,
    d.department_name,
    l.city
from
    employees e, departments d , locations l
where
    e.department_id=d.department_id   //下面几行是关键不仅是表链接关系，还涉及过滤
    and
    d.location_id=l.location_id
    and
    l.city='Seattle';
3）按城市分组，计算每个城市的员工数量
select
    l.city,
    count(*) c
from
    employees e, departments d , locations l
where
    e.department_id=d.department_id
    and
    d.location_id=l.location_id    //这里的顺序是e连d,d连l 这样三者的表就链接起来了
group by
     l.city
order by c  ;

<span>自关联查询</span>
一张表，通过同在一张表中的字段进行过滤
外键与本表的主键链接
将一张表看做是两张表
自己跟自己对比链接
3）查询员工信息和他的主管姓名
select
   e1.employee_id,e1.first_name,e1.salary,e2.first_name mgr_name
from
   employees e1,
   employees e2
 where
   e1.manager_id=e2.employee_id ;   //表字段别名不能混淆，e1、e2顺序不能乱，e1在前
4）查询员工信息，员工主管名字，部门名
select
   e1.employee_id,e1.first_name,e1.salary,
   e2.first_name mgr_name,
   d.department_name
from
   employees e1,
   employees e2,
   departments d
where
   e1.manager_id=e2.employee_id
   and
   e1.manager_id=d.department_id;


<span>标准sql链接语法</span>
上面的笔记是非标准语法，但是多数数据库都支持
select .... from
          sheet01 inner join sheet02  on  sheet01.id =sheet02.id
                  inner join  sheet03 on sheet03.id=sheet01.id
                  inner join  sheet04 on sheet04.id=sheet02.id
                  where sheet01.salary>1000;
inner可以省略 join链接表，on后配置关联关系，用where作为过滤条件，表名后也可以用别名
这样的结构可以实现多表联查
<span>左外链接，右外链接</span>
 以左/右边表为主表，左/右边表显示所有数据，右/左边表根据关联关系按条件显示
left outer， right outer  outer可以省略
sheet01 left join sheet02 on....
将左表sheet01中连接外条件之外的数据也查出来，不满足条件的也查出来
sheet01 right join sheet02 on....
or  sheet02 left join sheet01 on....
将右表sheet02中连接外条件之外的数据也查出来，不满足条件的也查出来

1) 员工和他所在部门名，没有部门显示null
select
   e.employee_id,e.first_name,d.department_name
from
   employees e left join departments d
on
   e.department_id=d.department_id;

</pre>
          <h3>事物</h3>
          <pre>
<span>事物简介</span>
事物是数据操作的最小单元
四个特性 ACID
A  原子性 Atomic       原子性，最小不可拆分 全部成功或全部失败
C  一致性 Consistency  操作前后逻辑、数据改变的一致性
I  隔离性 Isolation    一个事物进行时，另一个个事物不能操作数据
D  持久性 Durancy      提交事物后，数据持久生效
<span>事物操作</span>
1）开始事物
  start transaction;
  set autocommit=0/1; //自动提交关闭/开启，为0时，则开始事物
2）提交事物
   commit;
   开启事物没有commit之前的操作都存在客户端内存中，commit之后才将操作提交到服务器端
3）回滚事物,恢复到之前的状态
   rollback;
   回顾的是内存当中之前的操作，可以自定义回滚点，防止一级一级的回滚过于麻烦
4）mysql默认不开启事物的，需要手动启动事物
  * 每一步数据修改都直接生效，不需要提交事物，回滚不生效
  * 查看事物是否开启
    show variables like 'autocommit';
    autocommit    | ON  自动提交打开状态
    set autocommit=0/1; //自动提交关闭/开启
    如果自动提交开启，没有事物，自动提交关闭吧，没有实物
5） innodb 提供行级锁
    一个事务修改一行数据未提交时，该行级数据会被锁定，不允许其他事务修改，因为你没commit保存提交
5）测试事物操作
   a) 开启事物
   start transaction;
   b) 插入数据
   insert into  regions (region_name) values ('aaa');
   insert into  regions (region_name) values ('bbb');
   insert into  regions (region_name) values ('bbb');
   这时候这些插入的数据是没有被保存的，如果你重开一个终端查看可以看出是没有这些插入数据的
   c) 保存提交
   commit;
   这时插入数据就被保存了
   d) 如果commit前rollback，插入的数据就没有啦
      commit后再rollback，就没什么作用了，数据已经提交没法回滚了
 上面只是测试了insert插入数据，如果更改，删除，替换数据也是一样的操作

<span>事物的隔离</span>
  多个事务同事操作，如何隔离，隔离的结果是性能降低
<span> 事务隔离级别</span>
  1）脏读
     一个事务修改一半的数据，被其他事务读取
  2）不允许脏读
    只能读取其他事务已提交的数据
  3）可重复读（mysql默认）
    事务过程中，前后读取的数据一致，即使过程中已被其他事务修改，也读取旧的数据
  4）串行化
     所有事务排队依次执行，不能同时执行
   *）幻觉读，类似第二种不许读脏数据
    事务过程中前后读取数据不一致
<span>查看事务隔离级别</span>
   show variables like 'tx%';  //mysql 默认是可重复读
<span>测试并设置事务隔离级别</span>
   1）脏读
     set tx_isolation='READ-UNCOMMITTED'; 读未提交数据
     测试
    两个客户端都设置
    set tx_isolation='READ-UNCOMMITTED';
    第一个客户端
        start transaction;
        insert into regions(region_name) values('ee');
        update regions set region_name='月球'  where region_id=5;
    第二个客户端
        select * from regions;  //此时可以查询到插入和修改的数据
    第一个客户端
            rollback;

   2) 不允许脏读,读取提交数据，幻读
    set tx_isolation='read-committed';  只能读其他事务已提交的数据
    虚读 upadte
    幻读 insert ，delete
     测试
    两个客户端都设置
    set tx_isolation='read-committed';
    第一个客户端
    rollback;   //防止之前操作有脏数据
    start transaction;
    insert into regions(region_name) values('999');
    update regions set region_name='月球'  where region_id=5;
    第二个客户端
    rollback;   //防止之前操作有脏数据
    start transaction;
    select * from regions;  //此时查不到到插入和修改的数据
    第一个客户端
    commit; 提交数据
    第二个客户端
    select * from regions;
    //此时可以查询到插入和修改的数据，因为第一个客户端commit提交了

   3) 可重复读（mysql默认）
   set tx_isolation='repeatable-read';  其他事务commit提交后，本事务也读不到
   测试
    两个客户端都设置
    set tx_isolation='repeatable-read';
    第一个客户端
      rollback;   //防止之前操作有脏数据
      start transaction; //启动事物
      insert into regions(region_name) values('金星');
      update regions set region_name='月球'  where region_id=5;
   第二个客户端
      rollback;   //防止之前操作有脏数据
      start transaction;
      select * from regions; //看不到，客户端一没有提交
   第一个客户端
      commit; 提交数据
   第二个客户端
     select * from regions;
    //看不到，客户端一提交了也看不到，客户端维持原表第一次查的结构
    4）串行化
    set tx_isolation='serializable';
<span>归纳总结</span>
脏读，         start transaction;后 其他事务没有commit，本事务就能读取
不允许脏读     start transaction;后 其他事务commit之后，本事务才能读取
可重复读       start transaction;后 其他事务commit之后，本事务也读不到，还是之前查询的表结果
          </pre>
          <h3>视图 view</h3>
          <pre>
<span>什么是视图</span>
 with check option 防止数据污染
视图是将一个查询的结果当做一张表，可以从这个虚拟的表中查询，视图本质就是取代了一段sql查询语句。
视图不是表，从视图查询本质是从查询结果再查询（两层查询）
视图是不保存数据的
<span>视图的创建查看</span>
1）视图的创建
drop view if exists v1;
create [or replace] view v1  as select ...字段  from  sheet01 where...
//replace可省略，要不就替换已存在表,view不是视图名，v1才是是视图名，不是别名
我感觉重要的就是 create [or replace] view v1  as  这段代码表名在生成一个视图，select 表示要显示的字段，from是从那张表上取数据，where是去数据的条件
2）查看视图
desc v1;
show tables ;
show create view v1;
<span>为什么使用视图</span>
1)可以简化查询，避免了每一次查询重新输入 select  ... from a join b ... join c...join d  where ...;语句再次查询
2) 安全,创建视图给用户访问，隐藏真实数据表
3）一般只对视图进行查询，不对视图进行增删改操作
<span>视图的分类</span>
1) 简单视图： 创建视图的子查询中不包含：去重，函数，分组，关联查询的视图称为简单视图，可以对数据进行增删改查操作
2) 复杂视图： 创建视图的子查询中包含：去重，函数，分组，关联查询的视图称为复杂视图，只能进行查的操作
<span>简单视图的增删改操作</span>
1) 插入数据 如果插入的数据在视图中不显示但是原表中显示，称为数据污染;
   可以通过with check option 关键字禁止出现数据污染
   create view v_emp_30 as (select * from emp where deptno=30) with check option;
2) 修改数据 只能修改视图中存在的数据
   update v_emp_30 set ename='zhangsan' where empno=10011;(成功)
	 update v_emp_30 set ename='汤姆' where empno=10010;（失败）
3) 删除数据 只能删除视图中存在的数据
<span>修改视图</span>
 create or replace view 视图名 as 子查询;
 create or replace view v_emp_10 as(select * from emp);
<span>删除视图</span>
 drop view v_emp_10;
 drop view if exists v_emp_10; 没有也不会报错
<span>视图别名</span>
创建视图的时候子查询对字段起了别名，则后期对视图进行操作只能使用别名。
  create view v_emp_10 as (select empno,ename name from emp);
测试：
  update v_emp_10 set name='汤姆' where empno=10010;(成功)
  update v_emp_10 set ename='汤姆aaa' where empno=10010;（失败）
<span>视图总结：</span>
1. 视图是数据库中的对象，代表一段sql，可以理解成虚拟表
2. 作用： 重用sql ， 隐藏敏感字段
3. 分类： 简单 和 复杂  简单（不包含去重 函数 分组 关联查询） 复杂反之只能查看
4. 插入数据时可能数据污染 通过with check option解决
5. 修改和删除只能操作视图中存在的数据
6. 起了别名 只能用别名
<span>视图测试</span>
测试一
drop view if exists v1
create or replace view v1 as
   select  employee_id,first_name,salary,department_id
from employees
where (department_id,salary) in (
        select department_id,
        max(salary) from employees where department_id is not null
        group by department_id
        );
测试二
create or replace view job_and_job_history  as
select
    j.job_title title,
    j.min_salary min,
    j.max_salary max,
    h.start_date start,
    h.end_date end
from
    jobs j ,job_history h
where
    j.job_id= h.job_id;
          </pre>
          <h3>MySql中的索引</h3>
          <pre>
MySql中查询主键字段是很快的，但是查询其他字段就不一定了
- 什么是索引： 索引是数据库中用来提高查询效率的技术，类似于目录
- 为什么使用索引： 如果不使用索引数据会零散的保存在磁盘块中，
查询数据需要挨个的遍历每一个磁盘块，
直到找到数据为止，使用用索引后会在磁盘中以树状结构对数据进行保存，
查询数据时会大大降低磁盘块的访问量，从而提高查询效率。

例如：
 where name='abc'
   name数据创建索引
 where name='abc' and birth='1993-5-3'
   name和birth两个字段创建索引
   对where name='abc' 单字段过滤有效
   但是对where birth='1993-5-3' 单字段过滤无效
<span>创建索引</span>
create index index_name on sheet(name)  index_name索引名字 sheet表示表，name表示字段
<span>查看索引</span>
show index from item2;
<span>删除索引</span>
drop index index_item2_title on item2;
<span>索引总结</span>
1. 索引是用来提高查询效率的技术，类似目录的作用
2. 因为会占空间不是越多越好
3. 数据量小时 会降低查询效率
4. 聚集索引自动通过主键创建 保存数据 只有一个 和非聚集索引 有多个 没有数据只有磁盘块地址
5. 尽量不要在频繁修改的表上创建索引
<span>索引的使用</span>
如果 where name like  '%abc'  有%号就不会使用索引
测试
create index td_c_index  on td(c);          --创建索引
explain select * from td where c like '值w%'
explain select * from td where c like '%计划'
explain 看到一个查询，可能使用的键，可能使用的索引，扫描的行数，扫描行数越少，查询越快
alter table td drop index td_c_index;   --删除索引
          </pre>
          <h3>MySql中数据备份和恢复</h3>
          <pre>
<span>在mysql中执行导出/入库表及数据</span>
1）导出表
mysqldump -uroot -proot --default-character-set=utf8  库名>导出的位置/声明表名.sql 结尾不加分号
例如:
mysqldump -uroot -proot --default-character-set=utf8 demo01>C:\TDDOWNLOAD\dem0.sql
2）将备份数据重新导入数据库
 mysql -uroot -proot --default-character-set=utf8  库名< 文件路径
尽量新建一个库，或者将原库清除载导入
例如:
mysql -uroot -proot --default-character-set=utf8 demo04< C:\TDDOWNLOAD\jtds.sql
<span>在cmd终端中执行脚本</span>
脚本后缀是.sql
Source F:\BackUp\Src\sql\test.sql (fail!)
改成：
Source F:/BackUp/Src/sql/test.sql (OK!)
Source F:\\BackUp\\Src\\sql\\test.sql (OK!)
Source 空格 地址 没有;号</pre>
          <h3>mysql的存储</h3>
          <pre>
<span> 自定义设置结束符</span>
  delimiter 空格 /  设置语句的结束符号,这时结束语句就不是;号了，是/了
  delimiter ;  重新设置成分号
  重新进入mysql就要重新delimiter在设置一次结束符，mysql不会自动记忆delimiter
<span> 会话变量</span>
1) 一次会话过程中，可以设置一些变量保存数据
   set @name='张三'
   @表示回话变量  一般设置在一个库中
   @@表示全局变量，指定是系统变量
2) 显示变量的值
   select @name,@a,@b,@c;
<span>选择判断</span>
1)if 条件 then ...      //等同于if
 end if;
2)if  条件 then ...    //等同于if else
 elseif 条件 then ...
 else  ...
 end if;
3)case 变量名
    when 条件 then  ... ;   //条件只能是等于;
    when 条件 then  ... ;
    when 条件 then  ... ;
    else ...;
end case;
4）测试
  delimiter //
  create procedure p3 if exists;
  create procedure p3 (in a int)
  begin
       if a=1 then
          select 10;
       end if;
       case
          when a=2 then select 20;
          when a=3 then select 30;
          when a=4 then select 40;
          else select 100;
        end case;
  end; //
   call p3(1); //  100 执行  else select 100;
   call p3(2); //  20 执行   when a=2 then select 20;
   call p3(3); //  30 执行   when a=3 then select 30;
<span>循环</span>
1) while 条件 do ...
    end while;
2) loop
    ...
    leave loop名     //死循环，必须起名，符合条件leave跳出
   end loop;
3）repeat
     ......
     until 条件     //符合条件until跳出
   end repeat
4） 关键字
   leave / until 跳出循环
   iterate  直接进入下次循环
5）循环命名
  lp: loop        //lp是循环名
      leave lp;
      iterate lp;
  end loop;
6）循环测试
  循环插入1,2,3,4,5  重点！！！！！！
  delimiter //
  create procedure p4 if exists;
  create procedure p4 (in a int)
  begin
      -- 定义变量 1.局部变量 2.会话变量
      declare i int default 1;  -- 局部变量i
      while i<=a  do
           insert into sheet values(i);
           set i=i+1;
      end while;
      --
      set i=1;
        lp: loop
           insert into  sheet values(i);
           set i=i+1;
           if i>a then
               leave lp;
           end if;
      end loop;
      --
      set i=1;
      repeat
         insert into  sheet values(i);
         set i=i+1;
      until  i>a
      end repeat;
  end; //
  call p4(1);//
  select * from sheet;//
<span> declare 定义局部变量</span>
declare i int;  不赋默认值，默认是null
declare i int default 1; 局部变量i，默认值1
set i=5;   修改局部变量
局部变量在end结束时被销毁

<span>存储过程</span>
 * 数据库中存储的程序，对数据进行运算处理
* 存储过程是属于某一个库的，要use 库名 之后在创建
1）创建存储过程
    create procedure p1 ()       //p1名称 ()参数列表
    begin                        //代码块
         select * from sheet01   //增删改查等操作，这个位置不要有分号,除非delimiter重设置
    end;
2）调用存储过程
     call p1();
3）删除存储过程
     drop procedure if exists p1;      if exists可以省略
4）参数
  存储过程的参数有三种；
  in     输入参数 默认;
  out    输出参数
  inout  即可输入也可输出
  定义存储过程： p2(in a int,out b int)  a是输入变量，b是输出变量
                 set b=a*2;
  调用p2();
  call p2(255,@v1)  255传给a,输出b=255*@将值赋给@v1
  select @v1;
4）查看存储过程
     show procedure status;              //查看所有的存贮过程
     show create procedure demo01;       //查看demo01的存储过程
5）测试
   测试存储，调用存储
   delimiter //
   create procedure p1()
   begin
        insert into sheet values (floor(rand()*10)) ;      //floor(rand()*10)生成随机数
         select * from sheet;
   end//
   call p1();//
   测试输入参数和输出参数
   delimiter //
   create procedure p2(in a int,out b int)
   begin
      set b=a*2;  --设置输出变量b的值
   end; //
   call p2(1,@a);   ---a变量在p2()存储 set b=1*2;过程中被赋于b值
   call p2(2,@b);
   call p2(3,@c);
   select @a,@b,@c;//
          <span>mysql的存储函数</span>
函数与储存过程类似，只是有了返回值，用select f()  调用函数
存储过程是对数据表的系列操作，函数仅仅是返回某个值，存储过程可以调函数，但是函数不能调存储过程
1）创建函数
   create function  f(参数)  returns  int   // f函数名  returns  int 返回类型
   begin
       ....
      return 返回结果
   end;
2) 删除函数
   drop function f;
 3) 调用函数
    调用时不需要加call  直接select 函数名 就行
3）测试
   求a的b次方
    delimiter //
    drop function if exists fun_pow; //
    create function fun_pow(a bigint,b bigint) returns bigint   -- 因为求方数据过大用bigint
    begin
         declare r bigint;
         declare i int default 1;
         set r = a ;
          while i< b  do
              set r=r*a;
              set i=i+1;
          end while;
         return r;
    end;  //
     select  c,fun_pow(c,2)  from sheet;//    从表里拿字段展示
     select fun_pow(2,2);//
<span>测试产生随机字符串</span>
1）具体长度，产生随机字符串长度范围[a,b)的逻辑如下
例如  [3,8)
3+[0,5)
3+floor(rand()*5)
[a,b)
a+floor(rand()*(b-a))
2）需要一个空串 s='';
3) 循环len次
4）产生随机数 i
1+[0,char_length(s0)-1]
i=1+floor(rand()*(char_length(s0)-1))
5）截取s0的i位置的一个字符，
  substring(s0,i,1)
6) 这个字符连到s上
    s=concat(s,substring(s0,i,1));
  delimiter //
  drop function if exists rand_str; //
  create function rand_str(a int,b int) returns varchar(255)
  begin
      declare s0 varchar(600) default 'qwertyuiopasdfghjklzxcvbnm';
      declare len int;
      declare s varchar(255) default '';
      declare i int default 0;
      declare j int;
      set len=a+floor(rand()*(b-a));
       while i<= len do
          set j=1+floor(rand()*(char_length(s0)-1));
          set s=concat(s,substring(s0,j,1));
          set i=i+1;
       end while;
       return s;
  end;//
  select  rand_str(3,5);//
<span>在表中插入大量随机数</span>
1）创建一个内存表
            engine=innodb
                  myism
                  memory
2) 循环箱内存表插入10万数据
3) 将内存的10万数据直接插入磁盘表
4) 测试
创建内存表
  drop table  if exists tm;
  create table tm(
    c varchar(255)
  )engine=memory;//
创建磁盘表
  drop table  if exists td;
  create table td(
     id int key primary key auto_increment,
     c varchar(255)
  )engine=innodb;//
存贮过程
  drop procedure  if exists rand_data;//
  create  procedure  rand_data(n int)
    begin
        declare i int default 0;
        while i< n do
              insert into tm values(rand_str(3,6));
              set i=i+1;
        end while;
              insert into td(c) select  * from tm;
              delete from tm;
    end;//
    call rand_data(2000);//
    ---循环n次向tm内存插入随机字符串,内存表insert into td(c) select  * from tm;全部插入到td磁盘表，最后delete from tm清空tm内存表
          </pre>
          <h3>游标</h3>
          <pre>
游标：查询结果的数据指针，只能一步一步向下一行移动，不能任意的被定位，游标一般跟循环一起使用，写在储存过程中
<span>游标操作</span>
声明游标
    declare c cursor for select  字段  form  表名;  // c 游标名 cursor 类型  指向查询 for select
打开游标
    open c;
从游标取一行数据（自动下移）
    fetch c into v1,v2,v3,v4;
    从游标中取出几个字段，并存入几个变量
关闭游标
    close c
<span>游标测试 </span>
从头到尾用游标访问数据
    注意 mysql的错误处理机制
    declare continue handler for...
    declare continue handler for not found set done=1;
    当出现指定错误（not found）时，执行一段代码（done=1），使得程序可以继续正常执行（continue）
正式代码书写
    delimiter //
    drop procedure if exists p5;//
    create procedure p5()
    begin
        declare a int;              --保存每行的值
        declare sum int default 0;  --累加变量
        declare done int default 0;   --结束标志
        declare c cursor for select *   from  sheet;   --命名游标，指向查询表
        declare continue handler for not found set done=1;
         --在末尾取不到数据，会出现not found错误，触发done=1执行
        open c;
        while done=0 do
             fetch c into a; --抓取下一行数据存到变量a，因为我此时c中只有一个字段,只存到a中即可
             set sum=sum+a;
        end while;
         close c;
         select sum;
     end;//
     call p5();//

          </pre>
          <h3>触发器</h3>
          <pre>
对一行数据进行增删改操作，可以触发一段代码执行
触发器有6种,一张表最多创建6个触发器
before  insert /update/delete
after   insert /update/delete

1）创建触发器
   create trigger 名称  before insert on sheet for each row   //on sheet在那张表中触发  for each row每一行都触发
   begin
     .....
   end;
2) 两个隐含对象
new - 新的数据行
old - 旧的数据行
插入操作时
  new - 新插入的一行数据 new.id new.name new.price
  old - 没有
修改操作
 new - 修改后的新数据
  old - 修改前的旧数据
删除操作
   new - 没有
   old - 被删除的数据
3）测试
修改数据时，不必手动修改updated字段
   delimiter //
   use jtds;//
   create trigger cat_updated_trigger
   before update on tb_item_cat
   for each row
   begin
       set new.updated=now();
   end;//
   update tb_item_cat set name=concat('>>>',name) where id=2;//
   select * from  tb_item_cat    where id=2;//
阻止删除商品表数据
   当执行before delete时，手动产生一个错误，使删除操作失败
     delimiter //
     use jtds;//
     create trigger  del_trigger
     before delete on tb_item
     for each row
     begin
         delete from DeleteNotAllowed;     --手动产生错误
     end;//
     delete from tb_item where id=10000028;//

          </pre>


          <h3></h3>
          <pre>
select 'helloworld'; mysql测试函数，测试文字

select * from
set names gbk 指定网络传输时使用的字符集，创建数据库


          </pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mysql',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    mounted(){
      this.$nextTick(function(){

      })
    },
    computed:{

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
