import React from 'react';
import {css} from 'aphrodite';

import {default as styles} from './ScoreBoardStyle.js';

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
