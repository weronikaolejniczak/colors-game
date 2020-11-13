import {StyleSheet} from 'aphrodite';

import Colors from 'constants/Colors';

const BlockStyle = StyleSheet.create({
  Block: {
    border: `${Colors.grey} 1px dotted`,
    width: 35,
    height: 35,
    cursor: 'pointer',
    transition: 'ease-in-out 0.25s',
    ':hover': {
      border: `${Colors.white} 1px solid`
    }
  }
});

export default BlockStyle;
