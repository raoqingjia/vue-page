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
            <li v-for="(items,index) in catalogue"><a @click="jump(index)">{{index+1}}、{{items.name}}</a></li>
          </ul>
          <h3>Git常用命令</h3>
          <pre>
1. Git强制更新并覆盖本地修改
git fetch --all     从远程拉取最新的代码 不merge
git reset --hard origin/develop    使用指定分支的代码（此处develop）强制覆盖代码
git pull    从远程拉取最新的代码 自动merge

2. Git回退代码到指定版本
git log     查看所有的历史版本
git reset --hard ID     回退本地代码库
git push -f  origin master     如果需要推送到远端的仓库的话，需要强制提交
git pull      重新拉代码

3. Git本地代码强制提交到远程
git push -f origin master     -f表示将目前自己本机的代码库推送到远端，并覆盖

4. Git忽略不想提交的文件
git update-index --assume-unchanged  include/db.php   忽略文件，include/db.php是文件名，忽略的文件不能在.gitignore
git update-index --no-assume-unchanged  include/db.php    恢复跟踪

5. Git只merge一个commit的方法
一个分支的所有代码变动，那么就采用合并（git merge）。另一种情况是，你只需要部分代码变动（某几个提交），这时可以采用git cherry-pick
git cherry-pick < commitHash>       将指定的提交commitHash合并到当前分支
git cherry-pick sit                 将sit分支的最近一次提交，转移到当前分支
git cherry-pick < HashA> < HashB>   支持一次转移多个提交，提交 A 必须早于提交 B，否则命令将失败，但不会报错。

git push -f  origin master    加了参数-u后，以后即可直接用git push 代替git push origin master  -u 不经常用，但是网上好多博客都有这玩意
在git分支-M main中-M是什么意思？
-M是git branch上的docs页上--move --force的标志（快捷方式）。因此，它移动/重命名名为main的分支（因为使用命令行创建的存储库的默认分支名称是master，而在GitHub中创建的那些（从2020年10月开始）具有默认名称main）并强制它（即使新的分支名称已经存在，也允许重命名分支）
'git push -u origin master'中'-u'的含义是什么？
-u标志为您推送的上游服务器添加引用。这可以让你git pull不提供额外的参数，即一旦你输入git push -u origin master，你就可以简单地键入git pull，这个命令将明白你将来的意思是git pull origin master。

6.Git安装
在 Mac 本子上执行如下命令：
git --version
如果本子上已经安装了 git 工具，会输出类似下面的版本信息：
git version 2.24.3 (Apple Git-128)</pre>
          <h3>GIt设置全局变量</h3>
          <pre>
git config --list       可以查看配置的一些东西
git config --list --global     查找当前global
git config user.name = git config --get user.name 查找当前user.name
git config --global user.name zhanghu       设置user.name
git config --global user.email 10078044533  设置user.email
git config --global --add user.name othername    添加一个user.name
git config --global --unset user.name othername  删除user.name中的叫othername
git config --global --replace-all user.email "输入你的邮箱"
git config --global --replace-all user.name "输入你的用户名"</pre>
          <h3> github把密码换成token</h3>
          <pre>
1)个人设置页面 -> Setting-> Developer setting ->Personal access tokens -> Generate new token -> New personal access token 页面输入Note标题，设置Expiration失效时间，Select scopes勾选repo(命令行访问仓库)、delete_repo(命令行删除仓库) ->Generate token
2)用自己生成的token登录，把上面生成的token粘贴到输入密码的位置，然后成功push代码
3)把token直接添加远程仓库链接中，
git remote set-url origin https://your_token@github.com/USERNAME/REPO.git
your_token：换成你自己得到的token   USERNAME：是你自己github的用户名   REPO：是你的仓库名称
git remote set-url origin https://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@github.com/raoqingjia/vue-page.git/</pre>
          <h3>GIt设置代理</h3>
          <pre>
GIt添加代理
git config --global http.proxy http://10.1.57.56:8080  //这个就可以用
git config --global https.proxy https://10.1.57.56:8080
git config --global http.proxy 'socks5://10.1.57.56:8080'
git config --global https.proxy 'socks5://10.1.57.56:8080'

GIt取消代理
git config --global --unset http.proxy
git config --global --unset https.proxy</pre>
          <h3>本地初始化Git项目仓库方法</h3>
          <pre>
1)使用git init
先在git上或github上创建一个库，之后根据提示按步骤操作，但是可能缺少一些操作步骤
在本地touch README.md产生一个内容为空的README.md文件，右击鼠标点出git命令框输入git命令
git init
git add README.md  这是只提交README.md 一个文件
git add .          提交所有的文件
git commit -m  'description'
git remote add origin  https://你提交的路径
git push -u origin master

2)使用git clone
git clone   https://你克隆的路径（记得加.git）
git clone是将git库上的文件全部克隆到本地文件中
例如git clone https://github.com/polaristech-io/ocp36-console.git
上面的git clone 默认克隆下拉的是master上的，如果想克隆其他分支则是
git clone -b 分支名称  master的远程仓库

更新提交代码流程
git pull   先更新本地代码，之后提交代码
git add .  添加更新文件
git commit -m 'description'    对本次版本更新进行描述
git push origin master   提交到git仓库</pre>
          <h3>Github的Full name和Username有什么区别</h3>
          <pre>
Full name就是昵称和账号名的区别，前者可以随便命名，后者必须唯一，不能与其他用户重名，并且有不能包含特殊字符的限制。
git config user.name的配置，决定了在每次git提交之后，用什么用户名标识这次提交操作由谁进行的。这个user.name对应的就是Git远程操作界面的username。</pre>
          <img src="../../img/gitUseName.png" height="250px" width="800px">
          <img src="../../img/gitFullName.png" height="70px" width="350px" style="padding: 15px 0">
          <h3>Git中ssh与https究竟有何不同</h3>
          <pre>
