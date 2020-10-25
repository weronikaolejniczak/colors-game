import React from 'react';
import './style.css';

const ScoreBoard = ({score}) => {
    return (
        <div className="score-board">
            <div className="score-board__entry">
                <span className="score-board__title">Score:</span> <span className="score-board__value">{score}</span>
            </div>
        </div>
    );
}

export default ScoreBoard;
