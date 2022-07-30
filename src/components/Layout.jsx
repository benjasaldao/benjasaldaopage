import React from 'react';
import { useRouter } from 'next/router';
import Header from './Header';
import MenuMobile from './MenuMobile';
import MenuButton from './MenuButton';
import Footer from './Footer';

const Layout = ({ children }) => {
  const router = useRouter();

  if (router.pathname === '/') {
    return (
      <>
        <MenuMobile />
        {children}
        <MenuButton />
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header />
      <MenuMobile />
      {children}
      <MenuButton />
      <Footer />
    </>
  );
};

export default Layout;
