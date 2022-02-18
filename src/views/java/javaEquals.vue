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
equals方法是java.lang.Object类的方法
有两种用法说明:
一、对于字符串变量来说，使用“==”和“equals()”方法比较字符串时，其比较方法不同。
 1、“==”比较两个变量本身的值，即两个对象在内存中的首地址。
(java中，对象的首地址是它在内存中存放的起始地址，它后面的地址是用来存放它所包含的各个属性的地址，所以内存中会用多个内存块来存放对象的各个参数，而通过这个首地址就可以找到该对象，进而可以找到该对象的各个属性)
 2、“equals()”比较字符串中所包含的内容是否相同。

案例：
String s1,s2,s3 = "abc", s4 ="abc" ;
s1 = new String("abc");
s2 = new String("abc");
System.out.println(s1==s2);         // false
System.out.println(s1==s3);         // false
System.out.println(s3==s4);         // true
System.out.println(s1.equals(s2));  // true
System.out.println(s1.equals(s3));  // true
System.out.println(s3.equals(s4));  // true
解释：
对于s3和s4来说，有一点不一样要引起注意，由于s3和s4是两个字符串常量所生成的变量，其中所存放的内存地址是相等的，所以s3==s4是true（即使没有s3=s4这样一个赋值语句）
对于非字符串变量来说，"=="和"equals"方法的作用是相同的都是用来比较其，对象在堆内存的首地址，即用来比较两个引用变量是否指向同一个对象

案例：
StringBuffer s1 = new StringBuffer("a");
StringBuffer s2 = new StringBuffer("a");
System.out.println(s1.equals(s2));    // false
解释：StringBuffer类中没有重新定义equals这个方法，因此这个方法就来自Object类，(Object类中的equals方法是用来比较“地址”的，所以等于false)

案例：
class A{
    A obj1   =   new  A();
    A obj2   =   new  A();
}
obj1==obj2　　//结果为false
obj1.equals(obj2)//是false
// 但是如加上这样一句：
obj1=obj2;　　
// 执行后
obj1==obj2  //是true
obj1.equals(obj2) //是true

解释
1、equals方法对于字符串来说是比较内容的，而对于非字符串来说是比较，其指向的对象是否相同的。
2、 == 比较符也是比较指向的对象是否相同的也就是对象在对内存中的的首地址。String类中重新定义了equals这个方法，而且比较的是值，而不是地址。所以是true。

二、关于equals与==的区别从以下几个方面来说
1、如果是基本类型比较，那么只能用==来比较，不能用equals
int a = 3;
int b = 4;
int c = 3;
System.out.println(a == b);//结果是false
System.out.println(a == c);//结果是true
System.out.println(a.equals(c));//错误，编译不能通过，equals方法
//不能运用与基本类型的比较

2、对于基本类型的包装类型，比如Boolean、Character、Byte、Shot、Integer、Long、Float、Double等的引用变量，==是比较地址的，而equals是比较内容的
Integer n1 = new Integer(30);
Integer n2 = new Integer(30);
Integer n3 = new Integer(31);
System.out.println(n1 == n2);       // 结果是false 两个不同的Integer对象，故其地址不同，
System.out.println(n1 == n3);       // 那么不管是new Integer(30)还是new Integer(31) 结果都显示false
System.out.println(n1.equals(n2));  // 结果是true 根据jdk文档中的说明，n1与n2指向的对象中的内容是相等的，都是30，故equals比较后结果是true
System.out.println(n1.equals(n3));  // 结果是false 因对象内容不一样，一个是30一个是31

3、重写类中的equals
class Value{
    int i;
}
public class EqualsMethod {
    public static void main(String[] args) {
      Value v1 = new Value();
      Value v2 = new Value();
      v1.i = v2.i = 100;
      System.out.println(v1.equals(v2));//（1）flase
      System.out.println(v1 == v2);//（2）true
    }
}
如果在新类中被覆盖了equals方法，就可以用来比较内容的。但是在上面的例子中类Value并没有覆盖Object中的equals方法，而是继承了该方法，因此它就是被用来比较地址的，又v1和v2的所指向的对象不相同，故标记（1）处的v1.equals(v2)运行结果为false，标记为（2）处的v1 == v2运行结果也为false

总结：
如果是基本类型比较，那么只能用==来比较，不能用equals ，如果是基本类型的包装类型,那么用equals</pre>
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
