<template>
  <div class="page-search">
  <header class="search-header">
      <div class="header-back" @click="headerBack"></div>
      <div class="header-search">
          <span class="icon-search"></span>
          <input
          class="search-input font-24"
          type="search"
          placeholder="漫画名丨作者 ^_^"
          v-model="searchValue"
          >
      </div>
      <div class="header-btn font-30">搜索</div>
  </header>
  <!-- 大家都在搜 -->
  <template v-if="!searchValue">
    <section class="search-recommend" >
        <div class="recommend-title font-26">
            <span class="title-title">大家都在搜</span>
            <span class="title-btn" @click="grtHotSearch"><span class="icon-refresh"></span>刷新</span>
        </div>
        <div class="recommend-content font-28" >
            <span
            class="recommend-item"
            v-for=" item in searchlist"
            :key="item.id"
            @click="hanfleclick(item.keyword)"
            >{{ item.keyword }}</span>
            <!-- <span class="recommend-item">修真四万年</span> -->
        </div>
    </section>
    <section class="search-history" >
        <div class="history-title">
            <span class="title-title font-24">最近搜索</span>
            <div class="title-del" @click="clearlist"></div>
        </div>
        <div class="history-item" v-for=" (item, index) in getSearchlist" :key="index" @click="hanfleclick(item)">
            <div class="icon-time"></div>
            <span class="item-text font-28" >{{ item }}</span>
        </div>
<!--        <div class="history-item">
            <div class="icon-time"></div>
            <span class="item-text font-28">落难千金的逆袭</span>
        </div> -->
    </section>
  </template>
  <!-- 搜索历史 -->
  <template v-else>
    <section class="search-content" >
      <p class="item font-28"
      v-for="(item, index) in searchIndex"
      :key="index"
      @click="hanfleclick(item)"
      >{{ item }}</p>
      <!-- <p class="item font-28">拂晓的花嫁</p> -->
    </section>
  </template>
  </div>

</template>

<!-- 分析页面 1. 当页面发生变化时其实有二个页面会发生变化一个出现 一个隐藏 -->
<!--          2.当页面中输入框发生改变时 会发生事件 -->

