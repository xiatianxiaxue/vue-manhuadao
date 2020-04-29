// 项目的配置文件

module.exports = {
  devServer: {
    proxy: {
      // key: value
      //      key - 前缀
      //      value - 是跟 http-proxy-middleware 相同的一个配置对象
      '/api': {
        target: 'https://mhd.zhuishushenqi.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },

      '/pay': {  // https://pay.manhuadao.cn
        target: 'https://pay.manhuadao.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/pay': ''
        }
      },

      '/migu': {
        // 目标地址，只写主机
        target: 'http://movie.miguvideo.com',
        changeOrigin: true,
        pathRewrite: {
          '^/migu': ''
        }
      },

	  '/manhua': {
	    // 目标地址，只写主机
	    target: 'https://m.manhuadao.cn',
	    changeOrigin: true,
	    pathRewrite: {
	      '^/manhua': ''
	    }
	  }
    }
  }
}
