// 1. npm install postcss-pxtorem

// 2.文件自动转换程 px--> rem
//  3.PS: 如果希望某个样式的 px 不进行转换的化，将 px 写成 大写的 PX 即可
module.exports = {
  plugins: {
    autoprefixer: {
      // 不需要设置 browsers 属性了，它会自动去读取 .browserslistrc 配置文件

      // browsers: ['Android >= 4.0', 'iOS >= 8'],
    },

    'postcss-pxtorem': {
      // 转换的基准值 1rem = 37.5px
      // xrem = 44px
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
