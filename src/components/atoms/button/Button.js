import React from 'react';
import './style.css';

const Button = ({handleClick, label}) => {
    return (
        <button className="Button" onClick={handleClick}>{label}</button>
    );
}

export default Button;
