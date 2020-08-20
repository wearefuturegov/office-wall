require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `FG People Wall`,
    description: `A quick mashup between airtable and gatsby to try and re-create our office wall of people and their fun facts.`,
    author: `@_disco`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `FG-Office-Wall`,
        short_name: `FG Wall`,
        start_url: `/`,
        background_color: `#e53094`,
        theme_color: `#e53094`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY, // may instead specify via env, see below
        concurrency: 10, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: `app0ViB59N0ZDNk6f`,
            tableName: `futuregovers`,
            tableView: `gridview`, // optional
            mapping: { picture: `fileNode` }, // optional, e.g. "text/markdown", "fileNode"
            defaultValues: {
              // currently does not accept null / undefined. use empty string instead
              // and perform your conditional logic on name_of_field.length > 0 ? condition_1 : condition_2
              awesomeAt: ``,
              twitterUsername: `n/a`,
              jobRole: ``,
              name: ``,
              randomFact: ``,
              // ... etc
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-no-index`,
  ],
}
