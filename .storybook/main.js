module.exports = {
  stories: [
    "../components/**/*.stories.@(mdx|js|jsx|ts|tsx)",
    "../pages/**/*.stories.@(mdx|js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  // webpackFinal: async (config) => {
  //   config.module.rules.push({
  //     test: /\.css$/,
  //     use: [
  //       {
  //         loader: 'postcss-loader',
  //         options: {
  //           ident: 'postcss',
  //           plugins: [
  //             require('tailwindcss'),
  //             require('autoprefixer'),
  //           ],
  //         },
  //       },
  //     ],
  //     include: path.resolve(__dirname, '../'),
  //   })
  //   return config
  // },
};
