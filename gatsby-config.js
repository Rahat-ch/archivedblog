//gatsby-confic.js
module.exports = {
  siteMetadata: {
    title: 'Rahat-Codes Blog',
    description: 'The official Blog of Rahat Chowdhury.',
  },
  plugins: [
  'gatsby-plugin-catch-links',
  'gatsby-plugin-sharp',
  {
    resolve: 'gatsby-plugin-typography',
    options: {
      pathToConfigModule: 'config/typography.js',
    },
  },
  'gatsby-transformer-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              quality: 90,
              linkImagesToOriginal: true,
            }
          }
        ]
      }
    },
  'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`
      }
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    }
  ]
}
