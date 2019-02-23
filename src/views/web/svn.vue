<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>1、先介绍下svn</h3>
          <pre>
<span>① svn的作用</span>
svn是版本管理工具，譬如团队进行项目开发，项目代码都储存在服务器上，成员可用svn在本地获得并更新代码
<span>② svn和git的区别</span>
1）SVN ：集中式的版本控制工具 ；Git ：分布式的版本控制工具
集中式开发：是将项目集中存放在中央服务器中，在工作的时候，大家只在自己电脑上操作，从同一个地方下载最新版本，然后开始工作，做完的工作再提交给中央服务器保存
分布式开发：提供一台电脑作为版本集中存的服务器，但这个服务器的作用仅是用来方便“交换”大家的修改，没有它也一样干活，只是交换修改不方便而已。每个开发人员各自一台电脑有各自独立的开发环境，不需要联网，本地直接运行，相对集中式安全系数高很多。
2）Git并没有像 SVN一样在每一次提交的时候都将更新的详细信息都分析并提交，Gitt是要push的，SVN一个commit就提交了
3）SVN 断开网络或者断开VPN就无法commit代码，但是Git 可以先commit到本地仓库，等有网络了你在push呀。
4）GIT把内容按元数据方式存储，而SVN是按文件；所以Git适用于代码管理，SVN更适用于项目管理。
例如：一个研发队伍的文档包含了设计代码、程序代码等，这些都需要按项目集中进行管理的。SVN能清楚的按目录进行分类管理， 使项目组的管理处于有序高效的状态。</pre>
   <h3>2、svn各版本介绍</h3>
   <pre>
<span>① Windows系统不同SVN版本对比</span>
windows共有5个下载版本，分别是：CollabNet，SlikSVN，VisualSVN Server，WANdisco，Win32Svn
1）CollabNet是功能最强大的，因为svn的创始者就是CollabNet，不过这个版本因为功能最多，所以整个软件包也是最臃肿的，安装包就有100多M,而且因为是运行在java平台上的，要占用很大的内存资源。
2）SlikSVN和Win32Svn这两个基本是一样的，都只有svn的内核，没有界面，也就是使用的时候只能用命令行操作。这两者稍微有些区别，比如Win32Svn提供了和apache的库文件，而SlikSVN没有。
3）VisualSVN Server是最傻瓜化的svn，安装和配置都是有图形界面，操作起来很方便。
4）WANdisco还没用过，暂时不清楚。
5）最原始的svn（SlikSVN和Win32Svn就是），不存在客户端和服务端之分，本身svn既是服务端又是客户端。相当于在本地计算机上进行版本控制。CollabNet和VisualSVN Server已经提供远程https协议访问和提交更新的功能。对于原始的svn，可以通过和apache结合，来实现这个功能。
6）这里特别指出的是Win32Svn，这个相当于以前在官网上http://subversion.tigris.org/下载到的svn（现在 http://subversion.tigris.org/已经不提供svn的下载，具体原因未知），因为是svn的核心部分，所以安装文件比较小，只有6.7M，里面已经包含了操作手册。
<span>② VisualSVN-Server、Subversion、TortoiseSVN 之间的区别及联系</span>
1）先简单说VisualSVN-Server和Subversion都是服务器，TortoiseSVN 是客户端
2）其中VisualSVN-Server 和 Subversion 这两个软件都是版本控制中服务器端要使用的软件，简单的理解就是所提交的代码，就会存放到安装这两个软件的电脑上，这两个软件就会自动记录所提交的一些代码另外还会保存你的历史版本以防万一你要查找以前的代码；
3）其中这两个软件的功能类似，但是VisualSVN-Server  这个软件将很多配置，如添加服务等直接帮助完成了，比较好用，易上手，而Subversion 需要跟人配置一些东西，个人觉得使用第一个软件就完全可以满足要求了
4）TortoiseSVN它就是客户端需要的软件了，这个软件就可以很方便的向服务器端提交最新修改的代码。还可以很方便的从服务器端更新最新版本的代码。另外还可以很方便的查看以前提交的代码。
5）这三款软件都是在软件项目管理中必须的软件，VisualSVN-Server、Subversion两款软件功能类似，只是配置方法不同，而TortoiseSVN软件就是与前两款软件中任意一款搭配使用的。
<span>③ 如何安装svn</span>
http://www.runoob.com/svn/svn-install.html 菜鸟教程安装的是Win32Svn，记录的比较全面
我安装的是VisualSVN Server，还是傻瓜操作简单些，https://blog.csdn.net/kl28978113/article/details/51514387这是从网上找的一个教程地址
https://www.visualsvn.com/visualsvn/download/tortoisesvn/ TortoiseSVN 下载地址 是个小乌龟的标识
<span>④ 安装后cmd中提示'svn' 不是内部或外部命令,也不是可运行的程序</span>
1）重启电脑
2）注意windows安装svn的时候默认是不安装 svn comand line这个东西的，你重装下svn客户端，注意在选择安装项目那里点上 svn comand line 就好,
3）本地环境变量是否配置了svn   </pre>
        <h3>3、SVN基本的使用</h3>
        <pre>
<span>① SVN项目目录 </span>
目录约定：
/trunck：开发主线
/branches：支线副本
/tags：标签副本（一旦创建，不允许修改）
.svn这个隐藏目录记录着两项关键信息：工作文件的基准版本和一个本地副本最后更新的时间戳，千万不要手动修改或者删除这个.svn隐藏目录和里面的文件!!,否则将会导致你本地的工作拷贝(静态试图)被破坏，无法再进行操作。
TortoiseSVN图标介绍
  1)绿色对勾    一个新检出的工作复本使用绿色的对勾重载，表示Subversion状态正常。
  2)红色感叹号  在你开始编辑一个文件之后，状态就变成了已修改，而图标重载已变成了红色感叹号。通过这种方式，你可以很容易地看出那些文件从你上次更新工作复本被修改过，且需要提交。
  3)黄色感叹号  如果在提交的过程中出现了冲突，图标就会变成了黄色感叹号
  4)蓝色加号    加号告诉你有一个文件或者目录已经被计划加入到版本控制中
