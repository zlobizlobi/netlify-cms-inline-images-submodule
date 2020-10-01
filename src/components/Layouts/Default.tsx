import React, { FC, Fragment } from 'react';
import favicon from 'src/images/branding/cvmaker@2x.png';
import Helmet from 'src/components/Head';

const DefaultLayout: FC = ({ children }) => (
  <Fragment>
    <Helmet
      links={[
        {
          rel: 'shortcut icon',
          type: 'image/png',
          href: favicon,
        },
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://static.cvmaker.com/fonts/all-webfonts.css',
        },
      ]}
    />
    {children}
    {/* <Footer /> */}
  </Fragment>
);

export default DefaultLayout;
