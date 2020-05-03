// 专门处理 漫画相关的 接口请求

// 引入封装好的 axios 的实例
import request from '@/utils/request'

// 引入 ApiHeader
import { format } from '@/utils/apiHeader'

// 用户注册 接口  getuserreq
// https://pay.manhuadao.cn/UserAccount/GetUserAccountInfo?apptype=8&appversion=1.0&channel=web-app
// https://pay.manhuadao.cn/UserAccount/GetUserAccountInfo?apptype=8&appversion=1.0&channel=web-app//
// https://mhd.zhuishushenqi.com/comic_v2/userinfo?apptype=8&appversion=1.0&channel=web-app
export const getuserreq = (ranktype) => {
  return request({
    url: '/pay/UserAccount/GetUserAccountInfo',
    method: 'POST',
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app',
      cpid: 0
    }
  })
}

/**
 * 获取轮播图
 */
export const getBanner = () => {
  // return 的是 接口调用之后，axios 返回的 Promise 对象
  return request({
    url: '/api/comic_v2/getproad',
    method: 'GET',
    // 需要请求体参数，就提供 data
    // 需求查询字符串参数，就提供 params
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app',
      adgroupid: 123
    }
  })
}

/**
 * 获取首页推荐数据
 */
export const getIndexRecommend = () => {
  return request({
    url: '/api/comic_v2/customerview',
    method: 'GET',
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app',
      viewtype: 1
    }
  })
}

/// 获取首页每一个元素的接口  comic_v2/collectlist_bigbook
/// 需要去解密 /comic_v2/bigbooksource_v3?apptype=8&appversion=1.0&channel=web-app
export const gitHomelist = (bigbookid) => {
  return request({
    // url: '/api/comic_v2/bigbooksource_v3',
    url: '/api/comic_v2/bigbooksource_v3',
    method: 'POST',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app'
    },
    data: format({
      bigbookid: bigbookid
    })
  })
}

/**
 * 获取分类类型
 */
export const getTypes = () => {
  return request({
    url: '/api/comic_v2/getproad',
    method: 'GET',
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app',
      adgroupid: 125
    }
  })
}

/**
 * 获取分类数据
 * @param {String} subject 分类Id
 * @param {Number} pageno 当前页码
 * @param {Number} pagesize 每页显示条数
 */
export const getTypeList = (subject, pageno = 1, pagesize = 20) => {
  return request({
    url: '/api/comic_v2/comicsfilterlist_v2',
    method: 'POST',
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app'
    },
    // U26gHqCVIoAlThDANwSON1ymMzJ7zhCawvOXuOR+PUsm/QnfuvytxstXRqxFTAgt
    // =>
    // {
    //   subject: e,
    //   pageno: 1,
    //   pagesize: 20
    // }
    data: format({
      subject,
      pageno,
      pagesize
    })
  })
}

/**
 * 获取排行榜数据
 */
export const getRankList = (ranktype, pageno = 1, pagesize = 20) => {
  return request({
    url: '/api/comic_v2/comicsrank',
    method: 'POST',
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app',
      cpid: 0
    },
    data: format({
      ranktype,
      pageno,
      pagesize
    })
  })
}
// https://mhd.zhuishushenqi.com/comic/hotsearch?apptype=8&appversion=1.0&channel=web-app&appType=8
//
/**
 * 请求接口热门搜索
 */
export const grtHotSearch = (res) => {
  return request({
    url: '/api/comic/hotsearch',
    method: 'GET',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app',
      appType: '8'
    }
  })
}

/**
 * 请求接口输入框中结果的接口
 */
export const getindexSearch = (name) => {
  return request({
    url: '/api/comic_v2/searchindex',
    method: 'GET',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app',
      name: name,
      type: 2
    }
  })
}
/**
 * 请求搜索结果页面的的接口
 */
export const getSearchres = (name) => {
  return request({
    url: '/api/comic_v2/searchbookauthor',
    method: 'GET',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'wen-app',
      name: name,
      type: 2,
      pageno: 1,
      pagesize: 100
    }
  })
}
// vip 接口
//  /comic_v2/comicsfilterlist_v2?apptype=8&appversion=1.0&channel=web-app
export const gitViplist = (res) => {
  return request({
    url: '/api/comic_v2/comicsfilterlist_v2',
    method: 'POST',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app'
    },
    data: format({
      pageno: 1,
      pagesize: 15,
      special: 892
    })
  })
}
// 漫画详情页面的接口
// FROM DATA Scd743PP6cinUQV+B108QR2Qq3YeZKLMq/d4kIDzK/g=:
// /comic_v2/comicsdetail_v2?apptype=8&appversion=1.0&channel=web-app √
// https://m.manhuadao.cn/detail.html?bigbookid=110650&cpid=0
// /*https://m.manhuadao.cn/detail.html?bigbookid=13544&cpid=0
export const getDetailist = (bookstoreid) => {
  return request({
    url: '/api/comic_v2/comicsdetail_v2',
    method: 'POST',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app'
    },
    data: format({
      bigbookid: bookstoreid
    })
  })
}
/* https://mhd.zhuishushenqi.com/comic_v2/comicsdetail_v2?apptype=8&appversion=1.0&channel=web-app
** 请求详情页 的数据 getIntroduction
* */
export const getIntroduction = (bookstoreid) => {
  return request({
    url: '/api/comic_v2/comicsdetail_v2',
    method: 'POST',
    params: {
      apptype: 8,
      appversion: 1.0,
      channel: 'web-app'
    },
    data: format({
      bigbookid: bookstoreid
    })
  })
}
/* 获取用户评论信息 {"type":3,"pageno":1,"pagesize":20,"userid":"206335792","bigbookid":"13544"}:
** https://mhd.zhuishushenqi.com/comic_v2/bloglist?apptype=8&appversion=1.0&channel=web-app&type=3&pageno=1&pagesize=20&userid=206335792&bigbookid=13544
* */
export const getUserevaluate = (userid, bookstoreid) => {
  return request({
    url: '/api/comic_v2/bloglist',
    method: 'POST',
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app'
    },
    // 这个口不需要去解码不用format*
    data: {
      type: 3,
      pageno: 1,
      pagesize: 20,
      userid: userid,
      bigbookid: bookstoreid
    }
  })
}

/* 获取热门推荐的接口 {"bigbookid":["13544"],"authorname":[12384267],"subjectname":["热血"]}:
** https://mhd.zhuishushenqi.com/comic_v2/gltj?apptype=8&appversion=1.0&channel=web-app
* */
export const hotRecommend = (authorname, subjectname, bookstoreid) => {
  return request({
    url: '/api/comic_v2/gltj',
    method: 'POST',
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app'
    },
    // 这个口不需要去解码不用format*
    data: {
      subjectname: subjectname,
      authorname: authorname,
      bigbookid: bookstoreid
    }
  })
}
