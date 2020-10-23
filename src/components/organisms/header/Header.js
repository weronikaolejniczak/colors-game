import React from 'react';
import {ReactComponent as Logo} from '../../../assets/images/logo.svg';
import './style.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Logo width={100} height={50} />
            </div>
            <span className="quote">
                <span className="quotation-mark">"</span>
                    With color one obtains an energy that seems to stem from witchcraft.
                <span className="quotation-mark">" ~</span>
                    Henri Matisse
            </span>
        </header>
    );
}

export default Header;
