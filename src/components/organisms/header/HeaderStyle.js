import {StyleSheet} from 'aphrodite';

const HeaderStyle = StyleSheet.create({
    Header: {
        position: 'relative',
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#111111',
    },
    Header__Logo: {
        paddingLeft: '50px',
        paddingRight: '50px'
    }
});

export default HeaderStyle;
