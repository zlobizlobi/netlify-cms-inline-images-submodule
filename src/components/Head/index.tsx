import React, { FC } from 'react';
import Helmet from 'react-helmet';

interface HeadProps {
  type?: string | null;
  links?: Array<{
    rel?: string | null;
    type?: string | null;
    hreflang?: string | null;
    href?: string | null;
  } | null>;
  image?: string | null;
  title?: string | null;
  description?: string | null;
}

const Head: FC<HeadProps> = ({
  title,
  description,
  image,
  type,
  children,
  links = [],
}) => (
  <Helmet>
    <html />
    <title>{`CV Maker | ${title || 'Home'}`}</title>
    <meta name="description" content={description || ''} />
    <meta name="twitter:title" content={title || ''} />
    <meta name="twitter:description" content={description || ''} />
    <meta
      name="twitter:image"
      content={image || 'https://www.cvmaker.nl/images/branding/cvmaker@2x.png'} //TODO:Refactor to use correct domain
    />
    <meta property="og:title" content={title || ''} />
    <meta property="og:description" content={description || ''} />
    <meta property="og:type" content={type || 'website'} />
    <meta
      property="og:image"
      content={image || 'https://www.cvmaker.nl/images/branding/cvmaker@2x.png'} //TODO: Refactor to use correct domain
    />
    {links?.map((props, index) => (
      <link
        key={index}
        rel={props?.rel || ''}
        type={props?.type || ''}
        href={props?.href || ''}
        hrefLang={props?.hreflang || ''}
      />
    ))}
    {children}
  </Helmet>
);

export default Head;
