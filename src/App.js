import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Header from './components/Header';
// import Project from './components/Project';
// import Footer from './components/Footer';

import './App.css';
// import Home from "./pages/Home"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

function App() {

  return (
    <div>
      <Router>
        <div>
          <Routes>
            {/* <Route 
                path="/" 
                element={<Home />} 
            /> */}

            <Route 
                path="/aboutme" 
                element={<About />} 
            />

            <Route 
                path="/portfolio" 
                element={<Portfolio />} 
            />

            <Route 
                path="/contact" 
                element={<Contact />} 
            />

            <Route 
                path="/resume" 
                element={<Resume />} 
            />
          </Routes>
        </div>
      </Router>
      {/* <Header />

      <Project />
      <Footer /> */}
    </div>
  );
}

export default App;
