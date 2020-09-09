/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */




module.exports = {
  siteMetadata: {
    title: `Mike Winer - Web Developer`,
    description: "Full-Stack Web Developer and Digital Designer from Toronto, Canada",
    author: "Mike Winer",
    keywords: [ "Web Developer", 'full Stack', 'front-end', 'back-end', 'javascript', 'html', 'css', 'python', 'react', 'gatsby'],
    siteUrl: "https://mikewiner.github.io/gatsby-portfolio/"
  },

  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Portfolio Website",
        short_name: "portfolio-site",
        start_url: "/",
        background_color: "#5ed8d8",
        theme_color: "#5ed8d8",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "./src/data/svg/thik-logo.svg", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-173911793-2",
        head: true,
        anonymize: true,
      },
    },
  ]

}


