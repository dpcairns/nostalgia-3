module.exports = {
  siteMetadata: {
    title: 'Nostalgia Site 3',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
      {
        resolve: `gatsby-source-wordpress`,
        options: {
          baseUrl: `46.101.251.228/nostalgia-3/index.php`,
          protocol: `http`,
          hostingWPCOM: false,
          useACF: true,
      },
    },
  ],
}
