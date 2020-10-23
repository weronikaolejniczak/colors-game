import React from 'react';
import './style.css';

const Column = ({index, children}) => {
    return (
        <div
            id={`col-${index}`}
            className="column"
        >
            {children}
        </div>
    );
}

export default Column;
