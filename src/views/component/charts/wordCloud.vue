<template>
  <footer>
    <div class="inner">

    </div>
  </footer>
</template>

<script>
    import * as echarts from 'echarts';

    export default {
        name: 'wordCloud',
        props: {
            list: {
                type: Array,
                default: []
            },
            baseDate: {
                type: Number,
                default: 100
            },
            restStyle: { // 重置样式
                type: Object,
                default: 0
            },
            title: {
                type: String,
                default: ''
            },
            displayType: {// 每页显示条数
                type: Number,
                default: 0
            }
        },
        created() {

        },
        mounted() {

        },
        data() {
            return {}
        },
        methods: {
            toggle() {
                $('.nav').toggle();
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
