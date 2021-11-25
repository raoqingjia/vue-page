<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>浏览器显示HTML</h3>
          <pre>
不同的浏览器对HTML的解析过程不太相同，这里介绍一下webkit的渲染过程：
构建DOM树、构建Render树，布局Render树，绘制Render树。</pre>
          <img src="../../img/backflowRredraw.jpg">
          <pre>
浏览器在解析HTML文件的时候，“自上而下”加在，加载的过程中进行解析渲染。在解析过程中，如果遇到请求外部资源，如图片、CSS、iconfot等，这些请求过程是异步的，不会影响HTML文档的继续加载和解析。

解析过程中，浏览器首先会解析HTML文件构造DOM树，然后解析CSS文件构建渲染树，渲染树构建完成后，浏览器开始布局渲染树并将其绘制到屏幕。这个过程非常复杂，涉及到两个概念：reflow 和 repaint。

DOM节点中各个元素都是盒模型，要求浏览器去计算位置大小等，这个过程是reflow，当盒子模型位置、大小、其他属性如颜色，字体确定之后，浏览器便开始绘制内容，这个过程叫做repaint。

页面首次加载的时候，两个过程都会发生，这两个过程都很消耗性能，尤其是reflow，如果优化的不好，会造成很坏的用户体验。所以，我们要尽量减少reflow和repaint。尽量合并一些过程，比如要改变某个元素的多个属性。有三个方法：
方法一
ele.style.width = '100px';
ele.style.height = '200px';
ele.style.color = 'red';
方法二
ele.style.cssText = ';width:'+100+'px;height:'+200+'px;color:red';
方法三
.cls {
    width:100px;
    height:200px;
    color:red;
}
ele.addClass('cls');
这三种方法，明显我们不要采用第一种，因为每一句都会造成浏览器重绘，很消耗性能。第二种第三种就很好，合并之后，一次性渲染。</pre>
          <h3>回流和重绘</h3>
          <pre>
回流：当我们对 DOM 的修改引发了 DOM 几何尺寸的变化（比如修改元素的宽、高或隐藏元素等）时，浏览器需要重新计算元素的几何属性（其他元素的几何属性和位置也会因此受到影响），然后再将计算的结果绘制出来。这个过程就是回流（也叫重排）。
重绘：当我们对 DOM 的修改导致了样式的变化、却并未影响其几何属性（比如修改了颜色或背景色）时，浏览器不需重新计算元素的几何属性、直接为该元素绘制新的样式（跳过了上图所示的回流环节）。这个过程叫做重绘。

区别：
回流必将引起重绘，而重绘不一定会引起回流。比如：只有颜色改变的时候就只会发生重绘而不会引起回流。
当页面布局和几何属性改变时就需要回流；比如：添加或者删除可见的DOM元素，元素位置改变，元素尺寸改变——边距、填充、边框、宽度和高度，内容改变

浏览器的优化机制
现代的浏览器都是很聪明的，由于每次重排都会造成额外的计算消耗，因此大多数浏览器都会通过队列化修改并批量执行来优化重排过程。浏览器会将修改操作放入到队列里，直到过了一段时间或者操作达到了一个阈值，才清空队列。但是！当你获取布局信息的操作的时候，会强制队列刷新，比如当你访问以下属性或者使用以下方法：
offsetTop、offsetLeft、offsetWidth、offsetHeight
scrollTop、scrollLeft、scrollWidth、scrollHeight
clientTop、clientLeft、clientWidth、clientHeight
getComputedStyle()
getBoundingClientRect
以上属性和方法都需要返回最新的布局信息，因此浏览器不得不清空队列，触发回流重绘来返回正确的值。因此，我们在修改样式的时候，最好避免使用上面列出的属性，他们都会刷新渲染队列。如果要使用它们，最好将值缓存起来。

