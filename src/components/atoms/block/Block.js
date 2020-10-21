import React from 'react';
import './style.css';

const Block = ({parentId, index, row, colors, handleClick}) => {
    return (
        <div
            id={`block-${parentId}-${index}`}
            className="block"
            style={{backgroundColor: `${colors[row]}`}}
            onClick={(event) => handleClick(event)}
        />
    );
}

export default Block;
