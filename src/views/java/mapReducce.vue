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
场景：比如有海量的文本文件，如订单，页面点击事件的记录，量特别大，单机版很难搞定。
怎样解决海量数据的计算？
求和： 1 + 5 +7 + 3 +4 +9 +3 + 5 +6</pre>
          <img src="../../img/java/mapReduce01.png" height="260px" width="600px">
          <pre>
MapReduce产生背景
如果让你统计日志里面的出现的某个URL的总次数，让你自己去写个单机版的程序，写个逻辑：无非就是读这个文件一行,然后把那个地方截取出来，截取出来之后，然后可以把它放到一个HashMap里面，用Map去重，看到一条新的URL ,就把它put进去，然后+1，如果下次看到再有就直接+1,没有就put进去，单机版的话逻辑是很好实现，但是数据量一大，你觉得单机版本还能搞定吗？
首先2T的文件，你放在单机上可能存不下来，如果再他多一点呢？比如几千个文件，几十个T，单机存都存不下，那么存在哪里hdfs上,一旦放到HDFS上就有一个问题：你的文件就会被切散了，被切散到很多的机器上，这个时候，你再对它们进行统计，这个时候，按照原来的逻辑，会不会出现问题。
这时还有几个问题
1、你的代码怎么实现分发到很多机器上去运行，这件事情谁帮你做
2、我的代码怎么分发，怎么配置启动环境，怎么启动起来，这个是不是得有一个庞大的系统去做
3、比如刚才那个日志数据，是放到HDFS上面去了，但是不代表HDFS上的每一台DN上面都有这一部分数据里面的内容，因为我们这个集群很大，你这个文件存进去的时候可能只占了其中的30台节点，其中某30台节点上有你这些文件，其他节点上个根本就没有你这些文件，刚才你的逻辑只是统计出中间结果，这个时候是不是还得汇总啊，汇总就是意味着，你要在那30台节点之间结果里面才能汇总
我们就发现，哪怕是一个很简单的东西，你也要把它变成一个分布式运行的程序，是不是面临很多很多其他的问题，跟我们逻辑无关的问题，往往这些问题要比解决那个逻辑要复杂得多，那么这些问题解决不是我们擅长的，我们大量的普通程序员还没达到那些程度，这么复杂的问题要写出来是不是很麻烦呢？你不能要求每个程序员都能达到那个功力把，我们不过就是写个简单的逻辑统计这个文本里面哪个URL出现的总次数，很简单的东西，所以呢，MapReduce才是我们这些普通程序员的福音。
总结
把我们很简单的运算逻辑很方便的扩展到海量数据的场景下分布式运算，所以MapReduce程序对我们程序员来说很简单，因为它把那些东西都给封装起来了，我们只写业务逻辑，业务逻辑大部分就是处理文本，处理字符串，我们学的大部分逻辑里面，大部分都是在处理这个问题：处理文本、处理字符串、查询数据库是不是得到一些东西啊，你只要把逻辑写出来就可以了，但是你写MapReduce的时候，必须要符合人家编程的规范。</pre>
          <img src="../../img/java/mapReduce02.png" height="200px" width="600px">
          <pre>
下面开始书写mapper  reduce driver
WCMapper.java
import java.io.IOException;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Mapper;
/**
 * Mapper< KEYIN, VALUEIN, KEYOUT, VALUEOUT>
 * 它的这个Mapper让你去定义四个泛型,为什么mapper里面需要四个泛型
 * 其实读文本文件的操作不用你来实现，框架已经帮你实现了,框架可以读这个文件
 * 然后每读一行,就会发给你这个map,让你去运行一次,所以它读一行是不是把数据传给你，
 * 那他传给map的时候,这个数据就意味着类型的一个协议,我以什么类型的数据给你,我是不是得事先定好啊
 * map接收的数据类型得和框架给他的数据类型一致,不然的话就会出现类型转换异常
 * 所以map里面得定数据类型，前面两个是map拿数据的类型,拿数据是以什么类型拿的，那么框架就是以这个类型传给你
 * 另外两个泛型是map的输出数据类型,即reduce也得有4个泛型,前面两个是reduce拿数据的泛型得和map输出的泛型类型一致
 * 剩下两个是reduce再输出的结果时的两个数据类型

 * 4个泛型,前两个是指定mapper端输入数据的类型,为什么呢,mapper和reducer都一样
 * 拿数据，输出数据都是以< key,value>的形式进行的--那么key,value都分别有一个数据类型
 * KEYIN：输入的key的类型
 * VALUEIN：输入的value的类型
 * KEYOUT：输出的key的数据类型
 * VALUEOUT：输出的value的数据累心
 * map reduce的数据输入输出都是以key,value对封装的
 * 至于输入的key,value形式我们是不能控制的,是框架传给我们的,
 * 框架传给我们是什么类型,我们这里就写什么数据类型
 *
 * 默认情况下框架传给我们的mapper的输入数据中,key是要处理的文本中一行的起始偏移量,
 * 因为我们的框架是读一行就调用一次我们的偏移量
 * 那么就把一行的起始偏移量作为key,这一行的内容作为value
 *
 * 那么输出端的数据类型是什么，由于我们输出的数< hello,1>
 * 那么它们的数据类型就显而易见了
 * 初步定义为：
 * Mapper< Long, String, String, int>
 * 但是不管是Long还是String,在MapReduce里面运行的时候,这个数据读到网络里面进行传递
 * 即各个节点之间会进行传递,那么要在网络里面传输,那么就意味着这个数据得序列化
 * Long、String对象，内存对象走网络都得序列化,Long、String,int序列化
 * 如果自己实现Serializable接口，那么附加的信息太多了
 * hadoop实现了自己的一套序列化机制
 * 所以就不要用Java里面的数据类型了，而是用它自己的封装一套数据类型
 * 这样就有助于提高效率,实现了自己的序列化接口
 * 在序列化传输的 时候走的就是自己的序列化方法来传递,少了很多负载信息,传递数据精简,
 * Long---LongWritable
 * String也有自己的封装-Text
 * int--IntWritable
 */
