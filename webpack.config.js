const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/App.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.js'
    },
    module: {
      rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
              "babel-loader",
              "eslint-loader",
            ]
        },
        {
            test: /\.html$/,
            use: [ {
                loader: "html-loader"
            } ]
        },
        {
            test: /\.(woff|woff2)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name]__[hash:8].[ext]',
                }
              }
            ]
          },
        {
            test: /.scss/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  modules: true,
                  localIdentName: '[local]__[hash:6]',
                },
              },
              'postcss-loader',
              'sass-loader',
            ],
          },
      ]
    },
    plugins: [
        new HtmlWebPackPlugin( {
            template: "./src/index.html",
            filename: "./index.html"
        } )
    ]
  };