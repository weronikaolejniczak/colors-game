import React from 'react';
import {Link} from '../../';
import {default as styles} from './FooterStyle.js';
import {css} from 'aphrodite';

const Footer = () => {
    return (
        <footer className={css(styles.Footer)}>
            {/* Author section */}
            <span className={css(styles.Footer_Section)}>
                Made by <Link
                    href={"https://github.com/weronikaolejniczak"}
                    alt={"Weronika Olejniczak GitHub account"}
                    label={"Weronika Olejniczak"}
                />
            </span>
            {/* Repository section */}
            <span className={css(styles.Footer_Section)}>
                GitHub repository <Link
                    href={"https://github.com/weronikaolejniczak/colors-game"}
                    alt={"Colors Game repository at GitHub"}
                    label={"@weronikaolejniczak/colors-game"}
                />
            </span>
        </footer>
    );
}

export default Footer;
