<template>
  <div class="article">
    <div class="content">
      <div class="wrap10">
        <h2 class="art-title">文本粘贴复制</h2>
        <div class="art-content">
          <textarea></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'content',
        data() {
            return {}
        },
        methods: {
            toggle() {

            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  textarea {
    height: 1600px;
    width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-size: 16px;
    border: 1px solid #c3c3c3;
    border-radius: 4px;
  }
</style>
