import {StyleSheet} from 'aphrodite';

const FooterStyle = StyleSheet.create({
    Footer: {
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        height: 50,
        width: '100%',
        backgroundColor: '#111111',
        color: '#dddddd',
    },
    Footer_Section: {
        paddingLeft: 50,
        fontSize: 12
    }
});

export default FooterStyle;
