import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from "./Components/Footer/Footer";
import Home from './Pages/Landing';
import DesignPages from "./Pages/DesignPages";
import Contact from "./Components/Landing/Contact";
import HireUs from "./Pages/Hireus";
import College from "./Pages/College";
import About from './Pages/About';
import Student from "./Pages/Student";
import Mern from "./Pages/Mern";
import Ai from './Pages/Ai';
import Java from './Pages/Java';
import Flutter from './Pages/Flutter';
import Python from './Pages/Python';
import Devops from './Pages/Devops';
import Software from "./Pages/Software";
import Digital from "./Pages/Digital";
import Franchise from "./Pages/Franchise";

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <>
      <Header isContactPage={isContactPage} />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/ui-ux-design" element={<DesignPages />} />
        <Route path="/mern-fullstack" element={<Mern />} />
        <Route path="/ai-fullstack" element={<Ai />} />
        <Route path="/java-fullstack" element={<Java />} />
        <Route path="/flutter-fullstack" element={<Flutter />} />
        <Route path="/python-fullstack" element={<Python />} />
        <Route path="/software-testing" element={<Software />} />
        <Route path="/digital-marketing" element={<Digital />} />
        <Route path="/devops" element={<Devops />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/hireus" element={<HireUs />} />
        <Route path="/college-onboarding" element={<College />} />
        <Route path="/student-onboarding" element={<Student />} />
        <Route path="/franchise" element={<Franchise />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;