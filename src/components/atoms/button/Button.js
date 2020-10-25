import React from 'react';
import {default as styles} from './ButtonStyle.js';
import {css} from 'aphrodite';

const Button = ({handleClick, label}) => {
    return (
        <button
            className={css(styles.Button)}
            onClick={handleClick}
        >
            {label}
        </button>
    );
}

export default Button;
