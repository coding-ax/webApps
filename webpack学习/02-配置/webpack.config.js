const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"), //动态的获取路径（必须用绝对路径，涉及到node)
    filename: "bundle.js",
    publicPath: "dist/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //css-loader只负责将CSS文件进行加载
        //style-loader负责将样式添加到DOM
        //使用多个loader时，数组读取从右到左
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 15000,
              name: "img/[name].[hash:8].[ext]"
            }
          }
        ]
      },
      {
        test: /\.js$/,
        //exclude:排除 -include:包含
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      }
    ]
  },
  //设置使用vue
  resolve: {
    //别名
    extensions:[".js",".vue",".css"],
    alias: {
      'vue$':'vue/dist/vue.esm.js'
    }
  },
};
