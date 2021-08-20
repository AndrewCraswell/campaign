const path = require("path");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const {
  title,
  keywords,
  description,
  author,
  defaultLang,
  trackingId,
} = require("./config/site");

module.exports = {
  siteMetadata: {
    title,
    keywords,
    description,
    author,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/`,
      },
    },

    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `william-for-mayor`,
        accessToken: `MC5ZUm9LOUJJQUFDb0E1SlE1.77-977-9Rkfvv71-VjXvv73vv73vv73vv71q77-9EzgSKO-_vWoZ77-9XHsu77-9DO-_vW9-LO-_vQ`,
        // linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
        schemas: {
          about: require("./custom_types/about.json"),
          blogs: require("./custom_types/blogs.json"),
          herosection: require("./custom_types/heroSection.json"),
          "hero-section": require("./custom_types/about.json"),
          coverimagesection:require("./custom_types/coverImageSection.json"),
          vision:require("./custom_types/vision.json"),
          goals:require("./custom_types/goals.json"),
          experience:require("./custom_types/experience.json"),
          homeseo:require("./custom_types/homeSEO.json"),
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId,
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: title,
        short_name: "Agency",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#fed136",
        display: "minimal-ui",
        icon: "content/assets/gatsby-icon.png",
      },
    },
    "gatsby-transformer-remark",
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "markdown",
    //     path: `${__dirname}/content`,
    //   },
    // },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "images",
    //     path: `${__dirname}/content/assets/images`,
    //   },
    // },
    "gatsby-plugin-eslint",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-sharp",
      options: {
        checkSupportedExtensions: false,
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        data: `@import "core.scss";`,
        includePaths: [path.resolve(__dirname, "src/style")],
      },
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        preconnect: ["https://fonts.gstatic.com"],
        web: [
          {
            name: "Droid Sans",
            file:
              "https://fonts.googleapis.com/css2?family=Droid+Sans&display=swap",
          },
          {
            name: "Montserrat",
            file:
              "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap",
          },
          {
            name: "Kaushan Script",
            file:
              "https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap",
          },
          {
            name: "Roboto Slab",
            file:
              "https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: defaultLang,
        useLangKeyLayout: false,
        pagesPaths: ["/content/"],
      },
    },
  ],
};
