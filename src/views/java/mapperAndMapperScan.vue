<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>@Mapper
作用：在接口类上添加了@Mapper，会自动的把 @Mapper 注解的接口生成动态代理类，问题是在每个需要实现类的接口上都添加@Mapper注解，相对比较繁琐

@MapperScan
作用：配置一个或多个包路径，自动的扫描这些包路径下的类，自动的为它们生成代理类。
添加位置：是在Springboot启动类上面添加，或者是在config配置上
比如@MapperScan("com.xxx.x x")，有了这个注解，可不用一个一个添加@Mapper注解
在数据源config上添加通过sqlSessionFactoryRef指定数据源
@MapperScan(basePackages = "com.example.springdemo.dao.omss",sqlSessionFactoryRef = "SqlSessionFactoryMysqlOmss")
Spring boot启动类的@Mapperscan和各数据源的@Mapperscan只能生效一种,config配置上写了，启动类上就不要写了

@MapperScan有很多属性，最常用的是：
annotationClass : 这个是基于包下面扫描所有的接口类并注册，也有指定的属性。
markInterface : 基于包下面扫描所有接口类并注册，也可以指定特殊的接口为父类。
sqlSessionTemplateRef: 在指定使用sqlSessionTemplateRef的情况下，这里有一个或多个的Spring的容器。经常我们会使用一个或多个的数据库.
sqlSessionFactoryRef : 在指定使用sqlSessionFactoryRef的情况下，这里有一个或多个的Spring的容器。经常我们会使用一个或多个的数据库.
nameGenerator : 在Spring的容器中，将使用BeanNameGenerator去命名检测到的组件。
basePackageClasses : 这是一个安全替代basePackages()作为指定组件的扫描包。包下面的所有接口都将会被扫描。
basepackages : 基于包下面的扫描MyBatis的接口。注意是，只有是接口的将会被扫描注册，如果是具体的类将会被忽略

举例配置多数据源
直接上config配置代码，其他yml配置忽略了
由于Spring boot的自动装载不适用于多数据源，所以应该为每一个数据源各创建一个手动配置的配置文件。
注意：'默认数据源配（理解主数据源或者是随便一个就）'置文件里的每个方法都需要加@Primary注解，表示此数据源为默认数据源，不加的话Spring boot找不到默认的数据源

DataSourceConfig1 数据源
@Configuration
//数据源mapper接口所在包
@MapperScan(basePackages = "com.test.demo.dao.test1", sqlSessionFactoryRef = "db1SqlSessionFactory")
public class DataSourceConfig1 {
    @Primary
    @Bean("db1DataSource")
    @ConfigurationProperties(prefix = "spring.datasource.test1")
    public DataSource getDb1DataSource(){
        return DataSourceBuilder.create().build();
    }
    @Primary
    @Bean("db1SqlSessionFactory")
    public SqlSessionFactory db1SqlSessionFactory(@Qualifier("db1DataSource") DataSource dataSource) throws Exception {
        SqlSessionFactoryBean bean = new SqlSessionFactoryBean();
        bean.setDataSource(dataSource);
        //数据源的mapper.xml所在位置(具体到xml文件)
        bean.setMapperLocations(new PathMatchingResourcePatternResolver().getResources("classpath*:**/com/test/**/dao/test1/mapping/*Mapper.xml"));
        return bean.getObject();
    }
    @Primary
    @Bean("db1SqlSessionTemplate")
    public SqlSessionTemplate db1SqlSessionTemplate(@Qualifier("db1SqlSessionFactory") SqlSessionFactory sqlSessionFactory){
        return new SqlSessionTemplate(sqlSessionFactory);
    }
}

DataSourceConfig2 数据源
@Configuration
@MapperScan(basePackages = "com.test.demo.dao.test2", sqlSessionFactoryRef = "db2SqlSessionFactory")
public class DataSourceConfig2 {
    @Bean("db2DataSource")
    @ConfigurationProperties(prefix = "spring.datasource.test2")
    public DataSource getDb1DataSource(){
        return DataSourceBuilder.create().build();
    }
    @Bean("db2SqlSessionFactory")
    public SqlSessionFactory db1SqlSessionFactory(@Qualifier("db2DataSource") DataSource dataSource) throws Exception {
        SqlSessionFactoryBean bean = new SqlSessionFactoryBean();
        bean.setDataSource(dataSource);
        bean.setMapperLocations(new PathMatchingResourcePatternResolver().getResources("classpath*:**/com/test/**/dao/test2/mapping/*Mapper.xml"));
        return bean.getObject();
    }
    @Bean("db2SqlSessionTemplate")
    public SqlSessionTemplate db1SqlSessionTemplate(@Qualifier("db2SqlSessionFactory") SqlSessionFactory sqlSessionFactory){
        return new SqlSessionTemplate(sqlSessionFactory);
    }
}    </pre>
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
                title: this.$route.query.name
            }
        },
        mounted() {
            this.$nextTick(function () {
            })
        },
        methods: {
            toggle() {

            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
