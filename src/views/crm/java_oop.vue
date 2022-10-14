<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <ul class="catalogue clearfix">
            <li v-for="(items,index) in catalogue"><a @click="jump(index)">{{items.name}}</a></li>
          </ul>
          <h3>面向对象</h3>
          <pre>
面向对象：OOP -- object oriented progamming
<span>① 什么是面向对象/过程</span>
面向过程：一体式工作，牵一发而动全身，一处错程序停止，效率高一些         以方法为单位
面向对象：分模块工作，相对独立，哪里出错找哪里，占用内存大，效率低一些   以对象为单位
 3 .java中数据类型
    java中数据类型分两大种，一种是8中基本类型，一种是引用类型
    如果一个变量的类型是基本类型，那么这个变量中保存的值是具体的内容值
    如果一个变量的类型是引用类型，那么这个变量中保存的值是它指向对象的地址值
    内存地址这个概念只有对象才存在
    创建一个数组，数组就是对象

<span>② 什么是类</span>
1） 理解成一个模板，将相关的数据，方法代码，封装成一个类组件
类不能跟对象画等号，类可以产生对象
类是Java的最小组成单位，类名首字母大写
2） 类中的成员 : 成员变量 、成员默认初始化
对象创建后，其成员变量可以按照默认的方式初始化
初始化对象成员变量时，其默认值的规则如下
成员变量类型                默认初始值
数值类型(byte/short/int/       0或0.0
long/char/float/double)
boolean                         false
引用类型                        null
方法
对行为功能的封装

2.什么是对象
经由模板（类）创建出来的实例
存于内存中，是占用内存的
4）.对象的创建
创建对象的过程称为实例化,，创建出来的对象叫实例（对象）
new运算的语法
     new 类名();
     eg： new student(); 创建了一个学生对象
     Scanner sc=new Scanner(System.in);
     通过指向这个对象的声明变量，来访问这个对象中的内容，=可理解为赋值，指向，引用
     如果是有参构造器创建，new对象时还需要在()里添加参数
4）对象的使用：
    引用变量
    为了能够对实例化的对象进行访问控制，需要使用一个特殊的变量---引用
    声明一个引用变量来引用对象，通过这个变量来访问对象的内容（方法，数据）
    通过引用访问对象的成员变量，方法 eg：
    package ...
    public class Student{
       String name;
       int age ;
       String gender;
       String schoolId;
       public void introduce(){
         System.out.println("my name is :"+name+"sex :"+gender);
       }
    }
    package ...
    public class StudentTest{
       public static void main(String[] args) {
          //根据student模板创建学生信息
          Student student01= new student();
          student01.name="李明";
          student01.age=12;
          student01.gender="女";
          student01.schoolId="001";
          student01.introduce();
       }
    }


 <span>构造方法</span>
 构造方法：特殊的方法，是类的成员
 构造方法也叫构造器---作用是：创建并返回当前类的对象
 类会默认生成无参构造方法，如果人为书写了有参构造方法，则不再默认生成无参构造方法
 构造方法可以重载
  在创建对象时自动调用构造方法
1）语法：
  [修饰符] 类名(){
               // 构造方法体
   }
  没有返回值类型，方法名与类名一致 ，修饰符跟类名前的修饰符一致

案例说明
package day03;
public class cashier {
	public static void main(String[] args) {
	  System.out.println("测试构造方法");
	}
	public cashier() {  //构造方法
		super();
		// TODO Auto-generated constructor stub
	}
}
2） 构造方法的作用：创建当前类的对象，或理解为返回当前类的对象
    创建对象的实质是调用对象的构造方法!!!
3） 构造方法分无参和有参
    写好一个类之后，如果没有人为生成构造器，那么java为这个类默认提供一个无参构造器（不显示）前提是类中没有其他构造方法，
    如果人为生成了有参构造器，而没有把无参构造器调用出来，那么此时这个类中只有有参构造器
    有参构造方法需要自己设置，经常用于创造对象的同时初始化成员变量
