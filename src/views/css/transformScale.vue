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

          </pre>
        </div>
        <div> 当前系数:{{zoom}}
          <button type="button" @click="resetZoom(1)">增加比例系数</button>
          <button type="button" @click="resetZoom(0)">减小比例系数</button>
        </div>
        <div class="test-wrap">
          <div class="dh-wrap clearfix">
            <h1 class="dh-title clearfix">
              OneSupport 运营数据统计
            </h1>
            <div class="content-up">
              <section class="fl-chart">
                <div class="chart-item"></div>
              </section>
              <section class="middle-chart">
                <div class="chart-item"></div>
              </section>
              <section class="fr-chart">
                <div class="chart-item"></div>
              </section>
            </div>
            <div class="content-down">
              <section class="fl-chart">
                <div class="chart-item"></div>
              </section>
              <section class="middle-chart">
                <div class="chart-item"></div>
              </section>
              <section class="fr-chart">
                <div class="chart-item"></div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'absolute-overflow',
        data() {
            return {
                created: this.$route.query.created,
                title: this.$route.query.name,
                zoom: 1
            }
        },
        methods: {
            toggle() {

            },
            resetZoom(data) {
                let top = '0px';
                let left = '0px';
                if (data === 1) {
                    this.zoom = this.zoom + 0.1;
                } else {
                    this.zoom = this.zoom - 0.1;
                }

                document.querySelector('.dh-wrap').setAttribute('style', "transform:scale(" + this.zoom + "," + this.zoom + ")" + ";" + "top:" + top + ";" + "left:" + left)
            }
        }
    }
</script>
<style lang="scss" scoped>
  .test-wrap {
    position: relative;
    border: 1px solid gray;
    height: 840px;
  }

  .dh-wrap {
    width: 960px;
    height: 540px;
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: 0 0;
    background-color: #253562;
    z-index: 9999;

    .dh-title {
      line-height: 40px;
      height: 40px;
      text-align: center;
      color: #fff;
      font-size: 24px;
      font-weight: bold;
      border-bottom: 1px solid #fff;
    }

    .content-up, .content-down {
      width: 100%;
      display: flex;
      flex-direction: row;
    }

    .content-up {
      height: 168px;
    }

    .content-down {
      height: 312px;
      padding-bottom: 10px;
    }

    .fl-chart, .fr-chart {
      flex: 3;
      height: 100%;
    }

    .middle-chart {
      flex: 5;
      height: 100%;
    }

    .chart-item {
      height: 100%;
      width: calc(100% - 10px);
      margin: 5px;
      border-radius: 4px;
      background-color: rgba(31, 36, 64, 0.5);
      border: 2px solid red;
      /*#141e36*/
    }
  }

</style>
