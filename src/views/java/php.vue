<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>php基础知识</h3>
          <pre>
PHP 是一种 HTML 内嵌式的语言。而PHP独特的语法混合了 C、Java、Perl 以及 PHP 式的新语法。它可以比 CGI 或者 Perl 更快速的执行动态网页

$cars=array("Volvo","BMW","SAAB");
echo $txt1;
echo "Study PHP at $txt2";
echo "This", " string", " was", " made", " with multiple parameters.";
echo "My car is a {$cars[0]}";

PHP 常量
有效的常量名以字符或下划线开头（常量名称前面没有 $ 符号）
如需设置常量，请使用 define() 函数 - 它使用三个参数：
首个参数定义常量的名称
第二个参数定义常量的值
可选的第三个参数规定常量名是否对大小写不敏感。默认是 false。

PHP 字符串函数
strlen()  函数返回字符串的长度
strrev()  函数反转字符串
strpos()  检索字符串内指定的字符或文本,如果找到匹配，则会返回首个匹配的字符位置。如果未找到匹配，则将返回 FALSE,索引从1开始
str_replace() 函数用一些字符串替换字符串中的另一些字符

PHP 字符串运算符
.	串接	$txt1 = "Hello" $txt2 = $txt1 . " world!"	现在 $txt2 包含 "Hello world!"
.=	串接赋值	$txt1 = "Hello" $txt1 .= " world!"	现在 $txt1 包含 "Hello world!"

PHP 逻辑运算符
&&	与	$x && $y	如果 $x 和 $y 都为 true，则返回 true。
and	与	$x and $y	如果 $x 和 $y 都为 true，则返回 true。
xor	异或	$x xor $y	如果 $x 和 $y 有且仅有一个为 true，则返回 true。
or	或	$x or $y	如果 $x 和 $y 至少有一个为 true，则返回 true。
||	或	$x || $y	如果 $x 和 $y 至少有一个为 true，则返回 true。
!	非	!$x	如果 $x 不为 true，则返回 true。

PHP for 循环
for ($x=0; $x<=10; $x++) {
  echo "数字是：$x < br>";
}

foreach 循环只适用于数组，并用于遍历数组中的每个键/值对。
$colors = array("red","green","blue","yellow");
foreach ($colors as $value) {
  echo "$value < br>";
}
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'linux',
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
