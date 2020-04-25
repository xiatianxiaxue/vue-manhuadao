<template>
  <div class="page-search-result">
    <NormalHeader :showRigth="false" :title="keyword"></NormalHeader>
   <!-- <header class="header-normal">
      <div class="header-back"></div>
      <span class="header-title font-32">绝世飞刀</span>
    </header> -->
    <section class="search-result-list">
       <div class="list-item" v-for="item in searchResult" :key="item.id" @click="Bobigbookid(item.name,item.bookstore_id)">
            <div class="item-pic"
            :style="`background-image: url('${item.coverurl}')`"></div>
            <div class="item-info">
                <p class="info-book font-30">{{ item.name }}</p>
                <p class="info-author font-26">作者：{{ item.author }}</p>
                <p class="info-update font-26">更新：{{ item.lastpartname }}</p>
            </div>
        </div>
    <!-- <CartoonList ></CartoonList> -->
    </section>
  </div>

</template>

<script>
import NormalHeader from '../../components/NormalHeader/index.vue'
import { getSearchres } from '../../api/cartoon.js'
export default {
  name: 'SearchResult',
  data () {
    return {
      keyword: this.$route.query.keyword,
      searchResult: []
    }
  },
  components: {
    NormalHeader
  },
  computed: {
    listttt () {
      return this.searchResult.map((item) => {
        return {
          id: item.id,
          author: item.author,
          coverurl: item.coverurl,
          lastpartname: item.lastpartname,
          name: item.name
        }
      })
    }
  },
  methods: {
    getSearchres (name) {
      getSearchres(name).then(res => {
        if (res.code === 200) {
          this.searchResult = res.info
        } else {
          console.log('err')
        }
      }).catch(err => {
        console.log(err)
        alert('网络请求有误,请稍后再试！')
      })
    },
    Bobigbookid (keyword, bookstoreid) {
      // this.$router.push(`https://m.manhuadao.cn/detail.html?bigbookid=${bookstoreid}&cpid=0`)
      // https://m.manhuadao.cn/detail.html?bigbookid=110650&cpid=0
      this.$router.push(`/Bigbookid?keyword=${keyword}&bookstore_id=${bookstoreid}`)
    }
  },
  created (keyword) {
    this.getSearchres(this.keyword)
  }
}
</script>
<style>
  [v-cloak] {
      display: none
  }

  .font-14 {
      font-size: .18666667rem
  }

  .font-16 {
      font-size: .21333333rem
  }

  .font-18 {
      font-size: .24rem
  }

  .font-20 {
      font-size: .26666667rem
  }

  .font-22 {
      font-size: .29333333rem
  }

  .font-24 {
      font-size: .32rem
  }

  .font-26 {
      font-size: .34666667rem
  }

  .font-28 {
      font-size: .37333333rem
  }

  .font-30 {
      font-size: .4rem
  }

  .font-32 {
      font-size: .42666667rem
  }

  .font-34 {
      font-size: .45333333rem
  }

  .font-36 {
      font-size: .48rem
  }

  .font-38 {
      font-size: .50666667rem
  }

  .font-40 {
      font-size: .53333333rem
  }

  .font-42 {
      font-size: .56rem
  }

  .font-44 {
      font-size: .58666667rem
  }

  .font-46 {
      font-size: .61333333rem
  }

  .font-48 {
      font-size: .64rem
  }

  .font-50 {
      font-size: .66666667rem
  }

  .font-52 {
      font-size: .69333333rem
  }

  .font-54 {
      font-size: .72rem
  }

  .font-56 {
      font-size: .74666667rem
  }

  .font-58 {
      font-size: .77333333rem
  }

  .font-60 {
      font-size: .8rem
  }

  a:active,a:hover,a:link,a:visited {
      outline: none;
      text-decoration: none;
      color: #333
  }

  * {
      cursor: default
  }
  .search-result-list {
    overflow-x: hidden;
  }

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
      color: #fff
  }

  .go-top .icon-arrow-up {
      width: .42666667rem;
      height: .24rem;
      margin: .26666667rem auto .10666667rem;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAASCAYAAAA6yNxSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0QwQkMyQUM0RkRCMTFFNjkxQ0I4NkY4ODg3MkI3NEEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0QwQkMyQUQ0RkRCMTFFNjkxQ0I4NkY4ODg3MkI3NEEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDRDBCQzJBQTRGREIxMUU2OTFDQjg2Rjg4ODcyQjc0QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDRDBCQzJBQjRGREIxMUU2OTFDQjg2Rjg4ODcyQjc0QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpV2dW8AAADHSURBVHjavJTbCgIhEED9uqiItha6PNRun15EFPQBtbRgYzgkixPjOCYcELycA4LGWmuEbIE7cANq6T1S+QHo7Xf0PugvAUN5VkSqvCXkYcSmVEBM/gC6nAiuvCHkY2BORKy1AmLyp5fjHnGEhhypJBFacnEEddGekE8YT7YgIlbcgBx5cgRH3iXKkyLCAztFObKMRLzCiJJyVoTxk5h8qiBHaiKicovXwvJfEZdhQCk5FfEJmLkJcARGBeWI852As/vU3gIMANjHYdmMaYZIAAAAAElFTkSuQmCC) no-repeat;
      background-size: contain
  }

  .header-normal {
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
      background-color: #fff;
      position: relative
  }

  .header-normal .header-back {
      width: .61333333rem;
      height: .34666667rem;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAaCAMAAAD/jJ6+AAAAS1BMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzNOfcgEAAAAGHRSTlMA+YTxaxvr3L+mCaqiUUYxJRHYmpKMd14rR8HRAAAAm0lEQVQ4y+2SyQ7CMAxE62xtQ1dW//+XYsURIEw7B8SNOeXNiyLFSfPMeiL3gsDcEjPpEpulY8lBAZnsSCoflJCZ2nJAVAIm9ixpp4rABC8VuayEzMDv8dcdQ2xb3f7RONMmHcOG0fscx8Zkw8zlIbq5IjZjGe8QlbDJIUlLoSI264V0Jhpslp7OD7Dmn5/F/kJyu9vJ/PCvTr8DD0sYr/4QOQEAAAAASUVORK5CYII=) no-repeat;
      background-size: contain;
      position: absolute;
      top: .42666667rem;
      left: .32rem
  }

  .header-normal .header-title {
      max-width: 70%;
      color: #333;
      font-weight: 500;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap
  }

  .header-normal .header-search {
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAmVBMVEUAAADnNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwwyRpgHAAAAMnRSTlMA+gbmzLWd7pEiDtwExpVDKvLRp1I+FOK/uDkX9q6rjnt3MxqHWAvXpGG6iYBya0pIMClQcwUAAAHZSURBVDjLlZPpmqIwEEUJYRFEBHHfl9ax9+nz/g83UwxBQEXn/Am536WqklRZNcbHeKpT0sm0MwytFn67igvLdf+eceTQpDe/ZTx55PizzW6367yl5GzsK2fwK88Zz6NCiPqeygMvGs5EA2ozromHPFE3qMeciLa/Ll+LXg1wkuzTW5ezcKSG6CJ44rStW4QD4OWSRrLcu/CDBpWYnfN3s7fu0Qdm5o2AjnWfM1BEcmE5brEGCrx/HaIgttpYQZof+gjMW61DIO+cGPyo1XpS8CEfUzlgOw6sZdVy/nYycGRNYfvA2oGJrMDnA+sL6P+MOnm+1im8PbAOICuip+33egC2tbcQqs9Wiq/AKG/eJXhG/drapv/jLyO65XuuQR0K1dbaO87nw8+V0uanhLKfRlTCfmP4rgTFjEFPaikLUwjqtdpXK7PZA5OyuX/OGn3+KRvbh2VgGTYywbfncCFzv7vsbSlhcLg1LF0aPToWRfev+9+XGOH132RBTUxWiHPRrKknsloPT4UQHl2EWWiFce/drnijl+KWnGzz3skGxW4X5V2Ca9fyzWiyCorRanqtvedzwY8TMwRNr2D3P9aDrt91su0oKkUXwbMeYry+9bTXsZ7zer6T/AE4EE3TZn9kCQAAAABJRU5ErkJggg==) no-repeat;
      background-size: contain
  }

  .header-normal .header-index,.header-normal .header-search {
      width: .56rem;
      height: .56rem;
      position: absolute;
      top: .32rem;
      right: .32rem
  }

  .header-normal .header-index {
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAV1BMVEUAAADnNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwznNwxn+LnKAAAAHHRSTlMAUg338NIUCIbY24/77uPIsaSWaWBOQi0oHPKBH/oJmgAAATRJREFUOMvNlNuOwiAURaFQqGK9a9XZ//+dQxjLgeyAPs56OamupGWdporxYbbBq284IXL6xpyQmD6bVwDnM4DrJ/NugKNSR8Dc++bDAqOPRxsB++iZbgvsnyry3ANb1zb9ATCLSiwv4OB7mXa39eK2i8l6mS5yeamScSZVUCfjTIIka2QSKBllEopknIlYjCSjTIIk40wEJ+NMlKyTiZNJpoEVTsaZWsk4UzNZoEyNZEFZytRINqsZf+QNT6MBzDjlfSIR1VCr2uKN1bUalA9zoWoU6EKd1+/Nqjobs+jYeNAxoXXVn7X6A2zeyxg2wNRRx3TX/CxjRzVA3vAAmIYqU378j2o6Dh/rJTMhkTiWzISk5xXkKTgbHT3kGRcbDevyLNDooFWFtmhgxZRXegeifMV/ARY5MLGD2AosAAAAAElFTkSuQmCC) no-repeat;
      background-size: contain
  }

  .header-normal .header-submit {
      color: #333;
      position: absolute;
      top: .32rem;
      right: .32rem
  }

  .search-result-list {
      width: 10rem;
      margin: 0 auto
  }

  .search-result-list .list-item {
      box-sizing: border-box;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      width: 100%;
      height: 3.33333333rem;
      padding: 0 0 0 .26666667rem;
      border-bottom: 1px solid #dbd9dc;
      position: relative
  }

  .search-result-list .list-item:last-of-type {
      border: none!important
  }

  .search-result-list .list-item .item-pic {
      width: 2.13333333rem;
      height: 2.8rem;
      border-radius: 6px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: top
  }

  .search-result-list .list-item .item-info {
      max-width: 70%;
      margin: 0 0 0 .26666667rem;
      color: #999
  }

  .search-result-list .list-item .item-info .info-book {
      color: #333
  }

  .search-result-list .list-item .item-info .info-author,.search-result-list .list-item .item-info .info-book {
      margin: 0 0 .53333333rem;
      font-weight: 500;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap
  }

  .search-result-list .list-item .item-info .info-update {
      font-weight: 500;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap
  }

  .search-result-empty {
      width: 6.66666667rem;
      height: 6rem;
      margin: auto;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0
  }

  .search-result-empty .empty-pic {
      width: 6.66666667rem;
      height: 6rem;
      background: url(data:image/png;base64,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) no-repeat;
      background-size: contain
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

  @media (orientation: landscape) and (max-width:736px) {
      .header-normal,.search-result-list,.tips-wechat {
          width:100%!important
      }
  }

</style>
