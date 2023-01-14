<template>
  <div class="plugin inner">
    <div class="content">
      <div class="warp">
        <ul>
          <li class="clearfix" v-for="items in  list_ary() ">
            <h3>
              <a href="javascript:;" v-html="items.name" @click="urlFun(items)"></a>
              <span>
                <em>{{items.category}}</em>
                Created<time v-html="items.created"></time>
              </span>
            </h3>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import {routes} from '@/router'
  import frameworkRouter from '../router/framework'
  import {mapGetters} from 'vuex'
  import pagination from '@/views/component/pagination'

  export default {
    name: 'framework',
    created() {
    },
    components: {
      'pagination': pagination
    },
    data() {
      return {
        routes: routes,
      }
    },
    mounted() {
    },
    methods: {
      list_ary() {
        return frameworkRouter.reverse();
      },
      urlFun(items) {
        this.$router.push({path: items.path, query: {name: items.name, created: items.created}});
      }
    },
    computed: {
      ...mapGetters([    //右侧导航栏的内容类型
        'listTab',
      ]),
      caseNav() {
        return this.$store.state.caseNav
      },
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .warp {
    width: 100%;
    box-sizing: border-box;
    ul {
      padding: 5px 30px 15px 30px;
      background: #FFFFFF;
      li {
        border-bottom: 1px solid #e6e6e6;
        padding: 10px 0;
      }
      a {
        float: left;
        font-size: 16px;
        color: #000;
        max-width: 450px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      span {
        margin-top: 6px;
        font-size: 14px;
        float: right;
        vertical-align: middle;
      }
      time {
        margin-left: 5px;
      }
      em{
        display: inline-block;
        padding: 2px 8px;
        border-radius: 20px;
        border: 1px solid #cccccc;
        font-style: normal;
        margin:0 20px;
      }
    }
  }

</style>
