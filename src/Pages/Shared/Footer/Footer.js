import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 d-flex align-items-center justify-content-center footer'>
            <p><small>copyright &copy; {year}. All rights Wedding Photography</small></p>
        </footer>
    );
};

export default Footer;