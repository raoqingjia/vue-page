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
1）介绍
现在越来越多的网站开始考虑，将大量数据储存在客户端，这样可以减少从服务器获取数据，现有的浏览器数据储存方案，都不适合储存大量数据：Cookie 的大小不超过4KB，且每次请求都会发送回服务器；LocalStorage 在 2.5MB 到 10MB 之间（各家浏览器不同），而且不提供搜索功能，不能建立自定义的索引。所以，需要一种新的解决方案，这就是 IndexedDB 诞生的背景。
IndexedDB 允许储存大量数据，提供查找接口，还能建立索引。操作时不会锁死浏览器，用户依然可以进行其他操作，这与 LocalStorage 形成对比，后者的操作是同步的。异步设计是为了防止大量数据的读写，拖慢网页的表现
IndexedDB的存贮生命周期类似LocalStorage关闭浏览器不会删除数据，只有清缓存才会清楚数据
2）兼容性问题
FireFox 10+（完全支持）、Chrome 23+（完全支持）、Opera15+（15+用的就是Chrome内核了所以都一样了，完全支持）IE10+（部分支持） 结论：如不考虑IE，目前可放心使用
var indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;
if(indexedDB){
    alert("支持");
} else {
    alert("不支持");
}

3）indexedDB.open(databaseName, version)  创建数据库
使用 IndexedDB 的第一步是打开数据库，使用indexedDB.open()方法。
var request = window.indexedDB.open(databaseName, version);
第一个参数是字符串，表示数据库的名字。如果指定的数据库不存在，就会新建数据库。第二个参数是整数，表示数据库的版本。如果省略，打开已有数据库时，默认为当前版本；新建数据库时，默认为1。
indexedDB.open()方法返回一个 IDBRequest 对象。这个对象通过三种事件error、success、upgradeneeded，处理打开数据库的操作结果。
打开数据库是异步操作，通过各种事件通知客户端。下面是有可能触发的4种事件。
success：打开成功。
error：打开失败。
upgradeneeded：第一次打开该数据库，或者数据库版本发生变化。
blocked：上一次的数据库连接还未关闭。
第一次打开数据库时，会先触发upgradeneeded事件，然后触发success事件。
根据不同的需要，对上面4种事件监听函数。

var openRequest = indexedDB.open('test', 1);
var db;
openRequest.onupgradeneeded = function (e) {
  console.log('Upgrading...');
}
openRequest.onsuccess = function (e) {
  console.log('Success!');
  db = openRequest.result;  // 拿到已经打开的IndexedDB数据库对象。
}
openRequest.onerror = function (e) {
  console.log('Error');
  console.log(e);
}
从openRequest.result属性可以拿到已经打开的IndexedDB数据库对象。

4）indexedDB.deleteDatabase() 删除数据库
indexedDB.deleteDatabase()方法用于删除一个数据库，参数为数据库的名字。它会立刻返回一个IDBOpenDBRequest对象，然后对数据库执行异步删除。删除操作的结果会通过事件通知，IDBOpenDBRequest对象可以监听以下事件。
success：删除成功
error：删除报错
var DBDeleteRequest = window.indexedDB.deleteDatabase('demo');
DBDeleteRequest.onerror = function (event) {
  console.log('Error');
};
DBDeleteRequest.onsuccess = function (event) {
  console.log('success');
};
调用deleteDatabase()方法以后，当前数据库的其他已经打开的连接都会接收到versionchange事件。注意，删除不存在的数据库并不会报错。

5)
    var openRequest = indexedDB.open('mydb', 1);
    var db;

    openRequest.onupgradeneeded = function (e) {
        console.log('Upgrading...');
        db = e.target.result;
        var objectStore = null;
        if (!db.objectStoreNames.contains('imgLists')) {
            objectStore = db.createObjectStore('imgLists', { keyPath: 'id' });
            // unique name可能会重复
            objectStore.createIndex('name', 'name', { unique: false });
            objectStore.createIndex("email", "email", { unique: true });
        }

    }

    openRequest.onsuccess = function (e) {
        console.log('onsuccess...');
    }

    openRequest.onerror = function (e) {
        console.log('Error');
        console.log(e);
    }

6)向数据库添加数据之前，必须先创建数据库事务。
var transaction  = db.transaction(['items'], 'readwrite');
var objectStore = transaction.objectStore('items');
var request = objectStore.add({ id: 1, name: '图片1', path: '/static/image', blob:  blob});
request.onsuccess = function (event) {
  console.log('数据写入成功');
};
request.onerror = function (event) {
  console.log('数据写入失败');
}
transaction()方法接受两个参数：第一个参数是一个数组，里面是所涉及的对象仓库，通常是只有一个；第二个参数是一个表示操作类型的字符串。目前，操作类型只有两种：readonly（只读）和readwrite（读写）。添加数据使用readwrite，读取数据使用readonly。第二个参数是可选的，省略时默认为readonly模式。
新建事务以后，通过IDBTransaction.objectStore(name)方法，拿到 IDBObjectStore 对象，再通过表格对象的add()方法，向表格写入一条记录。







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
