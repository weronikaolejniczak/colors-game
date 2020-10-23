import React from 'react';
import './style.css';

const Column = ({index, children}) => {
    return (
        <div
            id={`col-${index}`}
            className="col"
        >
            {children}
        </div>
    );
}

export default Column;
