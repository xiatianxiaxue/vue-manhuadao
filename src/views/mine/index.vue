<template>
  <div class="pages-mine">
  <Swiper
  class="my-swipe"
  :autoplay="1000"
  ></Swiper>
  </div>
</template>

<script>
import Swiper from '../../components/Swiper.1/index.vue'
export default {
  name: 'Mine',
  components: {
    Swiper
  }
}
</script>
<style>
  .my-swipe{
    height: 50px;
    width: 100%;
  }
</style>
