import React from 'react';
import { Link } from 'react-router-dom';

// import React, { useState } from 'react';
// import Navigation from '../Navigation';
// import About from '../pages/About';
// import Contact from '../pages/Contact';
// import Portfolio from '../pages/Portfolio';
// import Resume from '../pages/Resume';

function Header() {

    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">Title</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link active" to="/aboutme">About Me <span className="sr-only">(current)</span></Link>
      <Link className="nav-item nav-link" to="/portfolio">Portfolio</Link>
      <Link className="nav-item nav-link" to="/contact">Contact</Link>
      <Link className="nav-item nav-link" to="/resume">Resume</Link>
    </div>
  </div>
</nav>
    )
}

export default Header