4) 一个Java类中，只有一个无参构造方法，但是有参构造方法可以有多个，注意构造方法的参数是不同的，类似于重载
测试构造器
    package ...
    public class Student{
       String name;
       int age ;
       String gender;
       public void introduce(){
         System.out.println("my name is :"+name+"sex :"+gender);
       }
       //无参构造器
       public Student(){

       }
     //有参构造器
     public Student(String name, int age, String gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
      }
    }
    package ...
    public class StudentTest{
       public static void main(String[] args) {
          //根据student模板创建学生信息
          Student student01= new student("李明",12,"女");
          student01.introduce()
       }
    }
<span>方法的重载  overload</span>
1）方法签名：方法名 + 参数列表
   在一个类中，方法签名都是唯一存在的，它可以作为一个方法的唯一标识
2） 重载方法：在一个类中，如果存在多个方法，他们的方法名相同，参数列表不同，那么这些方法就是重载方法，和其他返回类型，修饰符没有任何关系
   重载方法满足：
    1.方法名相同
    2.参数列表必须不同 （-参数个数不同，-参数类型不同）
2）重载的意义
   同一类型的方法，根据不同的参数列表，对不同的对象，具有不同的表现形式

 <span>this关键字</span>
1）this指调用当前方法的那个对象
2）this指向的是对象不是类，但是this指向的对象都是这个类中创建的
3）一般情况下this都能省略，只有有参构造器中的this不能省略
例如
public void study(){
   System.out.println(this.name); //name是成员变量
        };
为了方便，在没有歧义的情况下可以省略this
 <span>引用类型数组</span>
引用类型数组：数组里面放的每一元素都是一个对象
引用类型数组初始值是null，
引用类型数组赋值都是通过new一个对象赋值
空指针异常：声明引用类型数组时，如果数组内没有赋值，每个元素是个null，这时调用就会报空指针异常
下面是一个案例
package arrayTest;
public class Person {
     String name;
     int age;
     String gender;
    //有参构造器
    public Person(String name, int age, String gender) {
      super();
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
    @Override
    public String toString() {
      return "Person [name=" + name + ", age=" + age + ", gender=" + gender + "]";
    }
}
package arrayTest;
public class Persons {
  	public static void main(String[] args) {
	   Person [] persons=new Person[4];
	   for(int i=0;i<4;i++){
		   Person person=new Person("name"+i,i,"gender"+1);
		   persons[i]=person;
	   }
      for(Person p:persons){
        System.out.println(p);  //自动打印 @Override toString()
      }
	}

}</pre>

 <h3>继承</h3>
<pre>
利用extends关键字实现继承
目的：提高代码的复用率，可服用成员变量和函数
关系：父类只能有一个，子类可以有多个
<span>继承的特点</span>
  1）只有单继承
  2）继承的传递性：
    子类除了有父类，还可能有个爷爷辈的类，因为父类也可能是继承的
  3)不继承的成员：
     构造方法
     private  私有成员
     static   静态成员
<span>个人理解继承</span>
理解：继承就是引用父类中的成员变量，子类里省略了成员变量的声明，继承父类后直接赋值就行了，但是多了extends关键字继承父类
但是从父级里继承的成员变量貌似不能成为有参构造器的形参，我测试是不行
如果是toString里是可以配置继承成员变量作为参数的
<span>下面是个案例</span>
Person是父类
package extend;
public class Person {
    String name;
    int age ;
    String gender;
    public void walk(){
    	System.out.println("此人会走路");
    }
}
Teacher是子类
package extend;
public class Teacher extends Person{   //extends Person是关键点，这就算继承Person类了
     int teacherId;
     //创建一个teacher对象
     public String getTeacher(){
    	 teacherId=001;
    	 name="张老师";
    	 age=23;
    	 gender="女";
    	 return "这是个老师"+name+gender+age;
     }
     public static void main(String[] args) {

	   }
}
Test 类测试验证
package extend;
public class Test {
    //创建 teacher student 对象，将这些对象信息打印出来
	public static void main(String[] args) {
		Teacher teacher=new Teacher();
		String teacherInfo=teacher.getTeacher();
		System.out.println(teacherInfo);
	}
}
<span>重写 override</span>
重写：在具有继承关系的两个类中，子类对父类中的某个方法进行方法体的重写
重写规则：
1)签名(方法名、参数列表)一致;
2)修饰符 ：子类修饰符 >=父类修饰符
3)返回值 ：子类返回值类型 <=父类返回值类型  （尽量保持一致）
  <span>Eclipse中快速重写(Override)基类方法的技巧</span>
