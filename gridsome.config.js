// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Skatenet',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: '92zv9nv75uju', // required
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful',
      },
    },
  ],
}
