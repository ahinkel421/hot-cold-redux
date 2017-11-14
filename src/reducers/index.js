//REDUCERS

import {SET_NEW_GAME, SET_GUESS, TOGGLE_INFO} from '../actions';

const initialState = {
	guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.floor(Math.random() * 100) + 1,
    showInfoModal: false
}

export const guessReducer = (state=initialState, action) => {
	if (action.type === SET_NEW_GAME) {
		return Object.assign({}, state, {
			guesses: action.guesses
		});
	}
	else if (action.type === SET_GUESS) {
		return Object.assign({}, state, {
			feedback: action.feedback
		});
	}
	else if (action.type === TOGGLE_INFO) {
		return Object.assign({}, state, {
			correctAnswer: action.correctAnswer
		});
	}
	return state;
}