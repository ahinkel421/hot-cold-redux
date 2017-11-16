//REDUCERS

import {SET_NEW_GAME, SET_GUESS, TOGGLE_INFO} from '../actions';

export const initialState = {
	guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.floor(Math.random() * 100) + 1,
    showInfoModal: false
}

export const guessReducer = (state=initialState, action) => {
	if (action.type === SET_NEW_GAME) {
		return Object.assign({}, state, {
			correctAnswer: action.correctAnswer,
			guesses: action.guesses,
			feedback: action.feedback,
		});
	}
	else if (action.type === SET_GUESS) {
		const guess = parseInt(action.guess, 10);

		if (isNaN(guess)) {
			return Object.assign({}, state, {
				feedback: 'Please enter a number'
			});
		}

		const answer = state.correctAnswer;
		const difference = Math.abs(guess - answer); 

        let feedback;
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        }
        else {
            feedback = 'You got it!';
        }

        return Object.assign({}, state, {
        	feedback,
        	guesses: state.guesses.concat(action.guess)
        });
	}
	
	else if (action.type === TOGGLE_INFO) {
		return Object.assign({}, state, {
			showInfoModal: !state.showInfoModal
		});
	}
	return state;
}









