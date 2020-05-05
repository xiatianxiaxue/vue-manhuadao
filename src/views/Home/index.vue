<template>
  <div class="page-home">
   <section class="go-top font-20" @click="backTop" v-show="backToTop">
        <div class="icon-arrow-up"></div>顶部
    </section>
    <index-header></index-header>
    <div class="betterscroll" ref="main">
    <div class="index-main" >
      <!-- 轮播图 :autoplay='1000' -->
      <swiper class="my-swiper"  v-if="bannerList.length > 0">
        <swiper-item v-for="item in bannerList" :key="item.id"
        @lunboshijian="swiperclk(item.targetargument)"
        >
          <img :src="item.imageurl" alt />
        </swiper-item>
      </swiper>
      <!-- 导航 -->
      <index-nav></index-nav>
      <!-- 首页列表 -->
      <!-- item.bigbook_id -->
      <IndexRecommend
      v-for="(item) in recommendList"
      :key="item.specialid"
      :info="item"
      @clickitem="gitHomelist"
      ></IndexRecommend>
      <!-- 底部 -->
      <div class="my-icp" >
          <a class="record" target="_blank">
              <img class="img" src="../../assets/icon/item-rank-other.png">
              <div >沪公网安备 31011202006214号</div>
          </a>
          <div class="licence">增值电信业务经营许可证沪B2-20170022<br>网络文化经营许可证沪网文（2016）3206-227号<br>出版物经营许可证新出发沪批字第U7659号</div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
// 使用 ../ 相对路径时，如果当前组件位置发生变化，
// 那么相对路径也需要去修改, 如果使用 @ 别名的方式。就不需要去修改这个路径了
// import Swiper from '@/components/Swiper/Swiper.vue'
// import SwiperItem from '@/components/Swiper/SwiperItem.vue'
// => // , gitHomelist,
import BScroll from 'better-scroll'
import { Swiper, SwiperItem } from '@/components/Swiper'
import IndexNav from './components/IndexNav'
import IndexRecommend from './components/IndexRecommend'
import IndexHeader from './components/IndexHeader'
import { getBanner, getIndexRecommend } from '@/api/cartoon'
// import { unformat } from '../../utils/apiHeader.js'
// import { mapMutations } from 'vuex'
export default {
  name: 'Home',
  // props: {
  //   // 外层组件上 recommendList 中的每一项元素
  //   info: {
  //     type: Object,
  //     required: true
  //   }
  // },
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
      // bigbookid: '',
      recommendList: [],
      backToTop: false
    }
  },
  // 局部过滤器
  filters: {
    formatYi (value) {
      // console.log('value: ', value)
      return `${(value / 100000000).toFixed(2)}亿`
    }
  },
  methods: {
    // 1 点击跳转到 详情页  和 携带bigboolid
    swiperclk (bigbookid) {
      const index = bigbookid.indexOf('=')
      const id = bigbookid.substring(index + 1, index + 7)
      // this.bigbookid = id
      this.$router.push(`/bigbookid?bigbookid=${id}`)
      // console.log(id)
    },
    getBanner () {
      // 这个是上面的 引入的那个getBanner line 45
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
    // 获取主体部分的每一个分子
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
    },
    // ？？？？ 首页点击进详情页没有做.
    gitHomelist (id) {
      console.log(id)
      this.$router.push(`/bigbookid?bigbookid=${id}`)
    },
    // 显示回到顶部按钮
    scrollToTop () {
      const scrollTop =
           window.pageYOffset ||
           document.documentElement.scrollTop ||
           document.body.scrollTop
      const browserHeight = window.outerHeight
      console.log(2, scrollTop, browserHeight)
      if (scrollTop > browserHeight) {
        console.log(2)
        this.backToTop = true
      } else {
        console.log(3)
        this.backToTop = false
      }
    },
    // 回到顶部
    backTop () {
      // this.scroll.scrollTo(0, 0, 500)
      console.log(1, this.scroll)
      const back = setInterval(() => {
        if (document.body.scrollTop || document.documentElement.scrollTop) {
          document.body.scrollTop -= 100
          document.documentElement.scrollTop -= 100
        } else {
          clearInterval(back)
        }
      }, 1000)
    }
  },
  created () {
    // console.log(this.$route.recommendList)
    this.getBanner()
    this.getIndexRecommend()
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
    // 在用插件的时候 会默认阻止点击事件 需要去配置一下click ：true 即可
    const options = {
      click: true, // 可以点击事件
      tap: true,
      mouseWheel: true // 乐意滑轮滚动
    }
    /* eslint-disable */
    let scroll = new BScroll('.betterscroll', options)
    /* eslint-enable */
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  }
}
</script>