需要插入Override函数的位置点击右键，选择Source->Override/Implement Methods...
<span>继承中的构造方法</span>
前提 Student extends Person
Student student = new  Student();
创建子类对象时会调用父类的无参构造方法，也就意味着，创建子类对象同事父类对象也就创建了
1）子类构造方法里的关键字super()作用是调用父类的无参构造方法，
2）super()一定出现在构造方法的第一行,默认super()省略；
3）如果父类中是有参构造参数，super()调用时要添加参数
3）所有的类都有一个公共的父类  --- Object类
4)Object类中有一个toString方法该方法返回的是对象地址，如果想打印某个对象，打印出的是其数据值，解决方案是重写toString
@Override
public String toString (){}
Override重写的是Object中的toString
<span>向上造型（对象类型的向上转换）</span>
public  Student extends Person {
  Student student = new  Student();
  Person p  = new  Student();  //对象的向上造型 左边是父类类型 右边是子类对象
}
在向上造型中：父类引用子类对象
1）父类引用类型指向子类的对象，只能用到父类的成员变量，但是不能使用子类中特有的成员变量，只能用二者中共有的方法，
也就是方法的重写，但调用的重写是子类的重写方法，而且重写中有子类的成员变量时也是访问不到的
2）引用变量不能访问到子类中特有的成员（成员变量，方法）
3）引用变量如果调用了一个父子类中都有的方法，此时调用的是子类的方法 ---方法的重写
4）引用变量访问成员变量，能访问到的成员变量看这个变量的引用类型，如果是父类类型只能访问父类，子类的能访问到子类
扩展：父类在函数函数形参中可以表示它下面的所欲子类 </pre>



          <h3>修饰符</h3>
          <pre>
<span>① 四种常用修饰符</span>
可以修饰最外层的类   两种：public default；
四种常用访问控制符
<p class="pre-cmd">                      public  protected  default  private
同一个类               true     true       true     true
同一个包的类           true     true       true
不同包中的子类         true     true
所有                   true</p>
<span>② static 修饰符</span>
static修饰的成员是属于类的，非static修饰的成员方法是属于对象的
可以修饰方法，变量，代码块
<span>1）static 修饰方法</span>
static 修饰方法后,可以直接通过类名来调用   类名.方法；
main方法时最常见的static修饰的方法
<p class="pre-cmd">package StaticPackage;
public class  StaticDemo {
     public static void demo01(){
          System.out.println("静态方法测试");
     }
}
在别的类中直接StaticDemo.demo01();使用即可</p>
<span>注意：</span>
调用成员方法时，会传递一个隐式的参数（即调用这个方法的对象），可以用this表示，所以成员方法中可以调用其他成员方法，成员变量;
调用static方法时，不会向此方法传递隐式的对象，所以static方法中，不可以使用this，无法调成员方法，成员变量,只能调用静态方法，静态变量;
<span>2）static 修饰成员变量</span>
可以直接通过类名调用  类名.成员变量
<p class="pre-cmd">public class A{
    int count;
    public A(){
       count++;
     }
     public int getCount(){
         return count;
     }
    public static void main(String[] args) {
           A a1 =new A();
           A a2 =new A();
           A a3 =new A();
           int i = a3.getCount();
    }
}
  //不加 static i为1 加上static i 为3
</p>
<span>注意：</span>
static成员变量的默认初始化会随着类的加载而执行，且只执行一次，如果new创建了本类对象多次，static成员变量会依次改变

