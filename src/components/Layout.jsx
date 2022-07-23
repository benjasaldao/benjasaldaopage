import React, { useEffect, useState } from 'react';
import Header from './Header';
import MenuMobile from './MenuMobile';
import MenuButton from './MenuButton';

const Layout = ({ children }) => {
  const [path, setPath] = useState('');
  useEffect(() => {
    setPath(window.location.pathname);
  }, []);
  if (path === '/') {
    return (
      <>
        <MenuMobile />
        {children}
        <MenuButton />
      </>
    );
  }
  return (
    <>
      <Header />
      <MenuMobile />
      {children}
      <MenuButton />
    </>
  );
};

export default Layout;
