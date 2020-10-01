import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { PostTemplate } from '../../templates';
import { MdxFrontmatter, BlogPostQuery } from '../../../graphql-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { PostLayout } from 'src/components/Layouts';

interface BlogPostPageProps {
  data: BlogPostQuery;
}

const BlogPostPage: FC<BlogPostPageProps> = ({ data }) => {
  const mdxValues = data.mdx;

  return (
    <PostLayout>
      <PostTemplate frontmatter={mdxValues!.frontmatter as MdxFrontmatter}>
        {' '}
        {/** TODO: Type properly. */}
        <MDXRenderer>{mdxValues!.body}</MDXRenderer>
      </PostTemplate>
    </PostLayout>
  );
};

export const pageQuery = graphql`
  query BlogPost($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        slug
        title
        date
        authorAvatar {
          publicURL
        }
        authorName
        metaTitle
        metaDescription
        metaLinks {
          rel
          href
          hreflang
        }
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
`;

export default BlogPostPage;