<span>3）static修饰代码块</span>
{ }包起来的内容就是代码块
static修饰代码块随着类的加载而执行，不管创建多少次对象，都只执行一次
<span>作用：</span>一般将公共的资源放入静态代码块中，称为静态资源,代码块会随着创建对象而初始化运行其中的内容
<p class="pre-cmd">package testDemo;
  public class Test01 {
  static {
    System.out.println("a");
  }
  public Test01(){
    System.out.println("b");
  }
  public static void main(String[] args) {
      // TODO Auto-generated method stub
      Test01 test01=new Test01();
      Test01 test02=new Test01();
      Test01 test03=new Test01();
  }
}
  // 最后输出的是 a b b b  静态代码只执行了一次，但是构造方法执行了三次
</p>
<span>4）总结</span>
static修饰方法、变量,成为静态方法、变量，且都可以通过类名访问并赋值
非静态方法、变量，称为实例方法、实例变量，必须通过对象调用
因为创建一个对象成为实例化，这个对接成为实例

<span>③ final 修饰符</span>
final 不可变得意思
<span>1）修饰变量：</span>
final int a =4;   //a变量不可再改变

<span>2）修饰方法 ：</span>
继承中方法不可以被重写
<p class="pre-cmd"> public final void test(){
        System.out.println("测试final")
}</p>
3)修饰类 ：
类不可以被继承，java中很常用，例如String Math 都是final修的类，避免被篡改
<p class="pre-cmd">public final class Demo(){}</p>
<span>④ static final 连用</span>
1) 用来修饰变量 ：
static final int count=5;
静态常量命名规范
如果由一个单词组成，每个字母大写
如果由多个单词组成，每个单词之间用_下划线隔开，并且每个单词大写</pre>
          <h3>封装</h3>
          <pre>
<span>①  什么是封装</span>
对数据和操作进行了包装，同时对内部的实现细节隐藏，不对外暴露
数据理解为 成员变量 操作理解为函数
source -> Generate Getter and Setters  eclipse生成get set方法
<span>② 封装类中通常写法</span>
1) 成员类private私有化
2) 生成无参/有参构造器方便声明对象初始化
3）生成get set方法方便修改引用变量
4）生成toString方便测试</pre>
          <h3>抽象方法、抽象类</h3>
          <pre>
abstract 抽象的意思
<span>抽象方法</span>
定义：光声明一个方法却没有写方法体,即只声明方法，但是不实现方法，叫抽象方法
格式：修饰符 abstract 返回类型 方法名(参数列表);
public abstract void demo();
作用：抽象方法是用来被重写的
<span>抽象类</span>
1）定义：用abstract修饰的类就叫抽象类，如果类中出现抽象方法，这个类一定也是抽象类;
2）格式：public abstract class AbstractDemo {}
3）作用：抽象类是用来被子类继承的，抽象类是一个公共的模板，将子类共有的行为方法提取出来供子类使用
4）注意：
   4.1）抽象类中可以有普通方法
   4.2）抽象类中不一定有抽象方法，可以只有普通方法；(不推荐)
   4.3）如果一个抽象类中没有抽象方法，只有普通方法，没有重写方法，此时抽象类失去了原本的意义
<span>5）抽象类不可以被实例化，即不可以创建对象，就算实例化也会报错,但是抽象类的子类对象是可以被创建的，抽象类可以通过向上造型实例化</span>
 <span>注意</span>
1）抽象方法、抽象类关系
如果一个类中有抽象方法，那么此时这个类一定是抽象类
一个抽象类中不一定有抽象方法；
2)abstract和final不可以同事修饰一个类
abstract抽象类的意义是用来被子类继承，final的作用是不可被子类继承，二者冲突
3)  如果子类继承抽象类之后没有对抽象类中的所有抽象方法重写，此时这个子类也是一个抽象类
    一般java中一个类继承抽象类，那么会对抽象类中的所有抽象方法进行重写
 public abstract class Person {
     public abstract void demo01();
     public abstract void demo02();
 }
  public abstract class Student extends Person {
       @Override
       public void demo01(){};//我只重写了demo01;没有重写demo02，则当前这个类也是抽象类
 }</pre>
          <h3>接口</h3>
          <pre>
