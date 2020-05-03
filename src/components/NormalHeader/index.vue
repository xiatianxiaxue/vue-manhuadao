<template>
  <header class="header-normal">
    <div class="header-back" @click="goBack" v-if="showLeft">
      <img src="~@/assets/icon/header-back.png" />
    </div>
    <span class="header-title font-32">{{ title }}</span>
    <div
    class="header-search"
    @click="goSearch"
    v-if="showRigth"
    >
    <img  src="../../assets/icon/header-search.png"/>
    <!-- <span v-else class="header-search-span">{{ titlerigth }}</span> -->
    </div>
    <span class="header-search-span font-28" v-else >{{ titlerigth }}</span>
  </header>
</template>
<script>
export default {
  name: 'NormalHeader',
  data () {
    return {
    }
  },

  props: {
    title: {
      type: String,
      default: '漫画岛'
    },
    titlerigth: {
      type: String,
      default: ' '
    },
    showLeft: {
      type: Boolean,
      default: true
    },
    showRigth: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    goBack () {
      // ?使用编程式导航?
      this.$router.go(-1)
    },

    goSearch () {
      this.$router.push('/search')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins.scss';

.header-normal {
  @include border-bottom;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  box-sizing: border-box;
  background-color: #fff;
  position: relative;
  .header-back {
    position: absolute;
    top: 50%;
    left: 12px;
    margin-top: -7px;
    width: 24px;
    height: 14px;
    // background-size: 100%;
  }
  .header-back img{
    width: 24px;
    height: 14px;
  }
  .header-title {
    max-width: 70%;
    color: #333;
    font-weight: 500;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .header-search {
    width: 22px;
    height: 22px;
    position: absolute;
    top: 50%;
    right: 12px;
    margin-top: -11px;
    // background-size: 100%;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .header-search-span {
    width: 40px;
    height: 22px;
    position: absolute;
    top: 50%;
    right: 12px;
    margin-top: -11px;
    text-align: center;
    font-size: .37333333rem
    // align-items: center;
  }
}
</style>
