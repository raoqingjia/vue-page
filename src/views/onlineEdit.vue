<template>
  <div class="article">
    <div class="content">
      <div class="wrap10">
        <h2 class="art-title">
          文本粘贴复制
          <button class="btn" @click="writeFile()">保存</button>
          <button class="btn" @click="clearFile()">清除</button>
        </h2>
        <div class="art-content">
          <textarea v-model="textdata" id="filecontent" @blur="writeFile()"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'onlineEdit',
        data() {
            return {
                textdata: ''
            }
        },
        mounted() {
            this.initFile();
        },
        methods: {
            initFile() {
                const filecontent = window.localStorage.getItem("onlineEditTxt", filecontent);
                this.textdata = filecontent;
            },
            writeFile() {
                if (this.textdata) {
                    window.localStorage.setItem("onlineEditTxt", this.textdata)
                }
            },
            clearFile() {
                this.textdata = '';
                window.localStorage.clear("onlineEditTxt");
            }
        },
        beforeDestroy() {
            // window.localStorage.clear("onlineEditTxt");
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

  .btn {
    font-size: 14px;
    padding: 0 10px;
    margin: 10px 0 0 15px;
    line-height: 28px;
    border: 1px solid #c3c3c3;
    border-radius: 20px;
    background-color: #FFFFFF;
    cursor: pointer;
  }
</style>
