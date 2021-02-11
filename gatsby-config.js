require(`dotenv`).config({
  path: `.env`
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    siteTitle: `BOUND Plyobox`,
    siteTitleAlt: `BOUND Plyobox - Strong Plyo Boxes built in the USA`,
    siteHeadline: `Strong Plyo Boxes built in the USA`,
    siteUrl: `https://www.boundplyobox.com/`,
    author: `Bound Plyobox`,
    siteDescription: `Highly-Rated, Strong Plyo Boxes built in Tulsa, Oklahoma`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `PRODUCTS`,
            slug: `/products`
          },
          {
            title: `ASSEMBLY`,
            slug: `/assembly`
          },
          {
            title: `ABOUT`,
            slug: `/about`
          }
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/boundplyobox`
          },
          {
            name: `Instagram`,
            url: `https://instagram.com/boundplyobox`
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bound Plyobox - Strong Plyometric Boxes`,
        short_name: `Bound Plyobox`,
        description: `Highly-Rated Plyo Box built in Tulsa, Oklahoma`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false
      }
    }
  ].filter(Boolean)
};
