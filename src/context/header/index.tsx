import { HeaderContextProps } from './types';
import React, { FC, useState, useContext, createContext } from 'react';

const HeaderContext = createContext<HeaderContextProps>({
  isMenuOpen: false,
  handleIsMenuOpen: () => null,
});

export const HeaderProvider: FC<{}> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <HeaderContext.Provider
      value={{
        isMenuOpen,
        handleIsMenuOpen: () => {
          document.body.classList.toggle('no-scroll');
          setIsMenuOpen(!isMenuOpen);
        },
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = () => useContext(HeaderContext);
