<template>
  <div ref="wrapper">
    <slot><!-- 为父组件提供插槽 --></slot>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core"
export default {
  name: 'betterRsrcoll',

  props: {
    click: {
      type: Boolean,
      default: true
    },
    scrollX: {
      type: Boolean,
      default: true
    },
    scrollY: {
      type: Boolean,
      default: true
    },
    mouseWheel: {
      type: Boolean,
      default: true
    }

  },

 mounted() { // 初始化执行
    this._initOptions()
    this._initScroll();
  },
  updated() { // 当数据更新时重计算滑动值
    this.scroll.refresh();
  },
  methods: {
    _initScroll() { // 初始化滚动条
      const { options } = this;
      const { wrapper } = this.$refs;
      if (!this.scroll) {
        // 没有初始化滚动条时执行(一次性代码)
        this.$nextTick(() => {
          this.scroll = new BScroll(wrapper, options);
        });
      }
    },
    _initOptions() { // 初始化props覆盖data中的配置
      const _propsKey = Object.keys(this._props);
      // 筛选值不为空的prop
      const props = _propsKey.reduce((total, key) => {
        if (this._props[key]) {
          total[key] = this._props[key];
        };return total;
      }, {});
      this.options = { ...this.options, ...props };
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";

</style>
