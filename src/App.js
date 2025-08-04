// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Navbar and Footer as named exports
import { Navbar } from './components/ui/Navbar';
import { Footer } from './components/ui/Footer';

import HomePage from './HomePage';
import Contact from './components/ui/Contact';
import Services  from "./components/ui/Services";


export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}
