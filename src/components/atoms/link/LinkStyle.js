import {StyleSheet} from 'aphrodite';

const LinkStyle = StyleSheet.create({
    Link: {
        color: '#685bca',
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'ease-in-out 0.3s',
        ':hover': {
            color: '#8b81d7'
        }
    }
})

export default LinkStyle;