public class WCMapper extends Mapper< LongWritable, Text, Text, IntWritable> {
//	MapReduce框架每读一次数据，就会调用一次该方法
	@Override
	protected void map(LongWritable key, Text value, Context context)
			throws IOException, InterruptedException {
		//具体业务逻辑就写在这个方法体中,而且我们业务要处理的数据已经被框架传递进来,在方法参数中
		//key--这一行数据的其实偏移量   value--这一行数据的文本内容
		//1.先把单词拿出来,拿到一行
		String line = value.toString();
		//2.切分单词,这个是按照特定的分隔符 进行切分
		String [] words = line.split(" ");
		//3.把里面的单词发送出去
		/*
		 * 怎么发出去呢？我都不知道reduce在哪里运行
		 * 其实呢，这个不用我们关心
		 * 你只要把你的东西给那个工具就可以了
		 * 剩下的就给那个框架去做
		 * 那个工具在哪-----context
		 * 它把那个工具放到那个context里面去了，即输出的工具
		 * 所以你只要输出到context里面就行了
		 * 剩下的具体往哪里走，是context的事情
		 */
		//遍历单词数组,输出为< K,V>形式 key是单词,value是1
		for (String word : words) {
			//记得把key和value继续封装起来,即下面
			context.write(new Text(word), new IntWritable(1));
		}
		/*
		 * map方法的执行频率：每读一行就调一次
		 * 最后到reduce 的时候，应该是把某个单词里面所有的1都到，才能处理
		 * 而且中间有一个缓存的过程,因为每个map的处理速度都不会完全一致
		 * 等那个单词所有的1都到齐了才传给reduce
		 */
		//每一组key,value都全了，才会去调用一次reduce，reduce直接去处理valuelist
		//接着就是写Reduce逻辑了
	}
}

WCReducer.java

import java.io.IOException;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Reducer;
/*
 * 类型记得要对应
 */
public class WCReducer extends Reducer< Text, IntWritable, Text, Text> {
  // 重点理解下面的这三句话
	// map处理之后,value传过来的是一个value的集合
	// 框架在map处理完成之后,将所有的KV对保存起来,进行分组,然后传递一个组,调用一次reduce
	// 相同的key在一个组，个人理解reduce是相同的key为list去操作
	@Override
	protected void reduce(Text key, Iterable< IntWritable> values, Context context)
			throws IOException, InterruptedException {
		//遍历valuelist，进行了累加
		int count = 0;
		for (IntWritable value : values) {
			//get()方法就能拿到里面的值
			count += value.get();
		}
		//输出一组(一个单词)的统计结果
		//默认输出到HDFS的一个文件上面去,放在HDFS的某个目录下
		context.write(key, new Text(count+""));
		//但是还差一个描述类：用来描述整个逻辑
		/*
		 * Map，Reducce都是个分散的,那集群运行的时候不知道运行哪些MapReduce
		 * 处理业务逻辑的一个整体，叫做job
		 * 我们就可以把那个job告诉那个集群,我们此次运行的是哪个job,
		 * job里面用的哪个作为Mapper，哪个业务作为Reducer，我们得指定
		 * 所以还得写一个类用来描述处理业务逻辑
		 * 把一个特定的业务处理逻辑叫做一个job(作业),我们就可以把这个job告诉那个集群,
		 */
	}
}


WCRunner.java
import java.io.IOException;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
/**
 * 该作业使用哪个类作为逻辑处理的map
 * 哪个作为reduce
 * 还可以指定该作业要处理的数据所在的路径
 * 还可以指定该作业输出的结果放到哪个路径
 */
public class WCRunner {
	public static void main(String[] args) throws IOException, ClassNotFoundException, InterruptedException {
		//首先要描述一个作业,这些信息是挺多的,哪个是map,哪个是reduce,输入输出路径在哪
		//一般来说这么多信息,就可以把它封装在一个对象里面,那么这个对象呢就是 ----Job对象
		Job job = Job.getInstance(new Configuration());

		//job用哪个类作为Mapper 指定输入输出数据类型是什么
		job.setMapperClass(WCMapper.class);
		job.setMapOutputKeyClass(Text.class);
		job.setMapOutputValueClass(IntWritable.class);

		//job用哪个类作为Reducer 指定数据输入输出类型是什么
		job.setReducerClass(WCReducer.class);
		job.setOutputKeyClass(Text.class);
		job.setOutputValueClass(Text.class);

		//指定原始数据存放在哪里
		//参数1：里面是对哪个参数进行指定
		//参数2：文件在哪个路径下,这个路径下的所有文件都会去读的
		FileInputFormat.setInputPaths(job, new Path("input/data1"));

		//指定处理结果的数据存放路径
		FileOutputFormat.setOutputPath(job, new Path("output1"));

		//提交
		int isok =  job.waitForCompletion(true)?0:-1;
		System.exit(isok);
	}
} </pre>
          <img src="../../img/java/mapReduce03.png" height="260px" width="630px">
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
