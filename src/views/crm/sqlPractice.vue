<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <ul class="catalogue">
            <li v-for="(items,index) in catalogue"><a @click="jump(index)">{{items.name}}</a></li>
          </ul>
          <h3>题目：在一张表里查找最晚入职员工的所有信息：</h3>
          <pre>
一张表 入职时间字段是 hire_date  员工表是employees
关键字是 max()、order by 、limit
思考假定：所有的数据里员工入职的日期都不是同一天
方法1：子查询(最佳)
select * from employees where hire_date = (select max(hire_date) from employees);
或
select * from employees where hire_date in (select max(hire_date) from employees);
补充：
date类型的数据越大，表示时间越接近现在，即越晚
Where语句使用=和in都可以得出结果，因为子查询语句返回一个元组用=或in都可
方法2：使用limit或者offset关键字
select * from employees order by hire_date desc limit 1;
或
select * from employees order by hire_date desc limit 0,1;
或
select * from employees order by hire_date desc limit 1 offset 0;
补充：
limit n：表示从第0条数据开始，读取n条数据，是limt(0, n)的缩写
limit m,n：表示从第m条数据开始，读取n条数据
limit n offset m：表示从第m条数据开始，读取n条数据
总结：
方法1适用于存在多个员工入职同时达到最晚一天的情况。泛用性更好。</pre>
          <h3>一张表查找入职员工时间排名倒数第三的员工所有信息</h3>
          <pre>
一张表 入职时间字段是 hire_date  员工表是employees
关键字是 distinct、order by 、limit
假定：所有的数据里员工入职的日期都不是同一天

方法1：子查询(最佳)
select * from employees where hire_date = (select distinct hire_date from employees order by hire_date desc limit 1 offset 2);
或：
select * from employees where hire_date = (select hire_date from employees group by hire_date order by hire_date desc limit 1 offset 2);
补充：
若存在多人(如3人)同时在最晚的一天入职的情形，必须要考虑去重(使用distinct或者group by)
distinct和group by的执行顺序都在limit前面

方法2：使用limit或者offset关键字
select * from employees order by hire_date desc limit 2,1;
或
select * from employees order by hire_date desc limit 1 offset 2;
总结：
方法1适用于存在多个员工入职同时达到最晚一天的情况。泛用性更好。</pre>
          <h3>一张表查找薪水记录超过15次的员工号emp_no以及其对应的记录次数t	</h3>
          <pre>
一张薪水涨幅表  员工号为emp_no  员工薪水字段是 salary  薪水表名是salaries
关键字是 count()、group by 、having
select emp_no, count(emp_no) t from salaries  group by emp_no having t > 15</pre>
          <h3>一张表找出所有员工当前薪水情况，对于相同薪水只显示一次，并按照降序显示</h3>
          <pre>
一张薪水表  salaries为薪水字段   salaries为表名
关键字 distinct 去重 或group by 分组
第一种 select DISTINCT(salary) from salaries order by salary desc
第二种 select salary from salaries group by salary order by salary desc</pre>
          <h3>两张表获取所有非manager的员工的emp_no	</h3>
          <pre>
一个所有员工信息表 employees  主要信息 emp_no 员工号
一个部门领导表和所属员工对应关系表 dept_manager 主要信息  emp_no 员工号  dept_no员工所属领导编号
关键字 NOT IN、LEFT JOIN、IS NULL
方法1：NOT IN+子查询
select e.emp_no from employees e where e.emp_no  not in (SELECT DISTINCT(emp_no)  from dept_manager)
方法2：LEFT JOIN左连接+IS NULL
select e.emp_no from employees e left join dept_manager d on d.emp_no = e.emp_no where d.dept_no is null</pre>
          <h3>两张表获取每个部门中当前员工薪水最高的相关信息</h3>
          <pre>
一个员工表dept_emp   emp_no 员工号  dept_no 部门编号
一个薪水表salaries   emp_no 员工号  salaries为薪水字段
关键字 max()、group by、join
方法：select d.dept_no,  s.emp_no ,max(s.salary) salary
from  dept_emp d join salaries s
on d.emp_no=s.emp_no
group by d.dept_no
order by d.dept_no ASC</pre>
          <h3>一张employees员工表查出所有emp_no为奇数，且last_name不为Mary的员工信息，并按照hire_date逆序排列</h3>
          <pre>
一张员工表 employees    last_name 名字  hire_date入职时间
关键字  找奇数、%求余数
方法：select * from employees where  emp_no % 2 = 1 and last_name != 'Mary' order by hire_date desc
补充：不相等有三种表示方式：<>、!=、IS NOT
求余数： emp_no&1   emp_no%2 = 1
注意：last_name是varchar类型，所以对它的判断需要加上单引号</pre>

<!--          <h3></h3>-->
<!--          <pre></pre>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name,
        catalogue:[]
      }
    },
    mounted(){
      this.$nextTick(function(){
        this.createCatalogue();
      })
    },
    computed:{

    },
    methods: {
      jump (index) {
//        let jump = document.getElementsByTagName('h3');
//       // 获取需要滚动的距离
//        let total = jump[index].offsetTop;
//        // Chrome
//        document.body.scrollTop = total;
//        // Firefox
//        document.documentElement.scrollTop = total;
//       // Safari
//        window.pageYOffset = total
//        https://www.cnblogs.com/wisewrong/p/6495726.html  参考网站
        let jump = document.getElementsByTagName('h3');
        let total = jump[index].offsetTop;  // 获取目标位置滚动的距离
        let distance = document.documentElement.scrollTop || document.body.scrollTop; //获取当前滚动轴的位置
        // 平滑滚动，时长500ms，每10ms一跳，共50跳
        let step = total / 50;
        if (total > distance) {
          smoothDown()
        } else {
          let newTotal = distance - total;  //防止total，let step=total/50太小，移动缓慢
          step = newTotal / 50;
          smoothUp()
        }

        function smoothDown () {
          if (total>distance ) {
            distance += step;
            document.body.scrollTop = distance;
            document.documentElement.scrollTop = distance;
            setTimeout(smoothDown, 10)
          } else {
            document.body.scrollTop = total;
            document.documentElement.scrollTop = total
          }
        }
        function smoothUp () {
          if ( total<distance) {
            distance -= step;
            document.body.scrollTop = distance;
            document.documentElement.scrollTop = distance;
            setTimeout(smoothUp, 10)
          } else {
            document.body.scrollTop = total;
            document.documentElement.scrollTop = total
          }
        }
      },
      //创建目录函数
      createCatalogue(){
        let object = document.getElementsByTagName('h3');
        var flag=[];
        for(var i=0;i<object.length;i++){
          object[i].innerHTML=((i+1)+". "+object[i].innerHTML);
          flag.push({name:object[i].innerHTML})
        }
        this.catalogue=flag;
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
