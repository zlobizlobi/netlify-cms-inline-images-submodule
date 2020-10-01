import React, { FC, ReactNode } from 'react';
import Head from 'src/components/Head';
import Img, { FluidObject } from 'gatsby-image';
import { MdxFrontmatter } from '../../graphql-types';

interface PostTemplateProps {
  frontmatter: MdxFrontmatter;
  children: ReactNode;
}

const PostTemplate: FC<PostTemplateProps> = ({ frontmatter, children }) => {
  const {
    metaTitle,
    metaDescription,
    metaLinks,
    mainImage,
    mainImageAltText,
    authorName,
    authorAvatar,
    title,
    date,
    categories,
  } = frontmatter;

  const fluid = mainImage?.childImageSharp?.fluid;
  console.log(categories, date, authorAvatar);

  return (
    <>
      <Head
        description={metaDescription}
        title={metaTitle}
        links={metaLinks || []}
      />
      <div
        style={{
          marginBottom: '60px',
          width: '100%',
          maxWidth: '1240px',
          display: 'flex',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50%',
          }}
        >
          <h1>{title}</h1>
          <h3>by {authorName}</h3>
        </div>
        {typeof mainImage === 'string' ? (
          <img
            src={mainImage}
            style={{ width: '50%' }}
            alt={mainImageAltText || ''}
          />
        ) : (
          <Img
            style={{ width: '50%' }}
            alt={mainImageAltText || ''}
            fluid={fluid as FluidObject} // Assertion as gatsby-plugin-graphql-codegen generates an ImageSharpFluid typing. Might be possible to configure the codegen?
          />
        )}
      </div>
      <div
        style={{
          maxWidth: '760px',
          flexDirection: 'column',
          alignSelf: 'center',
        }}
      >
        {children}
      </div>
    </>
  );
};

export default PostTemplate;
