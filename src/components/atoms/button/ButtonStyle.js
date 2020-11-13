import {StyleSheet} from 'aphrodite';

import Colors from 'constants/Colors';

const ButtonStyle = StyleSheet.create({
    Button: {
        margin: 5,
        padding: '10px 20px',
        boxShadow: `0px 0px 11px 2px ${Colors.lightGreyTransparent}`,
        borderRadius: 10,
        border: `2px solid ${Colors.purple}`,
        color: Colors.purple,
        textTransform: 'uppercase',
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'Lato',
        lineHeight: 1.5,
        letterSpacing: 1,
        outline: 'none',
        background: 'none',
        cursor: 'pointer',
        transition: 'ease-in-out 0.3s',
        ':hover': {
            boxShadow: `0px 0px 11px 2px ${Colors.palePurple}`,
            color: Colors.white,
            borderColor: Colors.white,
        }
    }
})

export default ButtonStyle;
