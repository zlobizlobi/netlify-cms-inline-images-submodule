import { graphql } from 'gatsby';

export const Fragments = graphql`
  fragment CategoryEdges on MdxConnection {
    edges {
      node {
        frontmatter {
          name
          label
        }
      }
    }
  }

  fragment PostEdges on MdxConnection {
    edges {
      node {
        id
        body
        frontmatter {
          slug
          title
          date
          metaTitle
          authorAvatar {
            publicURL
          }
          authorName
          metaLinks {
            rel
            href
            hreflang
          }
          metaDescription
          categories
          mainImage {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          mainImageAltText
        }
      }
    }
  }
`;
