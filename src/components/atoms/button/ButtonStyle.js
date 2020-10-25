import {StyleSheet} from 'aphrodite';

const ButtonStyle = StyleSheet.create({
    Button: {
        margin: 5,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 20,
        background: 'linear-gradient(#8b81d7, #685bca)',
        boxShadow: '0px 0px 11px 2px rgba(85,85,85,0.82)',
        color: '#1a1a1a',
        textTransform: 'uppercase',
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'Lato',
        letterSpacing: 1.5,
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        transition: 'ease-in-out 0.3s',
        ':hover': {
            boxShadow: '0px 0px 11px 2px #837594'
        }
    }
})

export default ButtonStyle;
