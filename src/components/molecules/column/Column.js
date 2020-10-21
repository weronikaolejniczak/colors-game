import React from 'react';

const Column = ({index, children}) => {
    return (
        <div
            id={`col-${index}`}
            key={`col-${index}`}
            className="column"
        >
            {children}
        </div>
    );
}

export default Column;
