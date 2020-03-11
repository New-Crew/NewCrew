const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/App.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      // {
      //   test: /\.css$/i,
      //   use: ['style-loader', 'css-loader']
      // }
    ]
  },
  devServer: {
    publicPath: '/dist',
    // port: 8080,
    proxy: {
      '/': 'http://localhost:3000'
    }
  }
};
