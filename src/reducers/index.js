//REDUCERS

//import {actions} from '../actions';

const initialState = {
	guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.floor(Math.random() * 100) + 1,
}

export const guessReducer = (state=initialState, action) => {
	if (action.type === SET_GUESSES) {
		return Object.assign({}, state, {
			guesses: action.guesses
		});
	}
	else if (action.type === SET_FEEDBACK) {
		return Object.assign({}, state, {
			feedback: action.feedback
		});
	}
	else if (action.type === SET_CORRECT_ANSWER) {
		return Object.assign({}, state, {
			correctAnswer: action.correctAnswer
		});
	}
	return state;
}