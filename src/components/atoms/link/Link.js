import React from 'react';
import {default as styles} from './LinkStyle.js';
import {css} from 'aphrodite';

const Link = ({href, alt, label}) => {
    return (
        <a
            className={css(styles.Link)}
            href={href}
            alt={alt}
            target="_blank"
            rel="noopener noreferrer">
                {label}
        </a>
    );
}

export default Link;
