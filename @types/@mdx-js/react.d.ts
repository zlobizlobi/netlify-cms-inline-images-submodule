declare module '@mdx-js/react' {
  import * as React from 'react';

  export type ComponentType =
    | 'a'
    | 'blockquote'
    | 'code'
    | 'em'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'hr'
    | 'img'
    | 'li'
    | 'ol'
    | 'p'
    | 'pre'
    | 'strong'
    | 'sup'
    | 'table'
    | 'td'
    | 'tr'
    | 'ul';

  export type Components = {
    [key in ComponentType]?: React.ComponentType<{ children: React.ReactNode }>;
  };

  export interface MDXProviderProps {
    children: React.ReactNode;
    components: Components;
  }

  export class MDXProvider extends React.Component<MDXProviderProps> {}
}