interface 接口是一种特殊的抽象类，接口不是类
特点：接口只有两个成员，常量和抽象方法
作用：接口是一个公共的模板，一种规范是用来让别人在此模板中扩展的，也就是重写方法
写法：
interface 关键字代替 class 关键字
继承接口，用 implements 关键字代替 extends 关键字
public interface 接口名{
  //常量
  //抽象方法
}
子类调用
public class 子类名 implements 接口名{
    对接口的抽象方法全部进行重写，
    如果没有全部重写，这个子类也会成为抽象方法
 }

package interfaceTest;
public interface demo01 {
	//接口中只有常量，没有变量 ，接口自动给变量添加public static final
	int a=4;  //同等于public static final int A=4;

    //接口中的方法只能是抽象方法
	public abstract void test();  //public abstract可以不写
 	void buy();
}
package interfaceTest;
public class subDemo implements demo01{
	@Override
	public void test() {}
	@Override
	public void buy() {}
}
注意：
1)如果子类没有对接口中所有抽象方法进行重写，此时这个子类就是一个抽象类
2)接口中没有构造方法
3）java类的继承只有单继承，为了弥补单继承的不足，所有接口是可以多实现的
A(类)  implements  D,E,F,K(接口)
4)java中不允许类的多继承，运行接口的多继承
A,B,C类      A extends B,C 报错
D,E,F 接口   D extends E,F 正确
5）子类继承父类的同事也实现接口
     --extends和 implements 可以同时使用，但必须是extends在前，implements在后
public class Demo01 extends Demo02 implements Interface01 {}
如果Demo02是抽象类，Demo01要对Demo02，Interface01都重写
6) 接口不可以实例化，但可以实例化它的实现类
public interface A {}
public class B implements A{}
A a =new A();   //错误
A a =new B();   //正确</pre>
          <h3>内部类</h3>
          <pre>
类的成员：成员变量，成员方法，构造器，内部类
<span>① 什么是内部类 ：</span>
一个类定义在一个类的内部,内部类只能被自己的父级类调用
内部类和方法属于同一级别，内部类可以调用外部类中的所有成员,包括私有成员
<p class="pre-cmd">public class A{
   class B{   //内部类
       public void test(){  }
   }
}</p>
 <span>② 内部类的使用</span>
<p class="pre-cmd">public class OutterClass{
    private count=0;
    public  OutterClass{       //构造方法
         InnerClass inner =new InnerClass();
         inner.counts
    }
    class InnerClass{    //内部类
        public void counts(){
             count++;
        }
    }
    public void getCount(){
       System.out.println(count)
    }
    public static void main(String arg){
       OutterClass out =new OutterClass();
       out.getCount
    }
}
//最终输出结果是 1 ；</p>
<span>③ 匿名内部类</span>
java 中数组，自定义类，抽象类，接口都可以作为引用类型，作为方法参数类型
<p class="pre-cmd">public interface A{
   String getName();
}
public class Test{
   public void demo(A a){
      System.out.println(a.getName);
   };
   public static void main(String arg){
       Test test =new Test();
       test.demo(new A(){     //调用接口，匿名内部类
          @override
           public String  getName(){  //接口A中的抽象方法
                 return "CPU";
            };
        });
   }
}</p>
用法：如果一个方法的参数列表位置是一个接口类型，或抽象类类型，那么此时就会用到匿名内部类;匿名内部只用一次；
匿名内部类使用注意：
 1）方法的参数列表是接口，抽象类
 2）方法中对接口，抽象类形参的使用都是参数.方法格式，还要注意接口，抽象类中方法的返回类型
 3）调用方法时参数位置格式是，new 接口名/抽象类名(){}，实参类型要注意，是重写的步骤
          </pre>

          <h3>多态</h3>
          <pre>
