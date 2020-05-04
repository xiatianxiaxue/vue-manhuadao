<template>
  <div class="page-ranking">
    <normal-header title="排行榜"></normal-header>

    <header-type :types="types" @click="onTypeChange"></header-type>

    <div class="ranking-main">
      <section class="cartoon-list">
        <div
        class="list-item"
        v-for=" (item, childIndex) in listtt "
        :key=" item.id "
        @click="gobigbook(item.bigbookid)"
        >
          <div
            class="item-pic"
            :style="`background-image: url('${item.coverurl}')`"
          ></div>
          <div class="ranking-group">
            <div class="item-ranking" :class="`item-ranking-${childIndex + 1}`"></div>
          </div>
          <div class="item-info">
            <div class="info-book font-30">{{ item.bigbook_name }}</div>
            <div class="info-author font-26">作者：{{ item.bigbook_author }}</div>
            <div class="info-fans font-26">人气：{{ item.bigbookview | capitalize }}</div>
          </div>
        </div>
      </section>
      <!-- <cartoon-list :list="listtt" @clickitem="gitHomelist(item, listtt)"></cartoon-list> -->
    </div>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import HeaderType from '@/components/HeaderType'
// import CartoonList from '@/components/CartoonList'

import { getRankList } from '../../api/cartoon'
import { unformat } from '../../utils/apiHeader'

export default {
  name: 'Ranking',

  components: {
    NormalHeader,
    HeaderType
    // CartoonList
  },
  data () {
    return {
      // 排行榜分类信息不知道从哪里得到写死好了
      types: [
        { id: 1, description: '热搜榜', ranktype: 6 },
        { id: 2, description: '人气榜', ranktype: 1 },
        { id: 3, description: '畅销榜', ranktype: 4 },
        { id: 4, description: '新书榜', ranktype: 2 },
        { id: 5, description: '完结榜', ranktype: 5 },
        { id: 6, description: '免费榜', ranktype: 3 }
      ],
      list: []
    }
  },
  filters: {
    capitalize (val) {
      return `${(val / 10000).toFixed(2)}万`
    }
  },
  computed: {
    listtt () {
      return this.list.map((item) => {
        return {
          id: item.bookstore_id,
          coverurl: item.coverurl,
          bigbook_name: item.name,
          bigbook_author: item.author,
          bigbookview: item.weekhits,
          bigbookid: item.bigbookid
        }
      })
    }
  },
  methods: {
    getRankList (ranktype) {
      getRankList(ranktype).then(res => {
        if (res.code === 200) {
          // res.info 解密 JSON.parse 解析
          const info = JSON.parse(unformat(res.info))
          this.list = info.ranklist
        } else {
          alert(res.code_msg)
        }
      }).catch(err => {
        console.log(err)
        alert('网络异常，请稍后重试')
      })
    },
    gobigbook (bigbookIid) {
      this.$router.push(`/bigbookid?bigbookid=${bigbookIid}`)
      // console.log(bigbookIid)
    },
    /**
     * 切换分类类型时，触发
     */
    onTypeChange (payload) {
      console.log(payload)
      // 取出 payload 中的 type 中的 targetargument
      // const subject = payload.type.targetargument
      const ranktype = payload.type.ranktype
      // // 从新发送 B 接口请求
      this.getRankList(ranktype)
    },
    // 点击进入详情页 bigbookid
    gitHomelist (item, list) {
      console.log(this.listtt.map(item => {
        return item.bigbookid
      }))
      // const id = this.list[0].bigbookid
      // this.$router.push(`/bigbookid?bigbookid=${id}`)
      console.log(item)
    }
  },

  created () {
    this.getRankList(this.types[0].ranktype)
  }
}
</script>

<style lang="scss" scoped>
.page-ranking {
  display: flex;
  flex-direction: column;
  height: 100%;

  .ranking-main {
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
  .ranking-group {
        .item-ranking {
          width: 1.06667rem;
          height: 1.66667rem;
          background-repeat: no-repeat;
          background-position: top;
          background-size: 100%;
          position: absolute;
          top: 1.10667rem;
          left: 8.48rem;
        }
        .item-ranking-other {
           width: 1.26667rem;
           height: 0.66667rem;
           background-repeat: no-repeat;
           background-position: top;
           background-size: 100%;
           position: absolute;
           top: 1.10667rem;
           left: 7.8rem;
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

  }

</style>
