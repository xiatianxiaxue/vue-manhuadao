<template>
<div class="swiper-container" ref='swiper'>
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
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
    pagination: {
      type: Boolean,
      default: true
    },
    navigation: {
      type: Boolean,
      default: false

    },
    // scrollbar: {
    //   type: Boolean,
    //   default: false
    // },
    autoplay: {
      type: Number,
      default: 0
    }

  },
  mounted () {
    // const that = this
    /* eslint-disable */
    new Swiper (this.$el, {
        // direction: 'vertical', // 垂直切换选项
        loop: this.loop, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        autoplay: this.autoplay ? {
            delay: this.autoplay,
            stopOnLastSlide: false,
            disableOnInteraction: true
        } : false,

        // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar'
        // }
      })
      /* eslint-enable */
  }
}
</script>

<style lang="scss">
.swiper-container {
    width: 100%;
    height: 45px;
}
</style>
