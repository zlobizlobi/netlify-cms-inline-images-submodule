const path = require('path');

exports.createPages = async ({ actions, getNodesByType, getNode }) => {
  const { createPage } = actions;

  const mdxNodes = getNodesByType('Mdx');

  const getNodesByParentFolder = (folderName) =>
    mdxNodes.filter(
      (node) => getNode(node.parent).sourceInstanceName === folderName
    );

  const posts = getNodesByParentFolder('posts');

  const categories = getNodesByParentFolder('categories');

  // build blog posts pages
  posts.forEach((post) => {
    const { id, frontmatter } = post;

    createPage({
      path: `blog${frontmatter.slug}`,
      component: path.resolve(`./src/pages/blog/Post.tsx`),
      context: { id },
    });
  });

  // build blog category pages
  categories.forEach(({ frontmatter }) => {
    const { label, name } = frontmatter;

    createPage({
      path: `/blog/${label}`,
      component: path.resolve(__dirname, './src/pages/blog-category/index.tsx'),
      context: {
        posts: posts.filter((post) =>
          post.frontmatter.categories.includes(frontmatter.name)
        ),
        category: name,
      },
    });
  });
};

exports.onCreateDevServer = ({ app }) => {
  const fsMiddlewareAPI = require('./src/helpers/fsExpressApi.js');

  fsMiddlewareAPI(app);
};

exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const parentNodeSourceName = getNode(node.parent).sourceInstanceName;

    // Create sourceName node based on the parent folder for all MDX files so we can filter our queries on it.
    parentNodeSourceName &&
      (await createNodeField({
        node,
        name: 'sourceName',
        value: parentNodeSourceName,
      }));
  }
};
