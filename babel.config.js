module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: './assets',
            components: './src/components',
            config: './src/config',
            navigation: './src/navigation',
            screens: './src/screens',
            utils: './src/utils',
          },
        },
      ],
    ],
  };
};
