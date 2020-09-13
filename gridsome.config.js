// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      // options: {
      //   modulePath: `src/cms/index.js`,
      //   configPath: `src/cms/config.yml`,
      //   htmlPath: `src/cms/index.html`,
      //   publicPath: `/cms`,
      //   htmlTitle: `My CMS`,
      //   enableIdentityWidget: false,
      // },
    },
  ],
}
