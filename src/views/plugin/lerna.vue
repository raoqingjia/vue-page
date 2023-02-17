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
            <li v-for="(items,index) in catalogue"  :key="index" ><a @click="jump(index)">{{index+1}}、{{items.name}}</a></li>
          </ul>
          <h3>基本信息</h3>
          <pre>官网https://www.lernajs.cn/
npm view lerna versions
npm install -g lerna@3.12.0
          </pre>
          <h3>lerna.json配置说明</h3>
          <pre><p class="language-bg"> {
  "useWorkspaces": true, // 是否使用 workspaces 的配置; 如果为 true, 将会使用 package.json 文件的 "workspaces" 属性, 而下面的 "packages" 属性将不会生效
  "version": "0.0.0", // 所有子包的版本号; 两种模式: 固定模式(x.x.x)、独立模式(independent)
  "npmClient": "npm", // 指定运行命令的客户端; 可以设置为 npm/cnpm/yarn/pnpm 等等
  "packages": [ // 指定子包所在的目录, 可以指定多个
     "packages/*"
  ],
  "command": {
    // lerna publish 命令的相关配置
    "publish": {
      "ignoreChanges": [ // 指定那些目录或者文件的变更不会被publish
        ".gitignore",
        "*.log",
        "*.md"
      ],
      "message": "chore(release): publish", // 执行发布版本更新时的自定义提交消息
      "registry": "https://npm.pkg.github.com" // 设置npm包发布的注册地址
    },
    // lerna bootstrap 命令的相关配置
    "bootstrap": {
      "ignore": "npm-*",  // 设置执行 lerna bootstrap 安装依赖时不受影响的包
      "npmClientArgs": [ // 指定在执行 lerna bootstrap 命令时传递给 npm install 的参数
        "--no-package-lock"
      ],
      "scope": "" // 指定那些包会受 lerna bootstrap 命令影响
    },
    // lerna version 命令的相关配置
    "version": {
      "allowBranch": "", // 指定分支
      "conventionalCommits": true
    }
  }
}</p></pre>
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
      mounted:function(){
        this.$nextTick(function(){
          this.createCatalogue();
        })
      },
      methods: {
        jump (index) {
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
            var o={name:object[i].innerHTML};
            flag.push(o)
          }
          this.catalogue=flag;
        }
      }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
