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

import GangarampurHomePage from './pages/school/GangarampurHomePage';
import GangarampurAboutPage from './pages/school/GangarampurAboutPage';
import GangarampurAcademicsPage from './pages/school/GangarampurAcademicsPage';
import GangarampurAdmissionsPage from './pages/school/GangarampurAdmissionsPage';
import GangarampurLifePage from './pages/school/GangarampurLifePage';
import GangarampurContactPage from './pages/school/GangarampurContactPage';

import HooglyHomePage from './pages/school/HooglyHomePage';
import HooglyAboutPage from './pages/school/HooglyAboutPage';
import HooglyAcademicsPage from './pages/school/HooglyAcademicsPage';
import HooglyAdmissionsPage from './pages/school/HooglyAdmissionsPage';
import HooglyLifePage from './pages/school/HooglyLifePage';
import HooglyContactPage from './pages/school/HooglyContactPage';

import JalpaiguriHomePage from './pages/school/JalpaiguriHomePage';
import JalpaiguriAboutPage from './pages/school/JalpaiguriAboutPage';
import JalpaiguriAcademicsPage from './pages/school/JalpaiguriAcademicsPage';
import JalpaiguriAdmissionsPage from './pages/school/JalpaiguriAdmissionsPage';
import JalpaiguriLifePage from './pages/school/JalpaiguriLifePage';
import JalpaiguriContactPage from './pages/school/JalpaiguriContactPage';

import KolaghatHomePage from './pages/school/KolaghatHomePage'
import KolaghatAboutPage from './pages/school/KolaghatAboutPage'
import KolaghatAcademicsPage from './pages/school/KolaghatAcademicsPage'
import KolaghatAdmissionsPage from './pages/school/KolaghatAdmissionsPage'
import KolaghatLifePage from './pages/school/KolaghatLifePage'
import KolaghatContactPage from './pages/school/KolaghatContactPage'

import KrishnanagarHomePage from './pages/school/KrishnanagarHomePage';
import KrishnanagarAboutPage from './pages/school/KrishnanagarAboutPage';
import KrishnanagarAcademicsPage from './pages/school/KrishnanagarAcademicsPage';
import KrishnanagarAdmissionsPage from './pages/school/KrishnanagarAdmissionsPage';
import KrishnanagarLifePage from './pages/school/KrishnanagarLifePage';
import KrishnanagarContactPage from './pages/school/KrishnanagarContactPage';

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

          <Route path="/schools/gangarampur" element={<Layout>< GangarampurHomePage /></Layout>} />
          <Route path="/schools/gangarampur/about" element={<Layout><GangarampurAboutPage /></Layout>} />
          <Route path="/schools/gangarampur/academics" element={<Layout><GangarampurAcademicsPage /></Layout>} />
          <Route path="/schools/gangarampur/admissions" element={<Layout><GangarampurAdmissionsPage /></Layout>} />
          <Route path="/schools/gangarampur/life-at-tigps" element={<Layout><GangarampurLifePage/></Layout>} />
          <Route path="/schools/gangarampur/contact" element={<Layout><GangarampurContactPage /></Layout>} />          

          <Route path="/schools/hoogly" element={<Layout><HooglyHomePage /></Layout>} />
          <Route path="/schools/hoogly/about" element={<Layout><HooglyAboutPage /></Layout>} />
          <Route path="/schools/hoogly/academics" element={<Layout><HooglyAcademicsPage /></Layout>} />
          <Route path="/schools/hoogly/admissions" element={<Layout><HooglyAdmissionsPage /></Layout>} />
          <Route path="/schools/hoogly/life-at-tigps" element={<Layout><HooglyLifePage /></Layout>} />
          <Route path="/schools/hoogly/contact" element={<Layout><HooglyContactPage /></Layout>} />

          <Route path="/schools/jalpaiguri" element={<Layout><JalpaiguriHomePage /></Layout>} />
          <Route path="/schools/jalpaiguri/about" element={<Layout><JalpaiguriAboutPage /></Layout>} />
          <Route path="/schools/jalpaiguri/academics" element={<Layout><JalpaiguriAcademicsPage /></Layout>} />
          <Route path="/schools/jalpaiguri/admissions" element={<Layout><JalpaiguriAdmissionsPage /></Layout>} />
          <Route path="/schools/jalpaiguri/life-at-tigps" element={<Layout><JalpaiguriLifePage /></Layout>} />
          <Route path="/schools/jalpaiguri/contact" element={<Layout><JalpaiguriContactPage /></Layout>} />

          <Route path="/schools/kolaghat" element={<Layout><KolaghatHomePage /></Layout>} />
          <Route path="/schools/kolaghat/about" element={<Layout><KolaghatAboutPage /></Layout>} />
          <Route path="/schools/kolaghat/academics" element={<Layout><KolaghatAcademicsPage /></Layout>} />
          <Route path="/schools/kolaghat/admissions" element={<Layout><KolaghatAdmissionsPage /></Layout>} />
          <Route path="/schools/kolaghat/life-at-tigps" element={<Layout><KolaghatLifePage /></Layout>} />
          <Route path="/schools/kolaghat/contact" element={<Layout><KolaghatContactPage /></Layout>} />

          <Route path="/schools/krishnanagar" element={<Layout><KrishnanagarHomePage /></Layout>} />
          <Route path="/schools/krishnanagar/about" element={<Layout><KrishnanagarAboutPage /></Layout>} />
          <Route path="/schools/krishnanagar/academics" element={<Layout><KrishnanagarAcademicsPage /></Layout>} />
          <Route path="/schools/krishnanagar/admissions" element={<Layout><KrishnanagarAdmissionsPage /></Layout>} />
          <Route path="/schools/krishnanagar/life-at-tigps" element={<Layout><KrishnanagarLifePage /></Layout>} />
          <Route path="/schools/krishnanagar/contact" element={<Layout><KrishnanagarContactPage /></Layout>} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;