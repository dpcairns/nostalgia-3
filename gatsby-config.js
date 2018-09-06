module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
      {
        resolve: `gatsby-source-wordpress`,
        options: {
          baseUrl: `46.101.187.207`,
          hostingWPCOM: false,
          useACF: true,
          verboseOutput: true
      },
    },
  ],
}
