import {CLEAR_SCORE, INCREASE_SCORE} from './scoreTypes';

export const clearScore = () => {
    return {
        type: CLEAR_SCORE
    }
}

export const increaseScore = (num) => {
    return {
        type: INCREASE_SCORE,
        payload: num
    }
}
