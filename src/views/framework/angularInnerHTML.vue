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
1、首先默认情况下，innerHTML会被认为是不安全的，因此屏蔽掉了样式。
不生效场景
我们通过innerHTML引入一段html格式的文本，文本中有style样式，目标是希望字体是红色的，而实际效果却仍然是默认的黑色。
通过管道转义
import {Pipe, PipeTransform} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
@Pipe({
  name: "html"
})
export class HtmlPipe implements PipeTransform{
 constructor (private sanitizer: DomSanitizer) {
 }
 transform(style) {
 return this.sanitizer.bypassSecurityTrustHtml(style);
 }
}
然后在app.module中引入一下:
import { HtmlPipe } from './inner-html/html.pipe';
@NgModule({
  declarations: [
    ...
    HtmlPipe,
    ...
  ],
最后在html文件中使用:
< div [innerHTML]="content | html">< /div>

如果感觉不用管道全局声明就转译一下
import { DomSanitizer } from '@angular/platform-browser'; //引入
private sanitizer: DomSanitizer   //实例化
assembleHTML(strHTML: any) {
  return this.sanitizer.bypassSecurityTrustHtml(strHTML);
}
< div [innerHTML]="assembleHTML(dvDetailsHtml)"  >< /div>

2、不用管道转译也就意味着不用style了，可以用class提前定义好标签元素样式</pre>
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
