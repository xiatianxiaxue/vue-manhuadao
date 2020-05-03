<template>
  <header class="detail-tab">
     <div
      class="tab-item  tab-border"
      :class="{'active': index === activeIndex}"
      v-for="(item, index) in mululist"
      :key="index"
       @click="handleClick(index)"
      >{{ item.name }}</div>
  </header>
</template>

<script>
export default {
  name: 'Bigbooknav',
  props: {
    mululist: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    // handleClick (index) {
    //   // 当前点击的高亮
    //   this.activeIndex = index
    //   // 通知父组件
    //   // payload 如何要传递多个参数，需要弄成对象的形式
    //   this.$emit('click', index)
    // }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";

.detail-tab {
    width: 10rem;
    border-bottom: 1px solid #dbd9dc;
    margin: 0 auto
}

.detail-tab,.detail-tab .tab-item {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    height: 1.01333333rem
}

.detail-tab .tab-item {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    width: 33%;
    position: relative
}

.detail-tab .tab-border:before {
    content: "";
    width: 0;
    height: .26666667rem;
    border-left: 1px solid #999;
    position: absolute;
    top: .37333333rem;
    right: 0
}

.detail-tab .active {
    color: #e7370c
}

.detail-tab .active:after {
    content: "";
    width: 2.05333333rem;
    height: .18666667rem;
    background: url("./dibian.png") no-repeat;
    background-size: contain;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto
}
</style>