多态：两个引用变量，类型相同，但是指向了不同的实例，调用相同的方法，但最终的结果表现不同
作用：多个类型，具有一致的父类型
多种子类中，可以转变成共同的父类型，被当做父类型来处理
interface A{
     void getMessage();
 }
class B implements {
   public void getMessage(){
     System.out.println("B")
   };
}
class C implements {
   public void getMessage(){
     System.out.println("C")
   };
}
  A a =new B();
  A b =new B();
  a.getMessage();
  b.getMessage();
意义：易于扩展
shoot项目中
FlyingObject enemies=new FlyingObject[2]
enemies[0]=new Airplane();
enemies[1]=new BigAirplane();

对象造型
<span>强制类型转换</span>
强制类型转换是基于向上造型的写法的改进
意义
 Super {
    public void getName(){
         System.out.println("父类");
    }
  }
Sub extends Super{
    public void getName(){
         System.out.println("子类");
     }
     public void getPrice(){
         System.out.println("价钱");
    }
    Super sup =new Sub();
    sup.getName();   //输出父类
    sup.getPrice();  //报错   因为向上造型只能调取父类中的方法，变量
    Sub sup1= (Sub)sup;
    sup1.getName();   //输出子类
    sup1.getPrice();  //输出价钱，向下造型弥补了向上造型只能调用父类的缺陷
}
<span>注意点1</span>
Sub extends Super
Sub1 extends Super
   Super sub =new Sub();
   Sub s=(Sub)sub;   //正确
   Sub1 s1=(Sub1)sub; //错误  因为sub等于的是new Sub()对象，不是new Sub1()对象
<span>注意点2</span>
Sub extends Super
    Super sup =new Super();
    Sub sup1=(Sub)sup    //编译错误sup等于的是父级new Super()，不是new Sub()对象


<span>instanceof 关键字</span>
 instanceof 运行期类型识别，判断某一个对象是否为某一个类型
 案例一
 Person p=new Person();
 p instanceof Person -- boolean; 返回的是布尔类型
案例二
 Person p=new Student();
 Student stu=(Student)p;
 boolean b= p   instanceof   Person; //返回true,说明可向上造型
 boolean b1= p  instanceof  Student; //返回true，可以向下造型
案例三
f(FlyingObject f) {
   //需要对英雄做特殊处理
   if(f instanceof Hero) {  //说明可以向下造型
      Hero h = (Hero) f;
   }
}
FlyingObject f = new Hero();
f instanceof Hero   //true  可以向下造型
f instanceof FlyingObject  //true 可以向上造型
对对象的真实类型及其父类型判断，都得到true

          </pre>
           <h3>内存管理</h3>
<pre>
内存分3部分：方法区、栈、堆
<span>方法区：</span>
   保存类的所有信息,方法，成员变量只保存一份
   在程序运行加载阶段，加载.class字节码，将加载的内容保存到方法区
<span>栈</span>
   保存局部变量   例如方法的形参
   随着方法的执行而产生，随着方法的结束而销毁
<span>堆</span>
    保存对象       例如 类中的成员变量
    随着对象的创建而产生，随着对象的销毁而销毁
    对象什么时候会被销毁？
    当对象不再被引用后，不就得将来就会被销毁
</pre>

          <h3>Timer定时器</h3>
          <pre>
import java.util.Timer;
import java.util.TimerTask;
timer.schedule(task, delay, period);  task要执行的任务，delay延迟时间 period定时循环时间
Timer timer=new Timer();    task参数的匿名内部类
<sapn>定时器案例</sapn>
<p class="pre-cmd">int period=10;  //间隔时间10毫秒
Timer timer=new Timer();
timer.schedule(new TimerTask() {
	@Override
	public void run() {
				//要执行的任务
	}
}, period, period);
//不写 3000,就只 1s钟后 开始爆炸
//写3000,就是1s后爆炸 然后隔 3s再炸下,循环
new Timer().schedule(new TimerTask() {
  @Override
  public void run() {
    // TODO Auto-generated method stub
    System.out.println("bombing!");
  }
}, 1000,3000);  //定时器 ,10后爆炸</p></pre>
          <h3>JFrame、JPanel窗体类</h3>
          <pre>
