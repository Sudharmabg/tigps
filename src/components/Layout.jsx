import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

function Layout({ children }) {
  const { schoolId } = useParams();

  return (
    <>
      <Header schoolId={schoolId} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
