<template>
  <nav>
    <ul class="pagination clearfix">
      <li :class="{'disabled': current == 1}">
        <a href="javascript:;" @click="setCurrent(current - 1)"> « </a>
      </li>
      <li :class="{'disabled': current == 1}">
        <a href="javascript:;" @click="setCurrent(1)"> 首页 </a>
      </li>
      <li v-for="p in grouplist" :class="{'active': current == p.val}">
        <a href="javascript:;" @click="setCurrent(p.val)"> {{ p.text }} </a>
      </li>
      <li :class="{'disabled': current == page}">
        <a href="javascript:;" @click="setCurrent(page)"> 尾页 </a>
      </li>
      <li :class="{'disabled': current == page}">
        <a href="javascript:;" @click="setCurrent(current + 1)"> »</a>
      </li>
    </ul>
  </nav>
</template>
<!--https://www.cnblogs.com/yuqing6/p/7061647.html  插件的出处-->
<script>

  import Vue from 'vue'
  export default {
    name: 'pagination',
    data(){
      return {
        current: this.currentPage
      }
    },
    props: {
      total: {// 数据总条数
        type: Number,
        default: 0
      },
      display: {// 每页显示条数
        type: Number,
        default: 15
      },
      currentPage: {// 当前页码
        type: Number,
        default: 1
      },
      pagegroup: {// 分页条数
        type: Number,
        default: 5,
        coerce: function (v) {
          v = v > 0 ? v : 5;
          return v % 2 === 1 ? v : v + 1;
        }
      }
    },
    computed: {
      page: function () { // 总页数
        return Math.ceil(this.total / this.display);
      },
      grouplist: function () { // 获取分页页码
        var len = this.page, temp = [], list = [], count = Math.floor(this.pagegroup / 2), center = this.current;
        if (len <= this.pagegroup) {
          while (len--) {
            temp.push({text: this.page - len, val: this.page - len});
          }
          return temp;
        }
        while (len--) {
          temp.push(this.page - len);
        }
        var idx = temp.indexOf(center);
        (idx < count) && ( center = center + count - idx);
        (this.current > this.page - count) && ( center = this.page - count);
        temp = temp.splice(center - count - 1, this.pagegroup);
        do {
          var t = temp.shift();
          list.push({
            text: t,
            val: t
          });
        } while (temp.length);
        if (this.page > this.pagegroup) {
          (this.current > count + 1) && list.unshift({text: '...', val: list[0].val - 1});
          (this.current < this.page - count) && list.push({text: '...', val: list[list.length - 1].val + 1});
        }
        return list;
      }
    },
    created () {

    },
    mounted() {
      var _this=this;
      this.$nextTick(function () {
      })
    },
    methods:{
      setCurrent: function (idx) {
        if (this.current != idx && idx > 0 && idx < this.page + 1) {
          this.current = idx;
          this.$emit('pagechange', this.current);
        }
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pagination {
    overflow: hidden;
    height: 50px;
    width: 100%;
  }
  .pagination li {
    float: left;
    height: 30px;
    color: #666;
    background-color: #ffffff;
    border: 1px solid #e6eaee;
    border-left: 1px solid #ffffff;
  }
  .pagination li:first-of-type{
    border-left: 1px solid #e6eaee;
  }
  .pagination li a {
    display: block;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 5px;
    text-decoration: none;
    color: #adb0b5;
  }
  .pagination li:hover {
    /*border: 1px solid #248df7;*/
  }
  .pagination li:hover a {
    color: #248df7;
  }
  .pagination li.active {
    /*border: 1px solid #248df7;*/
  }
  .pagination li.active  a {
    color: #248df7;
  }



</style>
