<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>1、Grunt插件介绍</h3>
          <article>
            <p>grunt官网 http://www.gruntjs.net/</p>
            <p>grunt插件列表页面 http://www.gruntjs.net/plugins <br>
              插件分为两类。第一类是grunt团队贡献的插件，这些插件的名字前面都带有“contrib-”前缀，而且在插件列表中有星号标注。
              第二类是第三方提供的插件，不带有这两个特征。<br>
              Contrib-jshint——javascript语法错误检查；<br>
              Contrib-watch——实时监控文件变化、调用相应的任务重新执行；<br>
              Contrib-clean——清空文件、文件夹；<br>
              Contrib-uglify——压缩javascript代码<br>
              Contrib-copy——复制文件、文件夹<br>
              Contrib-concat——合并多个文件的代码到一个文件中<br>
              karma——前端自动化测试工具<br>
            </p>
          </article>
          <h3>
            2、Grunt的全局安装与本地安装
          </h3>
          <article>
            <p>
              grunt是基于node下的npm安装的,先全局安装grunt，安装的快慢取决于网速，
            </p>
            <p>执行npm install -g grunt-cli命令</p>
            <p>在命令行中输入 grunt 会显示下面的提示，说明安装成功</p>
            <p class="cmd-bg">
              grunt-cli: The grunt command line interface (v1.2.0)<br>
              Fatal error: Unable to find local grunt.<br>
              If you're seeing this message, grunt hasn't been installed locally to<br>
              your project. For more information about installing and configuring grunt,<br>
              please see the Getting Started guide:<br>
              http://gruntjs.com/getting-started
            </p>
            <p>之后切换到项目文件夹,命令行输入npm init 创建package.json,这里将是以后安装的信息，显示安装了哪些模块，引入了哪些插件，及相关的版本号。</p>
             <p>
               在package.json创建后，任然是切换到项目文件夹，命令行中输入npm install grunt  --save-dev 本地安装grunt
               需要解释的是，“--save-dev”的意思是，在当前目录安装grunt的同时，顺便把grunt保存为这个目录的开发依赖项。
               在配置文件package.json中，其中的“devDependencies”中就会存储开发依赖项。
               安装完成后项目文件夹中就会出现“node_modules”文件夹，其中有一个“grunt”文件夹，再其中有若干文档。
               这里就是存储grunt源文件的地方。<br>
             </p>
            </article>
          <h3>3、新建Gruntfile.js文件，去配置grunt打包参数</h3>
          <pre>
当本地grunt与package.json都安装成功后，在当前项目下创建Gruntfile.js文件，与node_modules”文件夹同级
//包装函数
module.exports = function(grunt) {
    // 任务配置，所有插件的配置信息
    grunt.initConfig({
        //获取package.json的信息
        pkg: grunt.file.readJSON('package.json')
    });
    // 默认被执行的任务列表。
    grunt.registerTask('default', []);
};</pre>
          <h3>4、使用uglify插件（压缩javascript代码）</h3>
          <pre>
第一步：
执行npm install grunt-contrib-uglify --save-dev命令安装插件
第二步:
在Gruntfile.js引入当前的js压缩插件
grunt.loadNpmTasks('grunt-contrib-uglify');
第三步：配置要压缩js的文件路径
uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        }
“options”中规定允许生成的压缩文件带banner，即在生成的压缩文件第一行加一句话说明。注意，其中使用到了pkg获取package.json的内容。
“build”中配置了源文件和目标文件。即规定了要压缩谁？压缩之后会生成谁？注意，我们这里将目标文件的文件名通过pkg的name和version来命名。
这样的好处是：例如，对文件版本的管理，你只需要在package.json中修改即可，grunt会自动根据最新的版本号生成相应版本的文件，你不用手动去修改文件的文件名。
用处是在 grunt.initConfig 方法之后，要让grunt去加载这一个插件，插件只有加载了，才能使用

第四部：执行js压缩命令，看是否能成功运行
grunt.registerTask('default', ['uglify']); 即执行js的压缩命令</pre>
          <h3>5、压缩图片</h3>
          <pre>
第一步：
执行 npm install grunt-contrib-imagemin --save-dev 命令
第二步:
在Gruntfile.js引入当前的img压缩插件
grunt.loadNpmTasks('grunt-contrib-imagemin');
第三步:
    imagemin: {
            /* 压缩图片大小 */
            dist: {
                options: {
                    optimizationLevel: 3 //定义 PNG 图片优化水平
                },
                files: [
                    {
                        expand: true,
                        cwd: 'src/img',
                        src: ['*.{png,jpg,jpeg}'], // 优化 img 目录下所有 png/jpg/jpeg 图片
                        dest: 'dist/img' // 优化后的图片保存位置，覆盖旧图片，并且不作提示
                    }
                ]
            }
        }
第四步:
grunt.registerTask('img', ['imagemin']); //执行img图片压缩的命令</pre>
          <h3>6、压缩CSS</h3>
          <pre>
