import React from 'react';
import './style.css';

const ScoreBoard = ({score}) => {
    return (
        <div className="score-board">
            <span className="score-title">Score:</span> <span className="score-value">{score}</span>
        </div>
    );
}

export default ScoreBoard;
