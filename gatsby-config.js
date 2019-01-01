//gatsby-confic.js
module.exports = {
  siteMetadata: {
    title: 'Rahat-Codes Blog',
    description: 'The official Blog of Rahat Chowdhury.',
  },
  plugins: [
  'gatsby-plugin-catch-links',
  'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`
      }
    }
  ]
}