推荐文档 https://blog.csdn.net/yuqingzhude/article/details/50773368
<span>② TortoiseSVN Client基础操作</span>
checkout ： 下载代码，只需要做一次 注意下载的路径，可能一个路径中有好几个文件夹，每个文件夹分别代表不同的项目
update ： 更新服务器的最新代码，至少上班前更新一次，而且show log会展示最近svn中更新的文件信息，及更新人
commit ： 提交代码到服务器， 至少下班前提交一次可运行版本
上面三个命令是重点，基本上明白了上面三个命令就能操作svn了
1）增加(Add)
在test项目文件下，新建一个b.txt文件，提交到版本库的方法如下2种：
1.先提到变更列表中，再commit到配置库中，选择新增文件，右键SVN菜单执行“Add“操作提交到”变更列表中”，然后右键SVN菜单执行”SVN Commit”提交到版本库中。
2.不提交到变更列表中，而是直接commit配置库中，选择该文件，右键svn菜单执行”SVN Commit”操作。
在windows下面的TortoiseSVN你可以直接commit的，不需要先add，但是在linux下面就需要先add，然后再commitadd只是在.svn里面做了一个标记，并没有真正上传到SVN服务器；commit之后就会真正加入到版本库中了。add作用是操作提交到”变更列表中”
2）删除(Delete)
1.如果被删除的文件还未入版本库，则可以直接使用操作系统的删除操作删除该文件。
2.如果被删除的文件已入版本库，则选择被删除文件，右键svn菜单执行”delete”操作，然后选择被删除文件的父目录，右键svn菜单执行”SVN Commit”.
3）改名(Rename)
修改文件名，选中需要重命名的文件或文件夹，然后右键“TortoiseSVNà->Rename“，在弹出的对话框中输入新名称，点击”ok”按钮，并将修改文件名后的文件或文件夹通过 “SVN Commit”提交到SVN服务器上。
4）SVN还原(SVN Revert)
右击想要回退的文件或者文件夹，在TortoiseSVN弹出菜单中选择”Update to reversion…” 然后会弹出一个窗口，比如说我们要回退到第10个版本只需要在Revision中填写相应的版本号，然后点击ok即可
5）检查更新(Check for modifications)
此功能可以显示你对文件的操作变化，包括增加文件或者目录，删除文件或者目录，移动文件或者目录等，如果你点击了检查版本库，那你还可以看到版本库里的改动，既别人提交了哪些文件的改动，你还没更新到本地
6）SVN更新(SVN Update)
更新本地代码与SVN服务器上最新的版本一致，只要在需要更新的文件夹上点击右键或者在文件下空白处点击右键，选择”SVN Update” (获取指定版本中的内容，点击右键执行SVN菜单中的“Update to reversion“)，就可以了
7）SVN文件冲突
选中冲突的文件，右键选择TortoiseSVN->Edit conflicts：
theirs表示当前服务器端最新的代码，Mine表示自己修改后的代码，Merged表示合并后的代码。点击红色后右键选择：use this text block就可以将该部分代码作为合并后的代码，红色部分是svn无法帮你merge的，需要自行merge，而亮黄色部分是可以通过svn帮你merge的
接下来再说说由于冲突导致重要代码被覆盖的情况。冲突发生时如果采取的措施不对可能会导致部分代码丢失，如果想要还原之前的代码也很容易，选择文件->右键选择show log在这里面你可以看见之前提交的所有版本，找到你想要恢复的版本右键选择revert to this version 就可以恢复了.
8）SVN提交(SVN Commit)
Svn的提交是将在工作空间做的修改进行提交，包括文件内容的修改，文件或目录的添加，删除，命名，移动等操作。
9）显示日志(Show log)
通过此功能可以查到谁，什么时候，对那个目录下的那些文件进行了那些操作
10）版本库浏览(Repo-browser)
此功能是用来浏览需要查看的资料库，在本地文件夹下点击右键，选择TortoiseSVNàRepo-browser,在弹出的对话框中输入资料库地址，再输入用户名和密码，就能查看到你需要查看到版本库的内容，在这你还能看到那些文件被谁锁定了
<span>② 命令行操作</span>
svn --version 查看版本信息
svn --version --quiet    只显示版本号
svn checkout http://192.168....  --username=你的名字 --password=123 下载代码  下载代码
svn add newFile.text    添加文件到本地版本库
svn commit -m "newFile.text"  提交文件到远程服务器
svn update    同步代码，可以将服务器最新的代码同步过来
svn status    查看状态，下面是状态信息
? : 文件在SVN的目录下, 但是没有被本地的版本库管理 ---> 需要add
A : 文件在SVN的目录下, 已经被本地的版本库管理 ---> 需要commit
M : 文件在SVN的目录下, 已经被本地的版本库管理, 文件已经被修改 --> 需要commit
D : 本地的版本库已经删除了文件, 但是没有提交给服务器 ---> 需要commit
U : 文件被更新了(之前本地已经有了这个文件)
C : 文件发生了冲突
svn log    查看之前提交的日志信息
svn delete Car.h  删除文件(如果是直接右键垃圾桶, update就回来了)
svn help 查看所有的命令</pre></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'svn',
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
