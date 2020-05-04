<template>
  <div class="page-classify">
    <normal-header title="分类"></normal-header>

    <header-type :types="types" @click="onTypeChange"></header-type>

   <div class="classify-main">
      <section class="cartoon-list">
        <div
        class="list-item"
        v-for=" item in list "
        :key=" item.id "
        @click="gobigbook(item.bigbook_id)"
        >
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
<!--
     <cartoon-list
      :list="list"
      @clickitem="gobigbook(item.bigbook_id)"
      ></cartoon-list> -->
    </div>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import HeaderType from '@/components/HeaderType'
// import CartoonList from '@/components/CartoonList'

import { getTypes, getTypeList } from '@/api/cartoon'
import { unformat } from '../../utils/apiHeader'

export default {
  name: 'Classify',

  components: {
    NormalHeader,
    HeaderType
    // CartoonList
  },
  filters: {
    capitalize (val) {
      return `${(val / 100000000).toFixed(2)}亿`
    }
  },
  data () {
    return {
      types: [],

      list: []
    }
  },

  methods: {
    a () {
      return getTypes().then(res => {
        if (res.code === 200) {
          this.types = res.info
        } else {
          alert(res.code_msg)
        }
      }).catch(err => {
        console.log(err)
        alert('网络异常，请稍后重试')
      })
    },

    b (subject) {
      getTypeList(subject).then(res => {
        if (res.code === 200) {
          // 对 res.info 做解密, 并解析成 JSON
          const info = JSON.parse(unformat(res.info))
          // console.log(info)
          this.list = info.comicsList
        } else {
          alert(res.code_msg)
        }
      }).catch(err => {
        console.log(err)
        alert('网络异常，请稍后重试')
      })
    },
    // 点击进入详情页 bigbookid
    gitHomelist (list, index) {
      console.log(1, index)
      const id = this.list[0].bigbook_id
      this.$router.push(`/bigbookid?bigbookid=${id}`)
      // console.log(11, id)
    },
    /**
     * 切换分类类型时，触发
     */
    onTypeChange (payload) {
      console.log(payload)
      // 取出 payload 中的 type 中的 targetargument
      const subject = payload.type.targetargument
      // 从新发送 B 接口请求
      this.b(subject)
    },
    gobigbook (bigbookId) {
      this.$router.push(`/bigbookid?bigbookid=${bigbookId}`)
    }
  },

  async created () {
    // A B 两个接口，B 接口的参数需要从 A 接口的返回值中去获取。要如何办？
    await this.a()
    this.b(this.types[0].targetargument)
  }
}
</script>

<style lang="scss" scoped>
.page-classify {
  display: flex;
  flex-direction: column;
  height: 100%;

  .classify-main {
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
