module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
    },
  },
  lintOnSave: false,
  // // 开启代理服务器(1)
  //  devServer: {
  //   proxy: 'http://localhost:5000'
  // },
  //开启代理服务器（方式2）
  devServer: {
    proxy: {
      '/atguigu': {
        target: 'http://localhost:5000',
        pathRewrite: { '^/atguigu': '' },
        // ws: true,
        // changeOrigin: true
      },
        '/demo': {
          target: 'http://localhost:5001',
          pathRewrite: { '^/demo': '' },
          // ws: true,
          // changeOrigin: true
        },
        // // '/foo': {
        // target: '<other_url>'
      }
    }
  }


