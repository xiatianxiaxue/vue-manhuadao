<template>
  <div class="swiper-slide" @click="lunboshijian()">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SwiperItem',
  methods: {
    lunboshijian () {
      this.$emit('lunboshijian')
    }
  }
}
</script>
