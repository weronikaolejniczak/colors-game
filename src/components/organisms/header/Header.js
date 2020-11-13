import React from 'react';
import {css} from 'aphrodite';

import {ReactComponent as Logo} from 'assets/images/logo.svg';
import {default as styles} from './HeaderStyle.js';

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
