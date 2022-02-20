module.exports = {
  publicPath: "/the-hanging-tree/",

  chainWebpack: (config) => {
    config.performance.maxEntrypointSize(512000).maxAssetSize(512000);
  },

  pwa: {
    name: 'The Hanging Tree'
  }
};
