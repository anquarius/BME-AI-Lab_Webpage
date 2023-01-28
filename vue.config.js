const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // Migration: vue 2 to vue 3
  // chainWebpack: (config) => {
  //   config.resolve.alias.set('vue', '@vue/compat')

  //   config.module
  //     .rule('vue')
  //     .use('vue-loader')
  //     .tap((options) => {
  //       return {
  //         ...options,
  //         compilerOptions: {
  //           compatConfig: {
  //             MODE: 2
  //           }
  //         }
  //       }
  //     })
  // }
})
