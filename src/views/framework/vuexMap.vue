<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <PreviewWord :fileUrl="'static/file/vuexMap.docx'"
                     :fileName="'vuex：弄懂mapState、mapGetters、mapMutations、mapActions.docx'"></PreviewWord>

      </div>
      <div >
      </div>
    </div>
  </div>
</template>

<script>
   import PreviewWord from '@/views/component/previewWord'
    export default {
        name: 'vuexMap',
        components:{
          PreviewWord
        },
        data() {
          return {
            created: this.$route.query.created,
            title: this.$route.query.name,
            catalogue: []
          }
        },
        mounted() {
          this.$nextTick(function () {
          })
        },
        methods: {
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
