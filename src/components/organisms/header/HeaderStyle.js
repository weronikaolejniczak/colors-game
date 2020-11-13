import {StyleSheet} from 'aphrodite';

import Colors from 'constants/Colors';

const HeaderStyle = StyleSheet.create({
    Header: {
        position: 'relative',
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.darkGrey,
    },
    Header__Logo: {
        paddingLeft: '50px',
        paddingRight: '50px'
    }
});

export default HeaderStyle;
