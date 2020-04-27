<template>
  <div class="swiper-slide" @click="lunboshijian(a)">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SwiperItem',
  methods: {
    lunboshijian (a) {
      this.$emit('lunboshijian', a)
    }
  }
}
</script>
