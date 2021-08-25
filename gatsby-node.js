const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
    allPrismicBlogs {
        nodes {
          id
        }
      }
    }
  `);


  result.data.allPrismicBlogs.nodes.forEach((node) => {
    createPage({
      path: `/blog-details/${node.id}`,
      component: path.resolve(`./src/templates/blog-details.js`),
      context: {
        id: node.id,
      },
    });
  });
};
