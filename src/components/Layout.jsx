import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

function Layout({ children }) {
  const { schoolId } = useParams();
  const location = useLocation();
  
  // For specific school routes, hardcode the schoolId
  let finalSchoolId = schoolId;
  if (location.pathname.startsWith('/schools/alipurduar')) {
    finalSchoolId = 'alipurduar';
  }
  if (location.pathname.startsWith('/schools/bolpur')) {
    finalSchoolId = 'bolpur';
  }
  if (location.pathname.startsWith('/schools/coochbehar')) {
    finalSchoolId = 'coochbehar';
  }
  if (location.pathname.startsWith('/schools/durgapur')) {
    finalSchoolId = 'durgapur';
  }
  if (location.pathname.startsWith('/schools/falakata')) {
    finalSchoolId = 'falakata';
  }
  if (location.pathname.startsWith('/schools/gangarampur')) {
    finalSchoolId = 'gangarampur';
  }
  if (location.pathname.startsWith('/schools/hoogly')) {
    finalSchoolId = 'hoogly';
  }
  if (location.pathname.startsWith('/schools/jalpaiguri')) {
    finalSchoolId = 'jalpaiguri';
  }
  if (location.pathname.startsWith('/schools/kolaghat')) {
    finalSchoolId = 'kolaghat';
  }
  if (location.pathname.startsWith('/schools/krishnanagar')) {
    finalSchoolId = 'krishnanagar';
  }

  return (
    <>
      <Header schoolId={finalSchoolId} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;