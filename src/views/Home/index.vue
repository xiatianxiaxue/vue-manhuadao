<template>
<div class="pages-home">
  <!-- 导航头部 -->
  <header class="index-header">
  <a >
  <div class="header-user">
  <div class="user-btn"></div>
  </div>
  </a>
  <div class="header-logo"></div>
  <a >
  <div class="header-search"></div>
  </a>
  </header>
  <!-- 萝卜兔 -->
  <Swiper v-if="bannerList.length > 0">
   <SwiperItem v-for="item in bannerList" :key="item.id">
     <img :src="item.imageurl" alt />
   </SwiperItem>
  </Swiper>
</div>
</template>
<script>
import { Swiper, SwiperItem } from '@/components/Swiper'
import { getBanner } from '@/api/cartoon'
export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperItem
  },
  data () {
    return {
      bannerList: []
    }
  },
  created () {
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
  }

}
</script>
<style lang="scss">
  .pages-home{
    height: 100%;
    width: 100%;
    .index-header{
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      // width: 380px;
      height: 45px;
      background-color: #fff;
      padding: 0 20px;
      // position: fixed;
      // z-index: 999;
      // top: 0;
      // left: 0;
      // right: 0;
      a{
         height: 25px;
         width: 25px;
         .user-btn{
           height: 25px;
           width: 25px;
           background-image: url(../../assets/icon/user-btn.png) ;
           background-repeat: no-repeat;
           background-size: 25px 25px;

          }
          .header-search{
            height: 25px;
            width: 25px;
            background-image: url(../../assets/icon/icon-search.png) ;
            background-repeat: no-repeat;
            background-size: 20px 20px;
          }
       }
      .header-logo{
        height:28px;
        width:98px;
        background-image: url(../../assets/logo.png);
        background-repeat: no-repeat;
        background-size: 98px 28px;
      }
    }
  }
</style>
