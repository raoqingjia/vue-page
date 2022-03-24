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
spring:
  data:
    mongodb:
      database: app
      uri: mongodb://abs:1qaz!QAZ@paasdemo-mongodb-bboss-1-primary.bboss-middleware-lt.svc.cluster.local:27017/app
mongodb使用了集群只用用uri来实现集群配置
username和password中含有“:”或“@”需要进行URLEncoder编码
          </pre>
          <h3>Repository和Template的选择</h3>
          <pre>
SpringData为我们提供了两种方式对数据库进行操作，第一种是继承Repository接口，第二种是直接使用Template的方式对数据进行操作。
第一种方式，直接继承xxxRepository接口，其最终将会继承Repository标记接口，我们可以不必自己写实现类，轻松实现增删改查、分页、排序操作，但是对于比较复杂的查询，使用起来就比较费力。
第二种方式，直接使用xxxTemplate，这需要自己写实现类，但是这样增删改查可以自己控制，对于复杂查询，用起来得心应手</pre>
          <h3>继承MongoRepository接口</h3>
          <pre>
编写实体类User
@Document(collection="user") //通过collection参数指定当前实体类对应的文档
public class User {
	@Id //用来标识主键
	private String id;
	private String username;
	@Field("pwd") //给字段起别名
	private String password;
    //@Indexed 用于声明字段需要索引
}
编写Dao接口，继承MongoRepository
// 定义Dao接口继承MongoRepository< 实体类型,主键类型>
public interface UserDao extends MongoRepository< User , String> {}

在test文件夹下创建测试类
@RunWith(SpringRunner.class)
@SpringBootTest
public class UserDaoTest {
	@Autowired
	private UserDao userDao;
	@Test //保存
	public void testsave() {
		User user = new User("1","张三","123");
		userDao.save(user);
	}
	@Test //更新
	public void testUpdate() {
    User user = new User("1","张三","12345");
		userDao.save(user);
	}
	@Test //删除
	public void testDelete() {
		userDao.deleteById("1");
	}
}

保存和更新使用同一套接口
save（entity）方法
User user = new User("1","张三","123");  // 更新保证id相同
userDao.save(user);
saveAll（iterable）方法
< S extends T> List< S> saveAll(Iterable< S> entities);
saveAll需要传入实现Iterable接口的对象
List< User> users = new ArrayList< User>() {
	{
		add(new User("n1", "李四", "12345"));
		add(new User("n2", "王五", "12345"));
	}
};
userDao.saveAll(users);

删除操作
deleteById（id）方法
userDao.deleteById("9");
delete（entity）方法
传入一个实体，将会根据id删除数据库中的文档。
User user = new User("8", "", "");
userDao.delete(user);
deleteAll（）方法
删除所有数据
deleteAll（iterable）方法
传入user集合，根据传入的id删除指定数据

查询操作：父接口方法查询
使用父接口中已经声明好的方法进行查询
主键查询
findById（id）
根据id查询
Optional< User> opt = userDao.findById("1");
System.out.println(opt.get());

findAllById（iterable）
传入一个可遍历的集合
List< String> list = new ArrayList< String>() {
    {
    	add("2");
    	add("3");
    }
};
userDao.findAllById(list).forEach(user -> {
	System.out.println(user);
});

查询所有
findAll（）
List< User> users = userDao.findAll();
findAll（sort）
查询所有，并排序

// 按照id倒序排列
Sort sort = Sort.by(Order.desc("id"));
List< User> users = userDao.findAll(sort);
findAll（pageable）

Pageable pageable = PageRequest.of(0, 3);
Page< User> page = userDao.findAll(pageable);
List< User> users = page.getContent();

排序分页组合查询
// 设置排序条件
Sort sort = Sort.by(Sort.Order.desc("id"));
// 设置分页条件 (第几页，每页大小，排序)
Pageable pageable = PageRequest.of(0, 3, sort);
Page< User> page = userDao.findAll(pageable);
for (User user : page.getContent()) {
	System.out.println(user);
}

查询操作：方法命名规则查询
在UserDao中使用方法命名规则自定义方法，即可进行查询操作。
根据用户名查询
List< User> findByUsername(String username);
根据用户名进行模糊查询
List< User> findByUsernameLike(String username);
根据用户名和密码查询
List< User> findByUsernameAndPassword(String username, String password);</pre>
          <h3>使用MongoTemplate</h3>
          <pre>
我们可以在类中加入MongoTemplate，并使用Spring提供的@Autowired注解进行注入。
@Autowired
private MongoTemplate mongoTemplate;

新增操作
mongoTemplate.insert（objectToSave）
mongoTemplate.save（objectToSave）
User user = new User(null, "赵六", "123456");
mongoTemplate.insert(user);
mongoTemplate.save(user);
insert和save方法均能用于新增操作，其区别在于，在使用insert时，如果主键存在，那么就会报异常，而对于save方法，如果主键存在，就会更新已经存在的数据。

更新操作
mongoTemplate.updateFirst（query, update, entityClass）
Query query = Query.query(Criteria.where("id").is("5").and("username").is("张三丰"));
Update update = Update.update("username", "张三丰丰");
mongoTemplate.updateFirst(query, update, User.class);

删除操作
mongoTemplate.remove（query, entityClass）
Query query = Query.query(Criteria.where("id").is("6"));  //  Criteria.where("id").in(ids)  in删多个
mongoTemplate.remove(query, User.class);

查询操作
mongoTemplate.findAll（entityClass）
查找所有数据，默认情况下查找entityClass类所指定文档的全部数据。
List< User> users = this.mongoTemplate.findAll(User.class);
mongoTemplate.findById（id, entityClass）
传入id，查询id所对应的数据。
User user = mongoTemplate.findById("1", User.class);
mongoTemplate.find（query, entityClass）
Criteria criteria = Criteria.where("username").is("李四");
Query query = new Query(criteria);
//查询条件  指定返回数据类型
List< User> users = mongoTemplate.find(query, User.class);


Query和Criteria
上面的方法操作中，常设计到Query和Criteria两个类，Criteria用于构造查询条件并作为参数传递给Query。
下面对Criteria进行构建
Criteria criteria = new Criteria(); //直接构建
Criteria criteria = Criteria.where("username").is("张三"); //使用静态方法构建
其中Criteria使用静态方法构建，其实现代码如下：
public static Criteria where(String key) {
	return new Criteria(key);
}
下面对Query进行构建
Query query = new Query();
Query query = new Query(criteria);
Query query = Query.query(criteria);
query.addCriteria(Criteria.where("id").in(ids));
使用Criteria构建查询条件
criteria.and("username").is("7")
当然，如果是Criteria类，也可以直接调用静态方法where（）
Criteria.where("username").is("7")

使用Query类
构造排序
Query query = new Query().with(Sort.by(Sort.Order.desc("id")));
构造分页，其中limit指查询出每页的数量，skip指跳过前几条数据。
Query query = new Query().limit(3).skip(3);</pre>
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
