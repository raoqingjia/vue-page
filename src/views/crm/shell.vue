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
          <h3>脚本的调用形式</h3>
          <pre>打开终端时系统自动调用：/etc/profile 或 ~/.bashrc
/etc/profile
此文件为系统的每个用户设置环境信息,当用户第一次登录时,该文件被执行，系统的公共环境变量在这里设置
开始自启动的程序，一般也在这里设置
~/.bashrc
用户自己的家目录中的.bashrc
登录时会自动调用，打开任意终端时也会自动调用
这个文件一般设置与个人用户有关的环境变量，如交叉编译器的路径等等
用户手动调用：用户实现的脚本

source命令用法:
source FileName
作用:在当前bash环境下读取并执行FileName中的命令。
注:该命令通常用命令“.”来替代。
如:source .bash_rc 与 . .bash_rc 是等效的。
注意:source命令与shell scripts的区别是，
source在当前bash环境下执行命令，而scripts是启动一个子shell来执行命令。这样如果把设置环境变量(或alias等等)的命令写进scripts中，就只会影响子shell,无法改变当前的BASH,所以通过文件(命令列)设置环境变量时，要用source 命令。</pre>
          <h3>脚本的初步编写</h3>
          <pre>脚本以 #!/bin/bash开头
#!用来声明脚本由什么shell解释，否则使用默认shell
如：创建第一个shell程序，输出hello world!
#!/bin/bash
echo “hello world!”
执行方式
1、输入脚本的绝对路径或相对路径（此方法要赋予该脚本可执行权限），如./hello.sh 或/home/hello.sh
2、sh + 脚本名，可以直接执行
          </pre>
          <h3>Shell的变量</h3>
          <pre>Linux Shell的变量分为系统变量和用户自定义变量。
系统变量：$HOME、$SHELL、$USER等等，可用echo输出查看，如echo $HOME。（输入set 可以查看所有的系统变量）

Shell变量的定义
1、定义变量：变量名=值 （不可加空格）
2、撤销变量：unset 变量名（注意：声明静态变量readonly变量不可用unset撤销）
3、使用 $变量名
4、查看环境变量：env
如：定义一个变量A，使之等于100，声明静态变量B=200
#!/bin/bash
A=100
echo A=$A (或echo "A=$A"，这两种写法都输出A=100，而echo $A则直接输出100)
readonly B=200
echo B=$B
注意：变量名规范为大写，不能带有系数，不能随意加空格
将命令的返回值赋给变量
1、A=`date`，即可将date命令的结果赋给A(必须要加反引号，否则是将文本赋给A)
2、A=$(date) 等价与反引号

注意事项：
1、变量名只能包含英文字母下划线，不能以数字开头
1_num=10 错误
num_1=20 正确
2、等号两边不能直接接空格符，若变量中本身就包含了空格，则整个字符串都要用双引号、或单引号括起来
3、双引号 单引号的区别
双引号：可以解析变量的值
单引号：不能解析变量的值

设置环境变量
export 变量名=变量值 （将shell变量输出为环境变量或全局变量）
source 配置文件 (刷新配置文件，让修改后的配置信息立刻生效)
echo $变量名   (查询环境变量的值)



          </pre>
          <h3></h3>
          <pre></pre>
          <h3></h3>
          <pre></pre>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: '',
        data() {
            return {
                created: this.$route.query.created,
                title: this.$route.query.name,
                catalogue: []
            }
        },
        mounted() {
            this.$nextTick(function () {
                this.createCatalogue();
            })
        },
        computed: {},
        methods: {
            jump(index) {
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

                function smoothDown() {
                    if (total > distance) {
                        distance += step;
                        document.body.scrollTop = distance;
                        document.documentElement.scrollTop = distance;
                        setTimeout(smoothDown, 10)
                    } else {
                        document.body.scrollTop = total;
                        document.documentElement.scrollTop = total
                    }
                }

                function smoothUp() {
                    if (total < distance) {
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
            createCatalogue() {
                let object = document.getElementsByTagName('h3');
                var flag = [];
                for (var i = 0; i < object.length; i++) {
                    object[i].innerHTML = ((i + 1) + ". " + object[i].innerHTML);
                    flag.push({name: object[i].innerHTML})
                }
                this.catalogue = flag;
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