第一步：
执行  npm install grunt-contrib-cssmin --save-dev 命令
第二步:
在Gruntfile.js引入当前的css压缩插件
grunt.loadNpmTasks('grunt-contrib-cssmin');
第三步:
        cssmin: {
            options: {
                mangle: false
            },
            css: {
                expand: true,
                cwd: 'src/css',     //压缩那个文件夹里的文件
                src: '*.css',   //压缩那个文件
                dest: 'dist/css',  //放压缩后文件的文件夹
                ext: '.min.css'    //压缩后文件的的名字
            }
        }
第四步:
grunt.registerTask('css', ['cssmin']); //执行css压缩的命令</pre>
          <h3>7、压缩html</h3>
          <pre>
第一步:
执行  npm install grunt-contrib-htmlmin --save-dev 命令
第二步:
在Gruntfile.js引入当前的css压缩插件
grunt.loadNpmTasks('grunt-contrib-htmlmin')
第三步:
      //压缩HTML
      htmlmin: {
          options: {
              removeComments: true, //移除注释
              removeCommentsFromCDATA: true,//移除来自字符数据的注释
              collapseWhitespace: true,//无用空格
              collapseBooleanAttributes: true,//失败的布尔属性
              removeAttributeQuotes: true,//移除属性引号      有些属性不可移走引号
              removeRedundantAttributes: true,//移除多余的属性
              useShortDoctype: true,//使用短的跟元素
              removeEmptyAttributes: true,//移除空的属性
              removeOptionalTags: true//移除可选附加标签
          },
          yasuo: {
              expand: true,
              cwd: 'index',
              src: ['*.html'],
              dest: 'yshtml'
          }
      }
第四步:
grunt.registerTask('html', ['htmlmin']); //执行html压缩的命令</pre>
          <h3>8、clean清除功能</h3>
                    <pre>
第一步:
执行 npm install grunt-contrib-clean --save-dev 命令
第二步:
在Gruntfile.js引入当前的清除插件
grunt.loadNpmTasks('grunt-contrib-clean');
第三步:
clean :{
      js:[ 'dist/js/*.js'],
      css:['dist/css/*.css'],
      img:['dist/img/*.{png,jpg,jpeg}'],
      html:['dist/*.html']
  }
第四步:
grunt.registerTask('del', ['clean']); //执行删除的命令</pre>
          <h3>Gruntfile.js文件参数配置备份</h3>
          <pre>
//包装函数
module.exports = function (grunt) {
    // 任务配置，所有插件的配置信息
    grunt.initConfig({
        //获取package.json的信息
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                preserveComments: 'all', //不删除注释，还可以为 false（删除全部注释），some（保留@preserve @license @cc_on等注释）
                banner: '/*! <%= pkg.name %>  <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                //将src/js下的文件压缩后放到dist/js文件夹下
                expand: true,
                cwd: 'src/js',//js目录下
                src: ['*.js'],
                dest: 'dist/js'

                //自动将多个js压缩成一个js文件
                //src: ['src/js/*.js'],
                // dest: 'dist/js/common.js'
            }
        },
        imagemin: {
            /* 压缩图片大小 */
            dist: {
                options: {
                    optimizationLevel: 3 //定义 PNG 图片优化水平
                },
                files: [
                    {
                        expand: true,
                        cwd: 'src/img',
                        src: ['*.{png,jpg,jpeg}'], // 优化 img 目录下所有 png/jpg/jpeg 图片
                        dest: 'dist/img' // 优化后的图片保存位置，覆盖旧图片，并且不作提示
                    }
                ]
            }
        },
        cssmin: {
            options: {
                mangle: false
            },
            css: {
                expand: true,
                cwd: 'src/css',     //压缩那个文件夹里的文件
                src: '*.css',   //压缩那个文件
                dest: 'dist/css',  //放压缩后文件的文件夹
                ext: '.min.css'    //压缩后文件的的名字
            }
        },
        //压缩HTML
        htmlmin: {
            options: {
                removeComments: true, //移除注释
                removeCommentsFromCDATA: true,//移除来自字符数据的注释
                collapseWhitespace: true,//无用空格
                collapseBooleanAttributes: true,//失败的布尔属性
                removeAttributeQuotes: true,//移除属性引号      有些属性不可移走引号
                removeRedundantAttributes: true,//移除多余的属性
                useShortDoctype: true,//使用短的跟元素
                removeEmptyAttributes: true,//移除空的属性
                removeOptionalTags: true//移除可选附加标签
            },
            yasuo: {
                expand: true,
                cwd: 'src',
                src: ['*.html'],
                dest: 'dist'
            }
        },
        clean :{
            js:[ 'dist/js/*.js'],
            css:['dist/css/*.css'],
            img:['dist/img/*.{png,jpg,jpeg}'],
            html:['dist/*.html']
        }

});
    //引入各个模块或插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    // 默认被执行的任务列表。
    grunt.registerTask('default', ['uglify','imagemin','cssmin','htmlmin']);
    //grunt.registerTask('img', ['imagemin']);
    //grunt.registerTask('css', ['cssmin']);
    //grunt.registerTask('html', ['htmlmin']);
    grunt.registerTask('del', ['clean']);
};</pre>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'grunt',
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
