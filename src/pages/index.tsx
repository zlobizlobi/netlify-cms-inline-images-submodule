import { graphql } from 'gatsby';
import React, { FC } from 'react';
import { DefaultLayout } from 'src/components/Layouts';
import { IndexQuery } from '../../graphql-types';

export interface IndexPageProps {
  data: IndexQuery;
}

const IndexPage: FC<IndexPageProps> = () => (
  <DefaultLayout>
    <h1>Hello world</h1>
  </DefaultLayout>
);

export default IndexPage;

export const pageQuery = graphql`
  query Index {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
