<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>一、点击File,然后点击Settings</h3>
          <img src="../../img/framework/reactComTemp01.png">
          <h3>二、添加模板</h3>
          <img src="../../img/framework/reactComTemp02.png">
          <h3>三、模板内容</h3>
          <pre>import React, {Component} from 'react';
export default class ${NAME} extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            < div >< /div>
        )
    }
}</pre>
          <h3>四、创建React组件</h3>
          <img src="../../img/framework/reactComTemp03.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'reactComTemp',
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
