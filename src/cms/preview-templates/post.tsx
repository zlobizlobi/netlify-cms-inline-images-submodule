import React, { FC } from 'react';
import MDX from '@mdx-js/runtime';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import { MDX_SHORTCODES } from '../constants';
import PostTemplate from '../../templates/Post';

const PostPreview: FC<PreviewTemplateComponentProps> = ({
  entry,
  getAsset,
}) => {
  const { body, mainImage, authorAvatar, ...frontmatter } = entry
    .getIn(['data'])
    .toJS();

  const previewCoverImage = getAsset(mainImage);

  const previewAuthorAvatar = getAsset(authorAvatar);

  const copyFrontmatter = { ...frontmatter };

  // @ts-ignore // TODO: type. url does not exist on previewAssets because it's a promise.
  copyFrontmatter.mainImage = previewCoverImage.url;

  // @ts-ignore // TODO: type. url does not exist on previewAssets because it's a promise.
  copyFrontmatter.authorAvatar = previewAuthorAvatar.url;

  console.log(body);
  return (
    <PostTemplate frontmatter={copyFrontmatter}>
      <MDX components={MDX_SHORTCODES}>{body}</MDX>
    </PostTemplate>
  );
};

export default PostPreview;