<style lang="scss" scoped>
// 引入公用的mixins.scss
// @import "../../assets/styles/mixins.scss";
// 使用 @ 别名时，需要加一个 ~ 符号
// !!!! @vue/cli 4.3.1 不需要加 ~
@import "@/assets/styles/mixins.scss";
 // .betterscroll::-webkit-scrollbar {
 //            display: block;
 //        }
.go-top {
    width: 1.2rem;
    height: 1.2rem;
    background-color: rgba(0,0,0,.5);
    border-radius: 50%;
    text-align: center;
    position: fixed;
    z-index: 999;
    bottom: 2.53333333rem;
    right: .16rem;
    color: #fff;
  }
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;
  .betterscroll{
    flex: 1;
    overflow-y: auto;
  }
  // .index-main {
  //   flex: 1;
  //   overflow-y: auto;
  // }
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

.index-recommend {
  .recommend-divide {
    height: 10px;
    background-color: #f4f4f4;
  }
  .recommend-title {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 20px;
    margin-bottom: 18px;
    .title-group {
      display: flex;
      align-items: center;
      .title-icon {
        width: 22px;
        height: 22px;
        margin-right: 5px;
      }
      .title-text {
        color: #3a3a3a;
        font-weight: 500;
      }
    }
    .title-more {
      color: #b0b0b0;
      position: absolute;
      right: 18px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .recommend-type-1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
    .item {
      width: 174px;
      height: 218px;
      margin-bottom: 16px;
      .item-pic {
        width: 174px;
        height: 174px;
        margin-bottom: 4px;
        position: relative;
      }
      .item-name {
        max-width: 100%;
        margin-bottom: 2px;
        color: #3a3a3a;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .item-text {
        max-width: 100%;
        color: #8d8d8d;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
  .recommend-type-3 {
    padding: 0 10px;
    box-sizing: border-box;
    .item {
      display: flex;
      align-items: center;
      width: 100%;
      margin-bottom: 16px;
      position: relative;
      .item-pic {
        width: 154px;
        height: 90px;
      }
      .text-group {
        width: 158px;
        margin-left: 42px;
        .item-name {
          margin-bottom: 4px;
          color: #3a3a3a;
          font-weight: 500;
        }
        .item-hot {
          color: #b0b0b0;
          margin-bottom: 15px;
          .hot-hot {
            color: red;
          }
        }
        .item-text {
          color: #8d8d8d;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
      .ranking-group {
        .item-ranking {
          width: 25px;
          height: 25px;
          background-repeat: no-repeat;
          background-position: top;
          background-size: 100%;
          position: absolute;
          top: 4px;
          left: 168px;
        }
        .item-ranking-other {
          width: 25px;
          height: 25px;
          background-repeat: no-repeat;
          background-position: top;
          background-size: 100%;
          position: absolute;
          top: 6px;
          left: 168px;
        }
        .item-ranking-1 {
          background-image: url("~@/assets/icon/rank-1.png");
        }
        .item-ranking-2 {
          background-image: url("~@/assets/icon/rank-2.png");
        }
        .item-ranking-3 {
          background-image: url("~@/assets/icon/rank-3.png");
        }
        .item-ranking-4 {
          background-image: url("~@/assets/icon/rank-4.png");
        }
        .item-ranking-5 {
          background-image: url("~@/assets/icon/rank-5.png");
        }
      }
    }
  }
  .recommend-type-5 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
    .item {
      width: 112px;
      height: 218px;
      margin-bottom: 16px;
      .item-pic {
        width: 112px;
        height: 148px;
        margin-bottom: 4px;
      }
      .item-title {
        max-width: 100%;
        margin-bottom: 2px;
        color: #3a3a3a;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .item-text {
        max-width: 100%;
        color: #8d8d8d;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
     }
   }
}
</style>
