<template>
  <div class="page-Feedback">
    <normal-header :title="title" :showRigth="false" titlerigth="提交"></normal-header>
    <section class="feedback-select">
        <p class="select-title font-28">反馈类型：</p>
        <div class="btn-group">
            <div class="item font-24 active">求漫画</div>
            <div class="item font-24" @click="displayResult($event)">章节/内容问题</div>
            <div class="item font-24">加载慢/功能问题</div>
            <div class="item font-24">岛蛋/支付问题</div>
            <div class="item font-24">其他问题</div>
            <div class="item" style="border: #FFFFFF;"></div>
        </div>
    </section>
    <section class="feedback-input">
        <textarea class="input-main font-24" placeholder="请输入详细反馈内容，200字以内哦~喵~" maxlength="200"></textarea>
        <span class="input-num font-24">0/200</span>
        <input type="number" class="input-contact font-24" placeholder="QQ/手机至少填一项">
    </section>
    <section class="feedback-follow">
        <p class="follow-text font-26">官方Q群：239159587</p>
        <p class="follow-text font-26">微信公众号：漫画岛（mhdapp）</p>
        <div class="follow-group">
            <img src="../../assets/icon/xch.jpg"/>
            <p class="group-text font-22">截屏二维码，用微信扫一扫选择相册，扫描二维码完成关注</p>
        </div>
    </section>
  </div>
</template>
<!-- <sript src='https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js'></sript> -->
<script>
import NormalHeader from '@/components/NormalHeader'
export default {
  name: 'Feedback',
  data () {
    return {
      title: '求书&反馈'
    }
  },
  components: {
    NormalHeader
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped="scoped">
  .font-24 {
      font-size: .32rem
  }
  .font-28 {
      font-size: .37333333rem
  }
  .page-Feedback {

    .feedback-select {
      width: 10rem;
      margin: 0 auto;
      padding: .4rem 0 0;

      .select-title {
        color: #333;
        padding: 0 0 0 .4rem;
      }
      .btn-group {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        box-sizing: border-box;
        -webkit-flex-wrap: wrap;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        margin: .26666667rem 0 0;
        padding: 0 .26666667rem;
        .item {
          display: -webkit-box;
          display: -webkit-flex;
          display: flex;
          -webkit-box-align: center;
          -webkit-align-items: center;
          align-items: center;

          -webkit-box-pack: center;
          -webkit-justify-content: center;
          justify-content: center;
          width: 2.93333333rem;
          height: .8rem;
          margin: 0 0 .26666667rem;
          color: #666;
          border: 1px solid #dbd9dc;
          border-radius: 6px;
        }
        .active {
          color: #e7370c;
          border: 1px solid #e7370c;
        }
      }
    }
    .feedback-input {
        box-sizing: border-box;
        width: 10rem;
        margin: 0 auto;
        padding: 0 .26666667rem;
        position: relative;
        .input-main {
          box-sizing: border-box;
          width: 100%;
          height: 2.66666667rem;
          padding: .21333333rem .21333333rem 0;
          color: #333;
          border: 1px solid #dbd;
          border-radius: 6px;
          resize: none; // 用户可以调整元素的高和宽

        }
        .input-num{
          color: #999;
          position: absolute;
          top: 2.13333333rem;
          right: .4rem
        }
        .input-contact {
          box-sizing: border-box;
          width: 100%;
          height: .93333333rem;
          margin: .26666667rem 0 0;
          padding: 0 .18666667rem;
          border: 1px solid #dbd9dc;
          border-radius: 6px
      }
    }
    .feedback-follow {
      box-sizing: border-box;
      width: 10rem;
      margin: .93333333rem auto 0;
      padding: 0 .26666667rem .26666667rem;
      .follow-text{
        margin: 0 0 .4rem;
        color: #333
      }
      .follow-group{
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        img {
          width: 2.57333333rem;
          height: 2.57333333rem;
          border: 1px solid #dbd9dc;
          border-radius: 6px
        }
        .group-text{
          margin: .26666667rem 0 0 .53333333rem;
          color: #666;
          line-height: 1.5
        }
      }
    }
  }

</style>
