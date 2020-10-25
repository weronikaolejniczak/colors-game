import {StyleSheet} from 'aphrodite';

const BlockStyle = StyleSheet.create({
  Block: {
    border: '#333 1px dotted',
    width: 35,
    height: 35,
    cursor: 'pointer',
    transition: 'ease-in-out 0.25s',
    ':hover': {
      border: '#fff 1px solid'
    }
  }
});

export default BlockStyle;
