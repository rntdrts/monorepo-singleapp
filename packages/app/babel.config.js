const path = require('path');

module.exports = {
  presets: ['@babel/preset-react', 'module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver',
      {
        alias: {
          '@geekuendo/shared': path.resolve(__dirname, '../shared/src')
        },
      },
    ],
    "@babel/plugin-transform-runtime",
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    "transform-async-generator-functions",
    ["transform-class-properties", { loose: true }]
  ],
};
