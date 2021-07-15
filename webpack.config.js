const path = require('path');

const res = p => path.resolve(__dirname, '..', '..', p);

module.exports = () => {
  return {
    entry: {
      index: './src/index.js',
      'base-component/button': './src/base-components/button/index.js',
      'base-component/heading': './src/base-components/heading/index.js',
      'base-component/paragraph': './src/base-components/paragraph/index.js',
      'base-component/shape': './src/base-components/shape/index.js',
      'base-component/subtitle': './src/base-components/subtitle/index.js',
      'component/cardContent': './src/components/cardContent/index.js',
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