const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

//loaders we use
  // for react loader
// "@babel/core": "^7.23.5",
// "@babel/preset-env": "^7.23.5",
// "@babel/preset-react": "^7.23.3",
//"babel-loader": "^9.1.3",
  // for css loader
    //style-loader
    //css-loader

//plugin we use 
// "html-webpack-plugin": "^5.5.3", // html reader

//webpack lib
// "webpack": "^5.89.0", //webpack common library
//  "webpack-cli": "^5.1.4", // webpack command line interface
//  "webpack-dev-server": "^4.15.1" //live reload



module.exports = {
    // the mode of webpack , production/development, can be used in package.json
    mode:'development',
    entry: './src/Index.jsx',

    // allow webpack devserver hmr (hot module reloading)
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
          },
        port: 8080,
        open: true,
        compress: true,
        hot: true,
        historyApiFallback: true
      },

    // the output if the module is build
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
      },

      // loader to understand react using babel
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env','@babel/preset-react']
                }
            },
          },

          // css loader
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
      // allow webpack to understand html
      plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'app/index.html'), // Specify the path to your HTML template
          inject: true
        }),
      ],
      
}