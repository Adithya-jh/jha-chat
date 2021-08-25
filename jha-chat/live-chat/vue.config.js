module.exports = {
    chainWebpack: config => {
      // GraphQL Loader
      config.module
        .rule('raw-loader')
        .test( /\.(glsl|frag|vert)$/i)
        .use('raw-loader')
          .loader('raw-loader')
          .end()
    //     // Add another loader
    //     .use('other-loader')
    //       .loader('other-loader')
    //       .end()
     }
  }