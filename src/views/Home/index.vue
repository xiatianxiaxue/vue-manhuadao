<template>
  <div class="page-home">
    <index-header></index-header>

    <div class="index-main">
      <swiper :autoplay='1000' class="my-swiper" @change="onChange" v-if="bannerList.length > 0">
        <swiper-item v-for="item in bannerList" :key="item.id">
          <img :src="item.imageurl" alt />
        </swiper-item>
      </swiper>

      <index-nav></index-nav>

      <index-recommend v-for="item in recommendList" :key="item.specialid" :info="item"></index-recommend>

      <div class="my-icp">
          <a class="record" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011202006214" target="_blank">
              <img class="img" src="../../assets/icon/item-rank-other.png">
              <div>沪公网安备 31011202006214号</div>
          </a>
          <div class="licence">增值电信业务经营许可证沪B2-20170022<br>网络文化经营许可证沪网文（2016）3206-227号<br>出版物经营许可证新出发沪批字第U7659号</div>
      </div>
    </div>
  </div>

</template>

<script>
// 使用 ../ 相对路径时，如果当前组件位置发生变化，
// 那么相对路径也需要去修改, 如果使用 @ 别名的方式。就不需要去修改这个路径了
// import Swiper from '@/components/Swiper/Swiper.vue'
// import SwiperItem from '@/components/Swiper/SwiperItem.vue'
// =>
import { Swiper, SwiperItem } from '@/components/Swiper'
import IndexNav from './components/IndexNav'
import IndexRecommend from './components/IndexRecommend'
import IndexHeader from './components/IndexHeader'
import { getBanner, getIndexRecommend } from '@/api/cartoon'

export default {
  name: 'Home',

  components: {
    Swiper,
    SwiperItem,
    IndexNav,
    IndexRecommend,
    IndexHeader
  },

  data () {
    return {
      // 需要一个数据，考虑哪些点？
      // 1. 数据放在那里，data? props? computed? state? getter?
      // 2. 数据格式，string? object? number? array? ...
      bannerList: [],

      recommendList: []
    }
  },

  methods: {
    onChange (index) {
      // console.log('hello', index)
    },

    getBanner () {
      getBanner()
        .then(res => {
          // 漫画岛项目的每个接口都有 code 字段
          // 这个字段如何是 200 。这个接口才是OK的
          if (res.code === 200) {
            // OK
            this.bannerList = res.info
          } else {
            // 不OK, 就报错
            // TODO, 目前先使用丑陋的 alert。后面可以去用一下 vant 组件库中的组件
            alert(res.code_msg)
          }
        })
        .catch(err => {
          console.log(err)
          alert('网络异常，请稍后重试')
        })
    },

    getIndexRecommend () {
      getIndexRecommend()
        .then(res => {
          if (res.code === 200) {
            this.recommendList = res.info
          } else {
            alert(res.code_msg)
          }
        })
        .catch(err => {
          console.log(err)
          alert('网络异常，请稍后重试')
        })
    }
  },

  created () {
    this.getBanner()
    this.getIndexRecommend()
  }
}
</script>

<style lang="scss" scoped>
// 引入公用的mixins.scss
// @import "../../assets/styles/mixins.scss";
// 使用 @ 别名时，需要加一个 ~ 符号
// !!!! @vue/cli 4.3.1 不需要加 ~
@import "@/assets/styles/mixins.scss";

.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;

  .index-main {
    flex: 1;
    overflow-y: auto;
  }

  .my-swiper img {
    width: 100%;
  }

  .my-icp {
      height: 45px;
      padding: .26666667rem 0;
      font-size: .32rem;

  }

  .my-icp .record {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      justify-content: center
  }

  .my-icp .record .img {
      width: .4rem;
      height: .4rem;
      margin: 0 .13333333rem 0 0
  }

  .my-icp .licence {
      margin: .13333333rem 0 0;
      text-align: center
  }
}
</style>
