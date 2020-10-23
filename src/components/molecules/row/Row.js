import React from 'react';
import './style.css';

const Row = ({index, children}) => {
    return (
        <div
            id={`row-${index}`}
            className="row"
        >
            {children}
        </div>
    );
}

export default Row;
