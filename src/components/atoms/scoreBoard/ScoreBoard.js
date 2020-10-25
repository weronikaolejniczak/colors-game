import React from 'react';
import {default as styles} from './ScoreBoardStyle.js';
import {css} from 'aphrodite';

const ScoreBoard = ({score}) => {
    return (
        <div className={css(styles.ScoreBoard)}>
            <div className={css(styles.ScoreBoard__Entry)}>
                <span className={css(styles.ScoreBoard__Title)}>Score:</span> <span className={css(styles.ScoreBoard__Value)}>{score}</span>
            </div>
        </div>
    );
}

export default ScoreBoard;
