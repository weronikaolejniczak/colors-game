import React from 'react';
import {ReactComponent as Logo} from '../../../assets/images/logo.svg';
import {default as styles} from './HeaderStyle.js';
import {css} from 'aphrodite';

const Header = () => {
    return (
        <header className={css(styles.Header)}>
            <div className={css(styles.Header__Logo)}>
                <Logo width={100} height={50} />
            </div>
        </header>
    );
}

export default Header;
