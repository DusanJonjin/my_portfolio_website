module.exports = {
  siteMetadata: {
    title: `D.J.'s Portfolio`,
    description: `Dusan Jonjin's portfolio website. Short presentation of me and projects that I've made. Made with Gatsby JS`,
    author: `Dusan Jonjin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-preload-fonts`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo_DJ_black.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
