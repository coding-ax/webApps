const path=require('path')

module.exports = {
    entry:'./src/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),//动态的获取路径（必须用绝对路径，涉及到node)
        filename:'bundle.js'
    },
    module: {
        rules: [
          {
                test: /\.css$/,
              //css-loader只负责将CSS文件进行加载
              //style-loader负责将样式添加到DOM
              //读取数组从右到左
            use: [ 'style-loader', 'css-loader' ]
          }
        ]
      }
}