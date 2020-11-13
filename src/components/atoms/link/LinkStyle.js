import {StyleSheet} from 'aphrodite';

import Colors from 'constants/Colors';

const LinkStyle = StyleSheet.create({
    Link: {
        color: Colors.purple,
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'ease-in-out 0.3s',
        ':hover': {
            color: Colors.lightPurple
        }
    }
})

export default LinkStyle;
