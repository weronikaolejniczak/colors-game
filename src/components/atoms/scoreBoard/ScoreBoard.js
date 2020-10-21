import React from 'react';
import './style.css';

const ScoreBoard = () => {
    return (
        <div className="score-board">
            <span className="score-title">Score:</span> <span className="score-value">0</span>
        </div>
    );
}

export default ScoreBoard;