JFrame类，是Java图形用户界面(GUI)工具包swing中的存放组件的容器。相当于相框。
JPanel类，是Java图形用户界面(GUI)工具包swing中的面板容器类。相当于画板。
<span>① 画窗体关键词</span>
JPanel 窗口界面 swing包用来做窗口界面 extends JPanel   import javax.swing.JPanel;
JFrame frame=new JFrame();  无参
JFrame frame=new JFrame(String title);   有参 有标题
<span>② 实现步骤</span>
1）继承JPanel
import javax.swing.JPanel;
public class World2 extends JPanel{ }
2）声明 JFrame
import javax.swing.JFrame;
public static void main(String[] args) {
    JFrame frame=new JFrame("title标题");
}
3）配置窗口参数并
public static void main(String[] args) {
    JFrame frame = new JFrame("利用JFrame创建窗口"); // 创建指定标题的JFrame窗口对象
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // 关闭按钮的动作为退出窗口
    frame.setSize(400, 700);                          // 设置窗口大小
    frame.setLocationRelativeTo(null);               //设置窗体居中
    frame.setVisible(true);                          // 设置窗口为可见的，默认为不可见
}
          </pre>
          <h3>获取BufferedImage图片对象</h3>
<pre>
<span>作用</span>
要想操作一张图片，首先必须将其从磁盘加载到内存中，然后才能对图片做进一步的处理，BufferedImage的主要作用就是将一副图片加载到内存中。
<span>操作核心</span>
根据图片名称找到url：       类名.class.getResource(String name);
根据文件路径找到图片：      ImageIO.read(url);
根据文件路径声明图片对象：  BufferedImage ; import java.awt.image.BufferedImage;
<span>案例</span>
<p class="pre-cmd">package shootGame;
import java.awt.image.BufferedImage;
import java.io.IOException;
import javax.imageio.ImageIO;
public class FlyingObject {
	 //加载图片
   private static BufferedImage image=null;
	 public  static BufferedImage loadImage(String fileName){
		// BufferedImage image=null;  //写成静态变量也行
	   try {
		    image=ImageIO.read( FlyingObject.class.getResource(fileName));
	       return image;
	    } catch (IOException e) {
	    	// TODO Auto-generated catch block
	    	e.printStackTrace();
        throw new RuntimeException(e.getMessage());
	   }
	 }
}
在子类中加载图片方式
//子类加载图片
private static BufferedImage[] images;
static{
 images=new BufferedImage[5];
 for(int i=0;i<5;i++){
   images[i]=loadImage("hero"+i+".png");
 }
};</p>
<span>总结</span>
BufferedImage image=ImageIO.read( FlyingObject.class.getResource(String name));
没有找到图片会报下面的错误
Caused by: java.lang.IllegalArgumentException: input == null!
at javax.imageio.ImageIO.read(ImageIO.java:1388)
at shootGame.FlyingObject.loadImage(FlyingObject.java:25)
at shootGame.Airplane.< clinit >(Airplane.java:15)</pre>
          <h3>Graphics类</h3>
          <pre>
