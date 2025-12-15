import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/master/HomePage';
import AboutPage from './pages/master/AboutPage';
import AcademicsPage from './pages/master/AcademicsPage';
import AdmissionsPage from './pages/master/AdmissionsPage';
import LifePage from './pages/master/LifePage';
import ContactPage from './pages/master/ContactPage';
import SchoolHome from './pages/school/SchoolHome';
import SchoolAboutPage from './pages/school/SchoolAboutPage';
import SchoolAcademicsPage from './pages/school/SchoolAcademicsPage';
import SchoolAdmissionsPage from './pages/school/SchoolAdmissionsPage';
import SchoolLifePage from './pages/school/SchoolLifePage';
import SchoolContactPage from './pages/school/SchoolContactPage';
import SchoolsListPage from './pages/SchoolsListPage';
import EventDetail from './pages/EventDetail';
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
          
          {/* School Routes */}
          <Route path="/schools/:schoolId" element={<Layout><SchoolHome /></Layout>} />
          <Route path="/schools/:schoolId/about" element={<Layout><SchoolAboutPage /></Layout>} />
          <Route path="/schools/:schoolId/academics" element={<Layout><SchoolAcademicsPage /></Layout>} />
          <Route path="/schools/:schoolId/admissions" element={<Layout><SchoolAdmissionsPage /></Layout>} />
          <Route path="/schools/:schoolId/life-at-tigps" element={<Layout><SchoolLifePage /></Layout>} />
          <Route path="/schools/:schoolId/events/:eventId" element={<EventDetail />} />
          <Route path="/schools/:schoolId/contact" element={<Layout><SchoolContactPage /></Layout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
