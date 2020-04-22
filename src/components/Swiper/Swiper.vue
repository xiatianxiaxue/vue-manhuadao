<template>
  <div class="swiper-container">
      <div class="swiper-wrapper" ref='swiper'>
          <div class="swiper-wrapper">
            <!--
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
             -->
            <slot />
          </div>
       <!--   <div class="swiper-slide">
          <img src="https://img.manhuadao.cn/upload/BigBook201912/5a64f2afda754591a3afb7efb43f766f.jpg" />
          </div>
          <div class="swiper-slide">
          <img src="https://img.manhuadao.cn/upload/xbkz/180104/nwdtx.jpg" />
          </div> -->
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'Swiper',
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Number,
      default: 0
    }
  },
  mounted () {
    /* eslint-disable */
    new Swiper (this.$el, {
      /* eslint-enable */
      loop: this.loop, // 循环模式选项
      autoplay: this.autoplay ? {
        delay: this.autoplay,
        stopOnLastSlide: false,
        disableOnInteraction: true
      } : false,

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }

    })
  }

}

</script>

<style lang="scss">
 .swiper-container {
    height: 180px;
    width: 100%;
    .swiper-slide{
      width: 100%;
      height: 180px;
      img{
        width: 100%;
        height: 180px;
      }
    }
  }
  .swiper-pagination-bullet {
    opacity: 1;
    vertical-align: middle;
    width: 3px;
    height: 3px;
    // margin: 0 .13333333rem;
    border-radius: 50%;
    background-color: hsla(0,0%,100%,.7);
  }
  .swiper-pagination-bullet {
    opacity: 1;
    vertical-align: middle;
    width: 6px;
    height: 6px;
    margin: 0 .13333333rem;
    border-radius: 50%;
    background-color: hsla(0,0%,100%,.7);
  }
  .swiper-pagination-bullet-active{
    height: 6px;
    width: 20px;
    margin: 0 auto;
    background-image: url(../../assets/icon/dot.png);
    background-size: 6px 20px;
    background-repeat: no-repeat;
  }
</style>
