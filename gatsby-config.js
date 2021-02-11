require(`dotenv`).config({
<<<<<<< HEAD
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Minimal Blog - Gatsby Theme`,
=======
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
>>>>>>> 61e858d (fix(config): add config)
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
<<<<<<< HEAD
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
=======
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
>>>>>>> 61e858d (fix(config): add config)
        ],
        externalLinks: [
          {
            name: `Twitter`,
<<<<<<< HEAD
            url: `https://twitter.com/lekoarts_de`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/lekoarts.de/`,
          },
        ],
      },
=======
            url: `https://twitter.com/boundplyobox`
          },
          {
            name: `Instagram`,
            url: `https://instagram.com/boundplyobox`
          }
        ]
      }
>>>>>>> 61e858d (fix(config): add config)
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
<<<<<<< HEAD
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
=======
        trackingId: process.env.GOOGLE_ANALYTICS_ID
      }
>>>>>>> 61e858d (fix(config): add config)
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
<<<<<<< HEAD
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
=======
        name: `Bound Plyobox - Strong Plyometric Boxes`,
        short_name: `Bound Plyobox`,
        description: `Highly-Rated Plyo Box built in Tulsa, Oklahoma`,
>>>>>>> 61e858d (fix(config): add config)
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
<<<<<<< HEAD
            type: `image/png`,
=======
            type: `image/png`
>>>>>>> 61e858d (fix(config): add config)
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
<<<<<<< HEAD
            type: `image/png`,
          },
        ],
      },
=======
            type: `image/png`
          }
        ]
      }
>>>>>>> 61e858d (fix(config): add config)
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
<<<<<<< HEAD
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
=======
        openAnalyzer: false
      }
    }
  ].filter(Boolean)
};
>>>>>>> 61e858d (fix(config): add config)
