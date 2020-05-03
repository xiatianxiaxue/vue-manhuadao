<template>
  <div class="page-vip">
    <normal-header title="VIP专区"></normal-header>
    <div class="vip-main">
      <section class="cartoon-list">
        <div class="list-item"  v-for=" item in viplisttt" :key="item.id">
          <div
            class="item-pic"
            :style="`background-image: url('${item.coverurl}')`"
          ></div>
          <div class="item-info">
            <div class="info-book font-30">{{ item.bigbook_name }}</div>
            <div class="info-author font-26">作者：{{ item.bigbook_author }}</div>
            <div class="info-fans font-26">人气：{{ item.bigbookview | capitalize }}</div>
          </div>
        </div>
      </section>
      <!-- <cartoon-list v-for=" item in viplisttt" :key="item.id"></cartoon-list> -->
    </div>
  </div>
</template>

<script>
import { unformat } from '../../utils/apiHeader.js'
import NormalHeader from '@/components/NormalHeader'
// import HeaderType from '@/components/HeaderType'
// import CartoonList from '@/components/CartoonList'
import { gitViplist } from '../../api/cartoon.js'
export default {
  name: 'Vip',

  components: {
    NormalHeader
    // HeaderType
    // CartoonList
  },
  filters: {
    capitalize (val) {
      return `${(val / 100000000).toFixed(2)}亿`
    }
  },
  data () {
    return {
      viplist: []
    }
  },
  computed: {
    viplisttt () {
      return this.viplist.map((item) => {
        return {
          id: item.bookstore_id,
          coverurl: item.coverurl,
          bigbook_name: item.bigbook_name,
          bigbook_author: item.bigbook_author,
          bigbookview: item.bigbookview
        }
      })
    }
  },
  methods: {
    gitViplist () {
      gitViplist().then(res => {
        // 需要解码与解析
        if (res.code === 200) {
          const info = JSON.parse(unformat(res.info))
          // console.log(info)
          this.viplist = info.comicsList
          // console.log(1, this.viplist)
          // console.log(2, this.viplisttt)
        } else {
          alert('网络异常, 请稍后再试')
        }
      })
    }
  },
  created () {
    this.gitViplist()
    const obj = unformat('Scd743PP6cinUQV+B108QR2Qq3YeZKLMq/d4kIDzK/g=:')
    console.log(obj)
  }
}
</script>

<style lang="scss" scoped>
.page-vip {
  display: flex;
  flex-direction: column;
  height: 100%;

  .vip-main {
    flex: 1;
    overflow-y: auto;
  }
}
.cartoon-list {
  .list-item {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 124px;
    padding-left: 10px;
    border-bottom: 1px solid #dbd9dc;
    position: relative;
    .item-pic {
      flex-shrink: 0;
      width: 80px;
      height: 106px;
      border-radius: 3px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: top;
    }
    .item-info {
      flex: 1;
      margin-left: 10px;
      color: #999;
      overflow: hidden;
      .info-book,
      .info-author,
      .info-fans {
        font-weight: 500;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .info-book {
        color: #333;
      }
      .info-book,
      .info-author {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
