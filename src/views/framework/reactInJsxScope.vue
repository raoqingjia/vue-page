<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>提示错误：‘React’ must be in scope when using JSX react/react-in-jsx-scope
代码如下
import  {Component} from 'react';
import './Header.less'
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            < div className="header_wrap">Header 组件< /div>
        )
    }
}
export default App;
错误提示：在JSX作用域中使用JSX React/React时，“React”必须在作用域中。是因为React并未导入
此时要把：
import { Component } from "react";
改为：
import React,{ Component } from "react";
记住React的r要大写</pre>
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
