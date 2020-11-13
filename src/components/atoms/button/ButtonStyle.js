import {StyleSheet} from 'aphrodite';

const ButtonStyle = StyleSheet.create({
    Button: {
        margin: 5,
        padding: '10px 20px',
        borderRadius: 10,
        background: 'none',
        border: '2px solid #685bca',
        boxShadow: '0px 0px 11px 2px rgba(85,85,85,0.82)',
        color: '#685bca',
        textTransform: 'uppercase',
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'Lato',
        letterSpacing: 1.5,
        outline: 'none',
        cursor: 'pointer',
        transition: 'ease-in-out 0.3s',
        ':hover': {
            boxShadow: '0px 0px 11px 2px #837594',
            color: 'white',
            borderColor: 'white',
        }
    }
})

export default ButtonStyle;
