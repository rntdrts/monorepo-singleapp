const path = require('path');
const plugins = require('./webpack.plugins');

module.exports = env => ({
  plugins: plugins(env), // important to be the first config to load the .env configuration
  entry: {
    main: './src/index.js',
    background: './src/background.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, '../shared/src'),
          path.resolve(__dirname, 'src')
        ],
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  resolve: {
    alias: {
      '@geekuendo/web': path.join(__dirname, 'src'),
      '@geekuendo/shared': path.resolve(__dirname, '../shared/src'),
      'react-native': 'react-native-web'
    },
    extensions: ['.web.js', '.js']
  }
});