Graphics类，是Java用于绘图和显示格式化文字的工具。相当于画笔。
Graphics类：可以理解为画笔，为我们提供了各种绘制图形
1.画直线    drawLine（int x1，int y1，int x2， int y2）
2.画矩形边框    drawRect（int x，int y，int width，int height）
3.画椭圆边框    drawOval（int x，int y，int width，int height）
4.填充矩形        fillRect（int x，int y，int width，int height）
5.填充椭圆        fillOval（int x，int y，int width，int height）
6.画图片            drawImage（Image img，int x，int y，……）
7.画字符串        drawString（String str，int x，int y）
8.设置画笔的字体    setFont（Font font）
9.设置画笔的颜色    setColor（Color c）
repaint() 这个方法是一个具有刷新页面效果的方法，如果你要页面进行重画就可以调用
案例：载入一张背景图片
<p class="pre-cmd">package paint;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.io.IOException;
import javax.imageio.ImageIO;
import javax.swing.JFrame;
import javax.swing.JPanel;
public class PaintDemo extends JPanel{
  public static void main(String[] args) {
      //绘制窗体
      JFrame frame=new JFrame("画图");
      PaintDemo paintDemo=new PaintDemo();
      frame.add(paintDemo);           //重点，将画板paintDemo嵌入相框中，没有这步图片显示不出来
      frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // 关闭按钮的动作为退出窗口
      frame.setSize(400, 700);                          // 设置窗口大小
      frame.setLocationRelativeTo(null);               //设置窗体居中
      frame.setVisible(true);
  }
  //加载图片
  public BufferedImage getImage(){
    try {
        BufferedImage image=ImageIO.read(this.getClass().getResource("background.png"));
        return image;
    } catch (IOException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
        throw new RuntimeException();
    }
  }
  //画图片
  public void paint(Graphics g){    //paint方法是固定的写法，换成paint01就错了
      //g.drawImage(img, x, y,null);
      g.drawImage(getImage(),0, 0,null);  //这里加载了图片
  }
}</p>
案例：用Graphics画一个小人图像
<p class="pre-cmd">import java.awt.Graphics;
import javax.swing.JFrame;
import javax.swing.JPanel;
public class DrawPersonDemo {
public static void main(String[] args) {
  // 创建相框
  JFrame jFrame = new JFrame();
  // 创建画板
  JPanel jpanel = new JPanel() {
    //序列号（可省略）
    private static final long serialVersionUID = 1L;

    // 重写paint方法
    @Override
    public void paint(Graphics graphics) {
        // 必须先调用父类的paint方法
        super.paint(graphics);
        // 用画笔Graphics，在画板JPanel上画一个小人
        graphics.drawOval(100, 70, 30, 30);// 头部（画圆形）
        graphics.drawRect(105, 100, 20, 30);// 身体（画矩形）
        graphics.drawLine(105, 100, 75, 120);// 左臂（画直线）
        graphics.drawLine(125, 100, 150, 120);// 右臂（画直线）
        graphics.drawLine(105, 130, 75, 150);// 左腿（画直线）
        graphics.drawLine(125, 130, 150, 150);// 右腿（画直线）
    }
  };
  //将绘有小人图像的画板嵌入到相框中
  jFrame.add(jpanel);
  // 设置画框大小（宽度，高度），默认都为0
  jFrame.setSize(300, 300);
  // 将画框展示出来。true设置可见，默认为false隐藏
  jFrame.setVisible(true);
}
}</p></pre>
          <h3>获取鼠标在窗口上的位置</h3>
          <pre>
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
MouseAdapter adapter=new MouseAdapter() {
    		@Override
    		public void mouseMoved(MouseEvent e) {
          //获取鼠标位置
    			int x=  e.getX();
    			int y=  e.getY();
    			hero.move(x, y);  //调取其他实例方法
    		};
		};
		this.addMouseListener(adapter);
		this.addMouseMotionListener(adapter);

mouseAdapter是抽象类,mouseEvent是接口
鼠标事件使用户能够跟踪鼠标何时被按下、释放、单击、移动、拖动、何时进入一个组件、何时退出、何时滚动鼠标滚轮。
扩展此类可创建 MouseEvent（包括拖动和移动事件）或/和 MouseWheelEvent 侦听器，并针对所需事件重写方法。
mouseEvent只是作为一个参数将信息封转起来传给mouseAdapter或者mouseListener里面的方法
所以当需要实现mouseAdapter或者mouseListener里面的方法时
void mouseClicked(MouseEvent e)
void mousePressed(MouseEvent e)
void mouseReleased(MouseEvent e)
void mouseEntered(MouseEvent e)
void mouseExited(MouseEvent e)
可以在函数内通过调用MouseEvent封装的信息或者函数来获取所需要的数据
addMouseListener、addMouseMotionListener 和 addMouseWheelListener 方法向组件注册此侦听器对象
          </pre>

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
