const path = require('path');

/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
module.exports = {
  watchFolders: [
    path.resolve(__dirname, '../shared'),
  ],
  resolver: {
    extraNodeModules: new Proxy({}, {
      get: (_, name) =>  path.join(process.cwd(), `node_modules/${name}`)
    }),
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