<span>① 区别</span>
1.clone项目:使用ssh方式时，首先你必须是该项目的管理者或拥有者，并且需要配置个人的ssh key。下面会谈到如何生成并设置你的ssh key。而对于使用https方式来讲，就没有这些要求。
2.push:在使用ssh方式时，是不需要验证用户名和密码，如果你在配置ssh key时设置了密码，则需要验证密码。而对于使用https方式来讲，每次push都需要验证用户名和密码。
<span>② 配置ssh key</span>
1）检查本机是否有ssh key设置
在电脑桌面上右键 git bash here
$ cd ~/.ssh 或cd .ssh
如果没有则提示： No such file or directory
如果有则进入~/.ssh路径下（ls查看当前路径文件，rm * 删除所有文件）
2）使用Git Bash生成新的ssh key
<p class="pre-cmd">$ ssh-keygen -t rsa -C "xxxxxx@yy.com"  #建议填写自己真实有效的邮箱地址
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/xxxx_000/.ssh/id_rsa):   #不填直接回车
Enter passphrase (empty for no passphrase):   #输入密码（可以为空）
Enter same passphrase again:   #再次确认密码（可以为空）
Your identification has been saved in /c/Users/Administrator/.ssh/id_rsa.   #生成的密钥
Your public key has been saved in /c/Users/Administrator/.ssh/id_rsa.pub.  #生成的公钥
The key fingerprint is:
e3:51:33:xx:xx:xx:xx:xxx:61:28:83:e2:81 xxxxxx@yy.com</p>
本机已完成ssh key设置，我电脑的存放路径为：C:\Users\Administrator\.ssh下。
注释：可生成ssh key自定义名称的密钥，默认id_rsa。
$ ssh-keygen -t rsa -C "邮箱地址" -f ~/.ssh/githug_blog_keys #生成ssh key的名称为githug_blog_keys，慎用容易出现其它异常
3）添加ssh key到GItHub
登录GitHub系统；点击右上角账号头像的“▼”→Settings→SSH kyes→Add SSH key。
复制id_rsa.pub的公钥内容。
进入c:/Users/Administrator/.ssh/目录下，打开id_rsa.pub文件，全选复制公钥内容。
Title自定义，将公钥粘贴到GitHub中Add an SSH key的key输入框，最后“Add Key”。
4）测试ssh keys是否设置成功
<p class="pre-cmd">$ ssh -T git@github.com
The authenticity of host 'github.com (192.30.252.129)' can't be established.
RSA key fingerprint is 16:27:xx:xx:xx:xx:xx:4d:eb:df:a6:48.
Are you sure you want to continue connecting (yes/no)? yes #确认你是否继续联系，输入yes
Warning: Permanently added 'github.com,192.30.252.129' (RSA) to the list of known hosts.
Enter passphrase for key '/c/Users/xxxx_000/.ssh/id_rsa':  #生成ssh kye是密码为空则无此项，若设置有密码则有此项且，输入生成ssh key时设置的密码即可。
Hi xxx! You've successfully authenticated, but GitHub does not provide shell access. #出现词句话，说明设置成功。</p>
5) 我的git地址是公司搭建的，要在C:\Users\Administrator\.ssh 增加一个config的文件
<p class="pre-cmd">Host http.gitlab.com
HostName http.gitlab.com
Port 41
IdentityFile C:\Users\Administrator\.ssh\id_rsa
User userName</p>
<span>webstrom中</span>
 webstrom 在git pull或者git push时报错，但是用命令提示符git push没报错
webstrom中报  Could not read from remote repository.
 setting -> git -> SSH executable不小心选成了built-in了 改成native就行
          </pre>
          <h3>git操作错误合集</h3>
          <pre>
1)在 git add  文件夹名称时报错
Git操作的过程中突然显示Another git process semms to be running in this repository, e.g. an editor opened by
‘git commit’. Please make sure all processes are terminated then try again. If it still fails, a git process remove
the file manually to continue…
翻译过来就是git被另外一个程序占用，重启机器也不能够解决。
原因在于Git在使用过程中遭遇了奔溃，部分被上锁资源没有被释放导致的。
解决方案：进入项目文件夹下的 .git文件中（需要显示隐藏文件夹）删除index.lock文件即可。

2)在git上edit编辑了master后，修改dev后merge到master失败，不能merge的问题
正常开发操作dev后将dev上的代码合并到mater上，dev的版本一直高于master，但是我在git上手动操作master后，master的版本就高于dev了，这样就不允许dev再合并到master上了，办法有两种，第一种是将master干掉，利用dev从新生成一份dev；但是太爆裂了，正常来说是不能操作master的；第二种办法是删除dev，利用master创建一个新的dev分支，本地代码重新pull一下，修改dev后从新提交到git上再merge到master上。

3)遇到这么一个问题：
You have not concluded your merge (MERGE_HEAD exists). Please, commit
your changes before you can merge.
问题的原因是， 以前的pull 之后merge 失败， git 进入conflict 状态。
解决办法：
1.备份你本地的修改
git merge --abort
git reset --merge
合并后记得一定要提交这个本地的合并
然后在获取线上仓库
git pull

4)git push时报10053
这种情况只是暂时跟服务器断了联系，重新提交即可
          </pre></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'git',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name,
        catalogue:[]
      }
    },
    created(){

    },
    mounted:function(){
      this.$nextTick(function(){
        this.createCatalogue();
      })
    },
    computed:{},
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