减少回流和重绘
1）最小化重绘和重排
由于重绘和重排可能代价比较昂贵，因此最好就是可以减少它的发生次数。为了减少发生次数，我们可以合并多次对DOM和样式的修改，然后一次处理掉。考虑这个例子
const el = document.getElementById('test');
el.style.padding = '5px';
el.style.borderLeft = '1px';
el.style.borderRight = '2px';
例子中，有三个样式属性被修改了，每一个都会影响元素的几何结构，引起回流。当然，大部分现代浏览器都对其做了优化，因此，只会触发一次重排。但是如果在旧版的浏览器或者在上面代码执行的时候，有其他代码访问了布局信息(上文中的会触发回流的布局信息)，那么就会导致三次重排。
因此，我们可以合并所有的改变然后依次处理，比如我们可以采取以下的方式：
使用cssText
const el = document.getElementById('test');
el.style.cssText += 'border-left: 1px; border-right: 2px; padding: 5px;';
修改CSS的class
const el = document.getElementById('test');
el.className += ' active';

2）批量修改DOM
当我们需要对DOM对一系列修改的时候，可以通过以下步骤减少回流重绘次数：
使元素脱离文档流
对其进行多次修改
将元素带回到文档中。
该过程的第一步和第三步可能会引起回流，但是经过第一步之后，对DOM的所有修改都不会引起回流，因为它已经不在渲染树了。
有三种方式可以让DOM脱离文档流：
隐藏元素，应用修改，重新显示
使用文档片段(document fragment)在当前DOM之外构建一个子树，再把它拷贝回文档。
将原始元素拷贝到一个脱离文档的节点中，修改节点后，再替换原始的元素。
考虑我们要执行一段批量插入节点的代码：
function appendDataToElement(appendToElement, data) {
    let li;
    for (let i = 0; i < data.length; i++) {
        li = document.createElement('li');
        li.textContent = 'text';
        appendToElement.appendChild(li);
    }
}
const ul = document.getElementById('list');
appendDataToElement(ul, data);
如果我们直接这样执行的话，由于每次循环都会插入一个新的节点，会导致浏览器回流一次。
我们可以使用这三种方式进行优化:
隐藏元素，应用修改，重新显示
这个会在展示和隐藏节点的时候，产生两次重绘
function appendDataToElement(appendToElement, data) {
    let li;
    for (let i = 0; i < data.length; i++) {
        li = document.createElement('li');
        li.textContent = 'text';
        appendToElement.appendChild(li);
    }
}
const ul = document.getElementById('list');
ul.style.display = 'none';
appendDataToElement(ul, data);
ul.style.display = 'block';
使用文档片段(document fragment)在当前DOM之外构建一个子树，再把它拷贝回文档

const ul = document.getElementById('list');
const fragment = document.createDocumentFragment();
appendDataToElement(fragment, data);
ul.appendChild(fragment);
将原始元素拷贝到一个脱离文档的节点中，修改节点后，再替换原始的元素。

const ul = document.getElementById('list');
const clone = ul.cloneNode(true);
appendDataToElement(clone, data);
ul.parentNode.replaceChild(clone, ul);

3）避免触发同步布局事件
上文我们说过，当我们访问元素的一些属性的时候，会导致浏览器强制清空队列，进行强制同步布局。举个例子，比如说我们想将一个p标签数组的宽度赋值为一个元素的宽度，我们可能写出这样的代码：
function initP() {
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.width = box.offsetWidth + 'px';
    }
}
这段代码看上去是没有什么问题，可是其实会造成很大的性能问题。在每次循环的时候，都读取了box的一个offsetWidth属性值，然后利用它来更新p标签的width属性。这就导致了每一次循环的时候，浏览器都必须先使上一次循环中的样式更新操作生效，才能响应本次循环的样式读取操作。每一次循环都会强制浏览器刷新队列。我们可以优化为:
const width = box.offsetWidth;
function initP() {
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.width = width + 'px';
    }
}

4）对于复杂动画效果,使用绝对定位让其脱离文档流
对于复杂动画效果，由于会经常的引起回流重绘，因此，我们可以使用绝对定位，让它脱离文档流。否则会引起父元素以及后续元素频繁的回流。

5）css3硬件加速（GPU加速）
比起考虑如何减少回流重绘，我们更期望的是，根本不要回流重绘。这个时候，css3硬件加速就闪亮登场啦！！
划重点：使用css3硬件加速，可以让transform、opacity、filters这些动画不会引起回流重绘 。但是对于动画的其它属性，比如background-color这些，还是会引起回流重绘的，不过它还是可以提升这些动画的性能。

参考文献：https://segmentfault.com/a/1190000017329980          </pre>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
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
      toggle(){

      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
