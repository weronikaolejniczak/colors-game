import {StyleSheet} from 'aphrodite';

import Colors from 'constants/Colors';

const FooterStyle = StyleSheet.create({
    Footer: {
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        height: 50,
        width: '100%',
        backgroundColor: Colors.darkGrey,
        color: Colors.lightGrey,
    },
    Footer_Section: {
        paddingLeft: 50,
        fontSize: 12
    }
});

export default FooterStyle;
