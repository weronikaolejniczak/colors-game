import React from 'react';
import {ReactComponent as Logo} from '../../../assets/images/logo.svg';
import './style.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Logo width={100} height={50} />
            </div>
        </header>
    );
}

export default Header;
