import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/master/HomePage';
import AboutPage from './pages/master/AboutPage';
import AcademicsPage from './pages/master/AcademicsPage';
import AdmissionsPage from './pages/master/AdmissionsPage';
import LifePage from './pages/master/LifePage';
import ContactPage from './pages/master/ContactPage';

import AlipurduarHomePage from './pages/school/AlipurduarHomePage';
import AlipurduarAboutPage from './pages/school/AlipurduarAboutPage';
import AlipurduarAcademicsPage from './pages/school/AlipurduarAcademicsPage';
import AlipurduarAdmissionsPage from './pages/school/AlipurduarAdmissionsPage';
import AlipurduarLifePage from './pages/school/AlipurduarLifePage';
import AlipurduarContactPage from './pages/school/AlipurduarContactPage';
import SchoolsListPage from './pages/SchoolsListPage';
import EventDetail from './pages/EventDetail';

import BolpurHomePage from './pages/school/BolpurHomePage';
import BolpurAboutPage from './pages/school/BolpurAboutPage';
import BolpurAcademicsPage from './pages/school/BolpurAcademicsPage';
import BolpurAdmissionsPage from './pages/school/BolpurAdmissionsPage';
import BolpurLifePage from './pages/school/BolpurLifePage';
import BolpurContactPage from './pages/school/BolpurContactPage';

import CoochbeharHomePage from './pages/school/CoochbeharHomePage';
import CoochbeharAboutPage from './pages/school/CoochbeharAboutPage';
import CoochbeharAcademicsPage from './pages/school/CoochbeharAcademicsPage';
import CoochbeharAdmissionsPage from './pages/school/CoochbeharAdmissionsPage';
import CoochbeharLifePage from './pages/school/CoochbeharLifePage';
import CoochbeharContactPage from './pages/school/CoochbeharContactPage';

import DurgapurHomePage from './pages/school/DurgapurHomePage';
import DurgapurAboutPage from './pages/school/DurgapurAboutPage';
import DurgapurAcademicsPage from './pages/school/DurgapurAcademicsPage';
import DurgapurAdmissionsPage from './pages/school/DurgapurAdmissionsPage';
import DurgapurLifePage from './pages/school/DurgapurLifePage';
import DurgapurContactPage from './pages/school/DurgapurContactPage';

import FalakataHomePage from './pages/school/FalakataHomePage';
import FalakataAboutPage from './pages/school/FalakataAboutPage';
import FalakataAcademicsPage from './pages/school/FalakataAcademicsPage';
import FalakataAdmissionsPage from './pages/school/FalakataAdmissionsPage';
import FalakataLifePage from './pages/school/FalakataLifePage';
import FalakataContactPage from './pages/school/FalakataContactPage';

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Master Routes */}
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/about" element={<Layout><AboutPage /></Layout>} />
          <Route path="/academics" element={<Layout><AcademicsPage /></Layout>} />
          <Route path="/admissions" element={<Layout><AdmissionsPage /></Layout>} />
          <Route path="/life-at-tigps" element={<Layout><LifePage /></Layout>} />
          <Route path="/events/:eventId" element={<EventDetail />} />
          <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
          <Route path="/schools" element={<Layout><SchoolsListPage /></Layout>} />
          
          {/* Alipurduar Specific Routes - MUST come before general school routes */}
          <Route path="/schools/alipurduar" element={<Layout><AlipurduarHomePage /></Layout>} />
          <Route path="/schools/alipurduar/about" element={<Layout><AlipurduarAboutPage /></Layout>} />
          <Route path="/schools/alipurduar/academics" element={<Layout><AlipurduarAcademicsPage /></Layout>} />
          <Route path="/schools/alipurduar/admissions" element={<Layout><AlipurduarAdmissionsPage /></Layout>} />
          <Route path="/schools/alipurduar/life-at-tigps" element={<Layout><AlipurduarLifePage /></Layout>} />
          <Route path="/schools/alipurduar/contact" element={<Layout><AlipurduarContactPage /></Layout>} />

          <Route path="/schools/bolpur" element={<Layout><BolpurHomePage /></Layout>} />
          <Route path="/schools/bolpur/about" element={<Layout><BolpurAboutPage /></Layout>} />
          <Route path="/schools/bolpur/academics" element={<Layout><BolpurAcademicsPage /></Layout>} />
          <Route path="/schools/bolpur/admissions" element={<Layout><BolpurAdmissionsPage /></Layout>} />
          <Route path="/schools/bolpur/life-at-tigps" element={<Layout><BolpurLifePage /></Layout>} />
          <Route path="/schools/bolpur/contact" element={<Layout><BolpurContactPage /></Layout>} />

          <Route path="/schools/coochbehar" element={<Layout><CoochbeharHomePage /></Layout>} />
          <Route path="/schools/coochbehar/about" element={<Layout><CoochbeharAboutPage /></Layout>} />
          <Route path="/schools/coochbehar/academics" element={<Layout><CoochbeharAcademicsPage /></Layout>} />
          <Route path="/schools/coochbehar/admissions" element={<Layout><CoochbeharAdmissionsPage /></Layout>} />
          <Route path="/schools/coochbehar/life-at-tigps" element={<Layout><CoochbeharLifePage /></Layout>} />
          <Route path="/schools/coochbehar/contact" element={<Layout><CoochbeharContactPage /></Layout>} />

          <Route path="/schools/durgapur" element={<Layout><DurgapurHomePage /></Layout>} />
          <Route path="/schools/durgapur/about" element={<Layout><DurgapurAboutPage /></Layout>} />
          <Route path="/schools/durgapur/academics" element={<Layout><DurgapurAcademicsPage/></Layout>} />
          <Route path="/schools/durgapur/admissions" element={<Layout><DurgapurAdmissionsPage /></Layout>} />
          <Route path="/schools/durgapur/life-at-tigps" element={<Layout><DurgapurLifePage /></Layout>} />
          <Route path="/schools/durgapur/contact" element={<Layout><DurgapurContactPage /></Layout>} />

          <Route path="/schools/falakata" element={<Layout><FalakataHomePage /></Layout>} />
          <Route path="/schools/falakata/about" element={<Layout><FalakataAboutPage /></Layout>} />
          <Route path="/schools/falakata/academics" element={<Layout><FalakataAcademicsPage /></Layout>} />
          <Route path="/schools/falakata/admissions" element={<Layout><FalakataAdmissionsPage /></Layout>} />
          <Route path="/schools/falakata/life-at-tigps" element={<Layout><FalakataLifePage /></Layout>} />
          <Route path="/schools/falakata/contact" element={<Layout><FalakataContactPage /></Layout>} />
          

        </Routes>
      </div>
    </Router>
  );
}

export default App;