import React, { useState } from 'react';
import Navigation from '../Navigation';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';

function Header() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        // if (currentPage === 'Home') {
        //     return <Home />;
        // }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        return <Resume />;
      };
    
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        </div>
    )
}

export default Header