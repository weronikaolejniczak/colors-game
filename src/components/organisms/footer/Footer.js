import React from 'react';
import './style.css';

const Footer = () => {
    return (
        <footer className="footer">
            <span className="copyright">
                Made by <a href="https://github.com/weronikaolejniczak" alt="Weronika Olejniczak GitHub account" target="_blank" rel="noopener noreferrer">Weronika Olejniczak</a>
            </span>
            <span className="repository">
                Check out GitHub repository at <a href="https://github.com/weronikaolejniczak/colors-game" alt="Colors Game repository at GitHub" target="_blank" rel="noopener noreferrer">@weronikaolejniczak/colors-game</a>
            </span>
        </footer>
    );
}

export default Footer;
