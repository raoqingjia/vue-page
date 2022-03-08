<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <ul class="catalogue">
            <li v-for="(items,index) in catalogue"><a @click="jump(index)">{{items.name}}</a></li>
          </ul>
          <h3>MongoDB 简介</h3>
          <pre>
MongoDB 数据模型是面向文档的，所谓文档就是一种类似于 JSON 的结构，简单理解 MongoDB 这个数据库中存在的是各种各样的 JSON（BSON）
数据库 (database)
数据库是一个仓库，存储集合 (collection)
集合 (collection)
类似于数组，在集合中存放文档
文档 (document)
文档型数据库的最小单位，通常情况，我们存储和操作的内容都是文档

在 MongoDB 中，数据库和集合都不需要手动创建，当我们创建文档时，如果文档所在的集合或者数据库不存在，则会自动创建数据库或者集合
Show databases  显示当前所有的数据库
User 库名     进入指定数据库中
Db  表示当前所在的数据库
Show collections 显示数据库中所有的集合</pre>
          <h3>MongoDB 插入文档</h3>
          <pre>
所有存储在集合中的数据都是 BSON 格式。BSON 是一种类似 JSON 的二进制形式的存储格式，是 Binary JSON 的简称。
MongoDB 使用 insert() 或 save() 方法向集合中插入文档，语法如下：
db.COLLECTION_NAME.insert(document)  或db.COLLECTION_NAME.save(document)
例如：
db.col.insert({title: 'MongoDB 教程',
    description: 'MongoDB 是一个 Nosql 数据库',
    by: '菜鸟教程',
    url: 'http://www.runoob.com',
    tags: ['mongodb', 'database', 'NoSQL'],
    likes: 100
})
以上实例中 col 是我们的集合名，如果该集合不在该数据库中， MongoDB 会自动创建该集合并插入文档。

// 向集合中添加一个文档
db.collection.insertOne(
   { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
)
// 向集合中添加多个文档
db.collection.insertMany([
   { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
   { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
   { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
])
如果某条数据插入失败，将会终止插入，但已经插入成功的数据不会回滚掉。 因为批量插入由于数据较多容易出现失败，因此，可以使用 try catch 进行异常捕捉处理，测试的时候可以不处理
try {
   db.collection.insertMany([
   { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
   { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
   { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
   ])
} catch (e) {
  print (e);
}</pre>
          <h3>MongoDB 查询文档</h3>
          <pre>
db.col.find() 查询全量
db.col.find().pretty()  pretty() 方法以格式化的方式来显示所有文档。
db.col.find({key1:value1, key2:value2})   MongoDB 的 find() 方法可以传入多个键(key)，每个键(key)以逗号隔开，即常规 SQL 的 AND 条件
findOne() 方法，它只返回符合条件的第一个文档
db.col.find().count()  返回符合条件的查询数量</pre>
          <h3>MongoDB 更新文档</h3>
          <pre>
db.col.updateOne(filter , update, options)   filter 匹配条件，update更新内容, options配置信息  默认每次只更新一个
db.col.update(查询对象, 新对象)  默认情况下会使用新对象替换旧象。
如果需要修改指定的属性，而不是替换需要用“修改操作符”来进行修改，要利用修改操作符即为$set和$unset,二者分别表示赋值和取消赋值来进行操作
// 默认会修改第一条
db.document.update({ userid: "30"}, { $set: {username: "guest"} })
// 修改所有符合条件的数据  通过{multi: true}设置
db.document.update( { userid: "30"}, { $set: {username: "guest"} }, {multi: true} )</pre>
          <h3>MongoDB 删除文档</h3>
          <pre>remove()  也就是deleteMany()和deleteOne()的功能集合，默认是删除多个，通过配置可每次删除一个
使用 db.collection.deleteMany() 方法删除所有匹配的文档.
使用 db.collection.deleteOne() 方法删除单个匹配的文档.
db.collection.drop()  删除集合
db.dropDatabase()     删除数据库
db.col.remove({})   删除集合中所有数据</pre>
          <h3>MongoDB 之特殊关键字</h3>
          <pre>
1. limit: 选取
    db.table.find().limit(2)   # 从整张表中的第一条 Document 开始选取两条
2. skip: 跳过
    db.table.find().skip(2)    # 从整张表中的第一条 Document 开始计算, 往后跳两条.
3. limit + skip
	db.table.find().skip(1).limit(2)  # 只查看第2、3条数据
4. sort: 排序 升序 (1), 降序(-1)
    db.table.find.sort({"price": 1})
5. 执行优先级
	sort > skip > limit</pre>
          <h3>MongoDB 之$关键字</h3>
          <pre>
"$" 关键字
1. "$" 在 update 中加上关键字就是修改器
2. 单独出现的 "$" 字符为代指符
示例: {"_id": 123, "name": "jack", "score": 100 "num: [1,2,3,5,9,2]}
     修改 num 中的 2 为 9
     db.table.update({"score": 100, "num": 2}, {$set: {"num.$": 9}})
解释:
     "$" 字符代表了符合条件元素的下标, 位置
     使用 update, 满足条件的数据下标位置就会传递给 "$" 字符, 相当于对这个位置的元素进行更新操作
     首先会寻找示例 Array 中的第一个 2, 再次操作会找下一个 2

高级查询
1. 并列查询
	db.table.find({"Field1": 1, "Field2": 2})
2. 或查询
1) $or: 在不同字段或不同条件查询时使用
    db.table.find({$or: [{"field1": 1}, {"field2": 2}]})
2) $in: 在相同字段或条件查询时使用
    db.table.find({"age": {$in: [18, 20, 22]}})

比较运算型
1. $gt(大于) / $gte(大于等于)
	db.table.find({"score": {$gt: 80}})
2. $lt(小于) / $lte(小于等于)
	db.table.find({"score": {$lt: 80}})
3. $eq(等于) / $ne(不等于)

update修改器
1. $inc: 引用增加
    db.table.updateMany({}, {$inc:{"score": 1}})   # 在原基础上给所有score +1
2. $set: 修改数据 (key不存在就添加)
    db.table.update({"score": 65}, {$set: {"score": 80}})
3. $unset: 强制删除Field
    db.table.update({}, {$unset:{"age": 15}})    # 删除所有 age 字段
4. Array操作
  $push: 增加操作 (前提: 增加的字段 key: value 中 value 类型为 Array)
    db.table.updateOne({"age":18}, {$push: {"num": 1}})
    db.table.updateOne({"age":18}, {$pushAll: {"num": 2, 3, 4}})</pre>
          <h3>Spring boot 引入 MongoDB</h3>
          <pre>
< dependency>
   < groupId>org.springframework.boot< /groupId>
   < artifactId>spring-boot-starter-data-mongodb< /artifactId>
   < version>2.1.7.RELEASE< /version>
< /dependency>
如果mongodb端口是默认端口，并且没有设置密码，可不配置，sprinboot会开启默认的。
spring.data.mongodb.uri=mongodb://localhost:27017/mydb
如何mongodb设置了密码，这样配置：
spring.data.mongodb.uri=mongodb://zzq:123456@localhost:27017/mydb
如果多个节点集群配置
spring.data.mongodb.uri=mongodb://user:pwd@ip1:port1,ip2:port2/database
          </pre>
          <h3></h3>
          <pre>

          </pre>
          <h3></h3>
          <pre>

          </pre>
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
