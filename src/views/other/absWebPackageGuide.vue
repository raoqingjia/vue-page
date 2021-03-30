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
打包之node_modules.tar

docker pull node:13.0.1

docker images|grep node

docker run -itd --name gbss-node 10.34.28.4:5000/node:10.15.3  bash

docker exec -it 35997f73a84a bash

cd /GridWeb/

rm node_modules.tar

rm -rf node_modules

npm install chromedriver --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver

npm install

tar jcf  node_modules.tar  node_modules

exit

docker cp  35997f73a84a:/GridWeb/node_modules.tar  /opt

---------------------------------------------------------------------

打包之dist

本地执行npm run build 将生成的dist文件上传到git

通过xshell连接发布环境linux

cd /tmp/abs/abs-web   //Git同步的项目目录

git branch 看一下分支

git pull origin  分支名称

cp support -r ./dist    //  进入打包生成的目录

tar cvpf dist.tar dist    //  打成tar包

cp dist.tar /home/esopadm/abs_images_deploy/abs-web-nginx   // 将tar包移动到发布目录下

cd /home/esopadm/abs_images_deploy/abs-web-nginx     //  切换到发布目录

./deploy.sh   //  重新构建镜像

abs abs-web-nginx update  //  更新实例</pre>

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
