import React from 'react';
import './style.css';

const Block = ({parentId, index, row, colors}) => {
    return (
        <div
            id={`block-${parentId}-${index}`}
            className="block"
            style={{backgroundColor: `${colors[row]}`}}
        />
    );
}

export default Block;
