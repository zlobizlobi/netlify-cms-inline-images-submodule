import React, { FC } from 'react';
import Head from 'src/components/Head';
import { PostLayout } from 'src/components/Layouts';
import {
  SitePageContext,
  SitePageContextPosts,
  Maybe,
} from '../../../graphql-types';

export interface BlogCategoryPageProps {
  pageContext: SitePageContext;
}

const BlogCategoryPage: FC<BlogCategoryPageProps> = ({ pageContext }) => (
  <PostLayout>
    <Head title={`Blog - ${pageContext.category}`} />
    {pageContext?.posts
      ?.map((post: Maybe<SitePageContextPosts>) => post?.frontmatter?.title)
      .join(', ')}
  </PostLayout>
);

export default BlogCategoryPage;
