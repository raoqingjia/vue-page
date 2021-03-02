<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>1、本地安装gulp插件</h3>
          <article>
            <p>开始安装的一切前提是安装了node.js，有npm或cnpm，全局安装了gulp执行npm install gulp -g命令</p>
            <p>再手动安装配置文件执行npm init创建package.json文档,这个文档中包含了当前项目的相关信息，例如通过npm安装依赖的模块的版本信息之类。</p>
            <p>之后本地安装gulp，执行npm install gulp --save-dev命令</p>
          </article>
          <h3>
            2、使用gulp-htmlmin压缩html，可以压缩页面javascript、css，去除页面空格、注释，删除多余属性等操作
          </h3>
            <pre>
执行npm install gulp-htmlmin --save-dev命令
配置gulpfile.js
var gulp = require('gulp'),
htmlmin = require('gulp-htmlmin');
gulp.task('testHtmlmin', function () {
var options = {
removeComments: true,//清除HTML注释
collapseWhitespace: true,//压缩HTML
collapseBooleanAttributes: true,  //省略布尔属性的值 &#60input checked="true"/&#62 ==> &#60input /&#62
removeEmptyAttributes: true,//删除所有空格作属性值  &#60input id="" /&#62 ==> &#60input /&#62
removeScriptTypeAttributes: true,  //删除  &#60script>的type="text/javascript"
removeStyleLinkTypeAttributes: true, //删除  &#60style&#62和&#60link&#62的type="text/css"
minifyJS: true,//压缩页面JS
minifyCSS: true//压缩页面CSS
};</pre>
          <h3>
            3.使用gulp-uglify压缩javascript文件，减小文件大小
          </h3>
          <pre>
执行npm install gulp-uglify --save-dev命令
var gulp = require('gulp'),
uglify = require('gulp-uglify');
gulp.task('jsmin', function () {
gulp.src('src/js/index.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
 });
命令提示符执行：gulp jsmin</pre>
      <h3>
        4.gulp教程之gulp-clean-css压缩css文件，减小文件大小
      </h3>
      <pre>
 执行npm install gulp-clean-css --save-dev命令
 var gulp = require('gulp'),
 cssmin = require('gulp-clean-css');
 gulp.task('testCssmin', function () {
     gulp.src('src/css/*.css')
     .pipe(cssmin())
     .pipe(gulp.dest('dist/css'));
 });
gulp.task('testCssmin', function () {
     gulp.src('src/css/*.css')
    .pipe(cssmin({
        advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
        compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
        keepBreaks: true,//类型：Boolean 默认：false [是否保留换行]
        keepSpecialComments: '*',  //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        rebase: false       //防止压缩后图片路径出现问题
    }))
    .pipe(gulp.dest('dist/css'));
 });</pre>
          <h3>
            5.给css文件里引用url加版本号
          </h3>
          <pre>
确保已本地安装gulp-make-css-url-version，执行npm install gulp-make-css-url-version --save-dev命令
var gulp = require('gulp'),
cssmin = require('gulp-clean-css');
cssver = require('gulp-make-css-url-version');
gulp.task('testCssmin', function () {
gulp.src('src/css/*.css')
    .pipe(cssver())       //给css文件里引用文件加版本号（文件MD5）
    .pipe(cssmin())
    .pipe(gulp.dest('dist/css'));
});
命令提示符执行：gulp testCssmin</pre>
          <h3>
            6.使用gulp-imagemin压缩图片文件（包括PNG、JPEG、GIF和SVG图片）,这个容易报错，报错就一次次重装就行
          </h3>
          <pre>
执行npm install gulp-imagemin --save-dev
imagemin = require('gulp-imagemin');
gulp.task('testImagemin', function () {
gulp.src('src/img/*.{png,jpg,gif,ico}')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/img'));
});
只压缩修改的图片。压缩图片时比较耗时，在很多情况下我们只修改了某些图片，没有必要压缩所有图片，
使用”gulp-cache”只压缩修改的图片，没有修改的图片直接从缓存文件读取
（C:\Users\Administrator\AppData\Local\Temp\gulp-cache）。
var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
pngquant = require('imagemin-pngquant'),
//确保本地已安装gulp-cache [cnpm install gulp-cache --save-dev]
cache = require('gulp-cache');

gulp.task('testImagemin', function () {
gulp.src('src/img/*.{png,jpg,gif,ico}')
  .pipe(cache(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
  })))
  .pipe(gulp.dest('dist/img'));
      });</pre>

          <h3>
            7.删除文件执行
          </h3>
          <pre>
执行npm install gulp del --save-dev
del = require('del');
gulp.task('distdel', function (cb) {
  del([
    'dist/css',
    'dist/EC_WEB',
    'dist/ECS',
    'dist/js',
    'dist/images'
   ], cb);
   });</pre>
          <h3>
            8.去掉js或html中的console.log()，alert
          </h3>
          <pre>
执行npm install gulp-strip-debug --save-dev命令
gulp.task('jsmin', function () {
gulp.src('src/js/*/*.js')
    .pipe(stripDebug())   //去掉js中的console。log  这里才是关键点
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
     });</pre>
          <h3>
            9.跟angular相关的gulp依赖
          </h3>
          <pre>
使用gulp压缩angular的项目中的js往往会报错说明少安装了这两个模块，gulp-ng-annotate和ulp-ngmin模块；
执行npm install --save-dev gulp-ng-annotate
和 npm install --save-dev gulp-ngmin

ngAnnotate = require('gulp-ng-annotate');  //用ng-annotate添加angularjs依赖注入注释
ngmin = require('gulp-ngmin'); // 使用ngmin预先缩小AngularJS应用程序
先ngAnnotate 添加依赖注入，在ngmin 缩小应用程序
gulp.task('jsmin', function () {
    gulp.src(['src/js/*/*.js'])
        .pipe(ngAnnotate())
        .pipe(ngmin({dynamic: false}))
        .pipe(stripDebug())    //去掉js中的console。log
        .pipe(uglify())        //js压缩
        .pipe(gulp.dest('ECS/js'));
});</pre>
          <h3>
            10.修改文件内容，替换文件内容,执行npm install --save-dev gulp-replace-pro命令
          </h3>
          <pre>
replaceText= require('gulp-replace-pro');
gulp.task('fixip', function(){
gulp.src(['src/js/pages/common.js'])
    .pipe(replaceText('http://10.248.50.221:8080/ECS/api', 'http://117.136.128.38/ECS/api'))   //重点位置
    .pipe(stripDebug())   //去掉js中的console。log
    .pipe(uglify())
    .pipe(gulp.dest('ECS/js/pages'));
      </pre>
          <h3>
            11.问题解析
          </h3>
          <pre>
① 问题:在一个html页面中书写&#60td>1≤T&#60 5&#60/td>利用gulp压缩的时候碰到&#60这个小于符号时就会报错，因为gulp认为是标签的闭合符了
解决方法：利用特殊字符代替小于号</pre>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'gulp',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name,
      }
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
