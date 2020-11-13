import React from 'react';
import {css} from 'aphrodite';

import {Link} from 'components/atoms';
import {default as styles} from './FooterStyle.js';

const Footer = () => {
    return (
        <footer className={css(styles.Footer)}>
            <span className={css(styles.Footer_Section)}>
                Made by <Link
                    href="https://github.com/weronikaolejniczak"
                    alt="Weronika Olejniczak GitHub account"
                    label="Weronika Olejniczak"
                />
            </span>

            <span className={css(styles.Footer_Section)}>
                GitHub repo <Link
                    href="https://github.com/weronikaolejniczak/colors-game"
                    alt="Colors Game repository at GitHub"
                    label="@colors-game"
                />
            </span>
        </footer>
    );
}

export default Footer;
