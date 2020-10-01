module.exports = {
  siteMetadata: {
    title: 'Test',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: '../static/media',
        name: 'media',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: '../content/_posts',
        name: 'posts',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          'posts': require.resolve('./src/components/Layouts/Post.tsx'),
          'default': require.resolve('./src/components/Layouts/Default.tsx'),
        },
        gatsbyRemarkPlugins: [
          `gatsby-remark-unwrap-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              quality: 100,
              withWebp: true,
              maxWidth: 760,
              linkImagesToOriginal: false,
              wrapperStyle: 'width: 100%;',
            },
          },
        ],
      },
    },
    `babel-plugin-styled-components`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-root-import`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        manualInit: true,
        modulePath: `${__dirname}/src/cms/init.tsx`,
        enableIdentityWidget: true,
        customizeWebpackConfig: (config) => (config.node.fs = 'empty'),
      },
    },
  ],
};
