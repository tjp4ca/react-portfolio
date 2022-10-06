import React from 'react'

function Navigation(props) {
    const {
        aboutSelected,
        setAboutSelected
    } = props;

    return (
        <nav>
        <ul>
          <li>
            <a href='#about' onClick={() => setAboutSelected(true)}>About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </nav>
    )
}

export default Navigation