<script>
import { grtHotSearch, getindexSearch } from '@/api/cartoon.js'
export default {
  name: 'Search',
  data () {
    return {
      //  搜索值
      searchValue: '',
      // 热搜列表
      searchlist: [],
      // 历史记录列表
      getSearchlist: this.getSearch(),
      // 输入框中的数据
      searchIndex: []
    }
  },
  watch: {
    searchValue (newVal, oldVal) {
      clearTimeout(this.timer)
      if (newVal) {
        this.timer = setTimeout(() => {
          this.getindexSearch(newVal)
        }, 500)
      }
    }
  },
  methods: {
    //  获取热搜的数据
    grtHotSearch () {
      grtHotSearch().then(res => {
        if (res.code === 200) {
          this.searchlist = res.info.hotWordsList
          // console.log(this.searchlist)
        } else {
          console.log('err')
        }
      }).catch(err => {
        console.log(err)
        alert('网络请求有误,请稍后再试！')
      })
    },
    // 保存到本地 并保存
    saveSeaarch (keyword) {
      // console.log(keyword)
      // 1. 取出本地中的数据
      var storage = window.localStorage
      let tmp = storage.getItem('search')
      if (!tmp) {
        tmp = []
      } else {
        tmp = JSON.parse(tmp)
      }
      if (tmp.includes(keyword)) {
        return
      }
      // 2.将关键字追加到
      tmp.push(keyword)
      // console.log(tmp)
      // 3 再讲新数组存储到本地
      storage.setItem('search', JSON.stringify(tmp))
    },
    // 获取本地的数据
    getSearch () {
      // 1. 取出本地中的数据
      var storage = window.localStorage
      const tmp = storage.getItem('search')
      if (!tmp) {
        return []
      } else {
        return JSON.parse(tmp)
      }
    },
    //  热搜点击事件
    hanfleclick (keyword) {
      // 1 保存
      this.saveSeaarch(keyword)
      // 2 跳转去搜索详情页面
      // 方法一 ，路由传参 ** ?keyword=${keyword}
      // this.$router.push(`/search-result?keyword=${keyword}`)
      // fangfaer路由传参
      this.$router.push({
        path: '/search-result',
        query: {
          keyword: keyword
        }
      })
      // 3 渲染页面. 取出本地中的数据
      // var storage = window.localStorage
      // const tmp = storage.getItem('search')
      // this.getSearchlist = tmp
    },
    clearlist () {
      window.localStorage.removeItem('search')
      this.getSearchlist = []
    },
    // 获取 输入框中的数据
    getindexSearch (name) {
      getindexSearch(name).then(res => {
        if (res.code === 200) {
          console.log(res)
          this.searchIndex = res.info
        } else {
          console.log('err')
        }
      }).catch(err => {
        console.log(err)
        alert('网络请求有误,请稍后再试！')
      })
    },
    headerBack () {
      this.$router.go(-1)
    }
  },
  created () {
    this.grtHotSearch()
  }
}
</script>
<style>
  .search-header {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      width: 10rem;
      height: 1.2rem;
      margin: 0 auto;
      background: #e7370c;
      position: relative
  }

  .search-header .header-back {
      width: .62666667rem;
      height: .34666667rem;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAaCAMAAAAQTvWAAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAQBCAIPDgwGCg0HCwkDBQJD3xKAAAALJJREFUOMvtkksSgzAMQ+38IUB1/9M2QDv52Nm0W95SoxlLGlOLsStNSMEJ7RUA3c0rwIN2RED3uwUY/WbHiSWJ9SgsptXypW2O1JBA5DEesLIS5QoZUqdtKPiPJkN6a1rtjlc0QbqDu74NBN+UUKA09R+qnzhOy261rMwZlTG5H7N2xsmudM61s9zZZ2XTBXU/cTpUYXgs79Q/mTwzAFZOV78syIrOmSa4UuDhF9Dzp/8N878PvMBHvdEAAAAASUVORK5CYII=) no-repeat;
      background-size: contain;
      position: absolute;
      top: .42666667rem;
      left: .4rem
  }

  .search-header .header-search {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      width: 70%;
      border-radius: 6px;
      position: relative
  }

  .search-header .header-search .icon-search {
      width: .37333333rem;
      height: .37333333rem;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAdVBMVEUAAACzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Pn2ls/AAAAJnRSTlMAAwey+qV+7sC9XjIL596fl4yFdurY1MtnVk4+lG4tEMhyRyQfKQeVbn0AAAD8SURBVCjPhZJZsoMgEADBBffdaExizPb6/kd8lKVYUZP0BwPVDDNQiJmo9BPHSQJ1FWvONwz++U3FGZBkfdf1WQ1crMUNLbSPaSFPDfiDybuBksIgCwjm3AxC8UYPxdQLKLGigGictLRyLa0DwXg/eIgNHTx1KEnFFllT6eCTix1cbD0mHPdkxUGPDqc9GeJ9k/WvY4NvDSlSuXWWx12HK3tFQ3gJjU+zfb4Ue374ci0vONE8WzdcLfutAAprUXEOtqk0+NB009IKU+3i+M/UL4DaVeFRuR44pYxTXJMcBRjsaLygsZpnZR88r7Hvr/ljkYsPSBcc8dHmnvoHHOUYpdTrexcAAAAASUVORK5CYII=) no-repeat;
      background-size: contain;
      position: absolute;
      top: .21333333rem;
      left: .26666667rem
  }

  .search-header .header-search .search-input {
      box-sizing: border-box;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      width: 100%;
      height: .8rem;
      padding: 0 .26666667rem 0 .8rem;
      border: none;
      border-radius: 6px
  }

  .search-header .header-btn {
      color: #fff;
      font-weight: 500;
      position: absolute;
      top: .29333333rem;
      right: .34666667rem
  }

  .tips-wechat {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      width: 10rem;
      height: 2.37333333rem;
      margin: auto;
      background-color: rgba(0,0,0,.5);
      position: fixed;
      z-index: 999;
      left: 0;
      right: 0;
      bottom: 0
  }

  .tips-wechat .wechat-code {
      width: 2.04rem;
      height: 2.04rem;
      margin: 0 .4rem 0 .13333333rem
  }

  .tips-wechat .tip-text {
      -webkit-box-flex: 1;
      -webkit-flex: auto;
      flex: auto;
      line-height: 1.5;
      color: #fff
  }

  .tips-wechat .close {
      width: .33333333rem;
      height: .33333333rem;
      margin: 0 .32rem 0 0;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAARVBMVEUAAADV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXZkrBbAAAAFnRSTlMA2BkU3tAf9QTrirawq6OREuiWgoEJNJIs5wAAAIhJREFUKM9lzzkWgzAQBNFGsj0Cs3mb+x/VEFXzVJn6JxqdNZENv3fkXHwvz4zpwC2PBqPH7VwmtUgIyFEtEwIypBkyyFWqAwTcd0kFAqp0IQeIAAjoCYB64EA+3wPUA+TQE5cPTg61XKgAEnQ8ngZGi5qBU0gBOI3SBjh9pDaNse6y6hKvb/sDbKYZqOSfJ/UAAAAASUVORK5CYII=) no-repeat;
      background-size: contain
  }

  .tips-padding {
      padding: 0 0 2.37333333rem
  }

  .search-recommend {
      box-sizing: border-box;
      width: 10rem;
      margin: 0 auto;
      padding: .4rem .26666667rem
  }

  .search-recommend .recommend-title {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      justify-content: space-between;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      width: 100%
  }

  .search-recommend .recommend-title .title-title {
      color: #8b8b8b
  }

  .search-recommend .recommend-title .title-btn {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      color: #8b8b8b
  }

  .search-recommend .recommend-title .title-btn .icon-refresh {
      width: .34666667rem;
      height: .32rem;
      margin: 0 .08rem 0 0;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAMAAADTXB33AAAAclBMVEUAAACLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4t8MqE6AAAAJXRSTlMA2+vnNzEStouEWOLKxLCaeFIqCPfxwbuTXxkM1ayffnFAI9Bstt8SVgAAAOFJREFUKM9tkOkagiAQRQdlccmtUlNbrXn/V2wmVJCv84eLR70DsHKsy6soquYEAdkBF+JK+2Iy6NEOzsw5MlFhhJXJanTL24viljH72ceiuCaXsJKye+mnAWi4ewRHze6MBQAXKScet9I203loqcCRokXZKMFjvKxD9vRtcAOvHgWvNGwHIR+1qB7+09HoEDJPQHDpMTAZRjyZJJXuzUSPDhxaOrreqTupmsPTvuNo7F0wMUWjvSIis1lxjgYr1Y13d/8PVGiSuroiU8KGFOgIB07iTXQS9pyG8p3Hokjc8b8gYx4AY0sU+QAAAABJRU5ErkJggg==) no-repeat;
      background-size: contain
  }

  .search-recommend .recommend-content {
      -webkit-flex-wrap: wrap;
      flex-wrap: wrap;
      width: 100%;
      margin: .4rem 0 0
  }

  .search-recommend .recommend-content,.search-recommend .recommend-content .recommend-item {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center
  }

  .search-recommend .recommend-content .recommend-item {
      box-sizing: border-box;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      height: .90666667rem;
      padding: 0 .26666667rem;
      margin: 0 .26666667rem .26666667rem 0;
      font-weight: 500;
      border: 1px solid #ddd;
      border-radius: 20px
  }

  .search-history {
      width: 10rem;
      margin: 0 auto
  }

  .search-history .history-title {
      box-sizing: border-box;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      width: 100%;
      padding: 0 .26666667rem .26666667rem;
      border-bottom: 1px solid #e9e9e9
  }

  .search-history .history-title .title-title {
      -webkit-box-flex: 1;
      -webkit-flex: auto;
      flex: auto;
      color: #8b8b8b
  }

  .search-history .history-title .title-del {
      width: .34666667rem;
      height: .36rem;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAbCAMAAABVyG9ZAAAAV1BMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzNJt775AAAAHHRSTlMALdJnmVoO3SIDTvqIORu3sHl0RPXt2sOilJAubjaycgAAAI5JREFUKM/tzMsOwiAQheFpS6tcW6B3z/s/p2GChuLGuPZbMISfDGV2XMCW0dJFo/GmH5cUMDmZLtJN8PmxYxPMcGeDx9gxQmZ6sN4jI5EpdWMqioyITuGo4nbBs0VTpwZtmdCls8fwT7+l0ndpQ6xTxMbzhKmTwcHTYlayDFLNsMQOfNhfv8KqUdBrSFuepXgT3PziFxEAAAAASUVORK5CYII=) no-repeat;
      background-size: contain
  }

  .search-history .history-item {
      box-sizing: border-box;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      width: 100%;
      height: 1.06666667rem;
      padding: 0 0 0 .26666667rem;
      border-bottom: 1px solid #e9e9e9
  }

  .search-history .history-item .icon-time {
      width: .34666667rem;
      height: .34666667rem;
      margin: 0 .16rem 0 0;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAASFBMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmn+vFLAAAAGHRSTlMA/g9qj/Xn0jYxeCIMwbemiHSrwrvsXE0JR53yAAAAuklEQVQoz4WS2xKDIAxECSFcrIhoL///py2amYAwdR8cmQObQFbV0lqN5I0jAHLGX0CIAM8Vs1kIYqgJgkU2m9FCFmIg6apiAiNn+Fe2Itehjb1eb2YbnPWi1ewEEyNt49H1cZqR1PDFmOYezVTKu0X1SC3u94F1hFYqaxwhBN2iDYs+jBrDU8SGVRvqcUpzG9y8SJqXK7ej8PJQInkoFSBdUQIeZ+6Hkm9H2QdgamKzS2z2cBu2PxH9AqSDBYn5xIsZAAAAAElFTkSuQmCC) no-repeat;
      background-size: contain
  }

  .search-content {
      box-sizing: border-box;
      width: 10rem;
      margin: 0 auto;
      padding: 0 .26666667rem
  }

  .search-content .item {
      box-sizing: border-box;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      width: 100%;
      height: 1.22666667rem;
      padding: 0 0 0 .26666667rem;
      font-weight: 600;
      border-bottom: 1px solid #ddd
  }

  @media (orientation: landscape) and (max-width:736px) {
      .search-content,.search-header,.search-history,.search-recommend,.tips-wechat {
          width:100%!important
      }
  }

</style>
