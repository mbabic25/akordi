import React from "react";
import { graphql } from "gatsby";
import { BlogIndex } from "components";

export default ({
  data: {
    allMarkdownRemark: { edges: posts } // Rename edges to posts
  }
}) => {
  return (
    <>
      <h1 id="naslov_novosti">Novosti</h1>
      <BlogIndex posts={posts} />
    </>
  );
};

export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            slug
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`;
