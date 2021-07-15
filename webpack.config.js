const path = require('path');

const res = p => path.resolve(__dirname, '..', '..', p);

module.exports = () => {
  return {
    entry: {
      index: './src/index.js',
      'component/button': './src/base-components/button/index.js',
      'component/heading': './src/base-components/heading/index.js',
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react']
            }
          }
        },
        {
          test: /\.scss$/,
          use: [{
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }]
        }
      ]
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: "umd",
      library: "my-design-system"
    },
    optimization:{
      minimize: false,
    },
    externals: [
      'react'
    ],
  }
}