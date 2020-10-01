import CMS from 'netlify-cms-app';
import config from '../../../config.json';
import { CmsBackend } from 'netlify-cms-core';
import { SiteConfig } from '../types';
import { isProduction } from '../helpers/common';
import { PostPreview } from './preview-templates';
import withStyled from './withStyled';

// workaround (see https://github.com/gatsbyjs/gatsby/issues/19898)
if (typeof window !== 'undefined') {
  // @ts-ignore
  window.___loader = { enqueue: () => {}, hovering: () => {} };
}

const { contentRepo } = config as SiteConfig;

const backendDev: CmsBackend = {
  name: 'test-repo',
};

const backendProd: CmsBackend = {
  name: 'git-gateway',
  repo: contentRepo,
};

/** Here we register certain instances in our Netlify CMS environment such as:
 * - Control Widgets for the input fields.
 * - Preview Templates for the Preview Pane on the right hand side.
 * - Backend Systems, based on the environment we are using.
 */

/** Registering a backend from the file system in case of development env.  */

/** Registering our fonts in the Preview Pane */

/** Registering Blog Post Preview Template in the Preview Pane with styled-components support */
CMS.registerPreviewTemplate('posts', withStyled(PostPreview));

/** Initting the CMS with the right backend. */
CMS.init({
  config: {
    backend: isProduction() ? backendProd : backendDev,
    collections: [
      {
        name: 'posts',
        label: 'Posts',
      },
      {
        name: 'authors',
        label: 'Authors',
      },
      {
        name: 'categories',
        label: 'Categories',
      },
    ],
  },
});
