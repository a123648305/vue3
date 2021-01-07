module.exports = {
    plugins: {
      'autoprefixer': {
        browsers: ['Android >= 4.0', 'iOS >= 7']
      },
      'postcss-pxtorem': {
        rootValue: 37.5,//结果为：设计稿元素尺寸/75，比如元素宽750px,最终页面会换算成 10rem
        propList: ['*'],
        unitPrecision: 2, // 转换成rem单位的小数点后的保留位数
        selectorBalckList: ['.van'], // 匹配不被转换为rem的选择器
      }
    }
  }

  