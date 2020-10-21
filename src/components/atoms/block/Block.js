import React from 'react';

const Block = ({index, row, colors}) => {
    return (
        <div
            id={`block-${index}`}
            key={`block-${index}`}
            className="block"
            style={{backgroundColor: `${colors[row]}`}}
        />
    );
}

export default Block;
