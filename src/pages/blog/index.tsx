import React, { FC } from 'react';
import Head from 'src/components/Head';
import { PostLayout } from 'src/components/Layouts';

const Blog: FC = () => (
  <PostLayout>
    <Head title="Blog" />
  </PostLayout>
);

export default Blog;
