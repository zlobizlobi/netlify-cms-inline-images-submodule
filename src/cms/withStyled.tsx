import React, { useState, useEffect, FC } from 'react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

const StyleInjector: FC = ({ children }) => {
  const [iframeRef, setIframeRef] = useState<HTMLHeadElement | null>(null);

  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>(
      'iframe[class*="PreviewPaneFrame"]'
    );

    setIframeRef(iframe?.contentDocument?.head || null);
  }, []);

  return (
    iframeRef && (
      <StyleSheetManager target={iframeRef}>
        <ThemeProvider theme={{}}>{children}</ThemeProvider>
      </StyleSheetManager>
    )
  );
};

const withStyled = (Comp: FC<any>): FC => (props) => (
  <StyleInjector>
    <Comp {...props} />
  </StyleInjector>
);

export default withStyled;
