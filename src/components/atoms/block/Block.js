import React from 'react';
import './style.css';

const Block = ({parentId, index, cell, colors, handleClick}) => {
    return (
        <div
            id={`block-${parentId}-${index}`}
            className="block"
            style={{backgroundColor: `${colors[cell]}`}}
            onClick={(event) => handleClick(event)}
        />
    );
}

export default Block;
