import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MDX_SHORTCODES } from './src/cms/constants';
import { MDXProvider } from '@mdx-js/react';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={{}}>
    <MDXProvider components={MDX_SHORTCODES}>{element}</MDXProvider>
  </ThemeProvider>
);
