import React from 'react';
import {ScoreBoard} from '../../';
import './style.css';

const Header = () => {
    return (
        <header className="header">
            <span className="logo">Colors Game</span>
            <ScoreBoard />
        </header>
    );
}

export default Header;
