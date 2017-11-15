//REDUCERS

import {SET_NEW_GAME, SET_GUESS, TOGGLE_INFO} from '../actions';

const initialState = {
	guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.floor(Math.random() * 100) + 1,
    showInfoModal: false
}

// newGame() {
//         this.setState({
//             guesses: [],
//             feedback: 'Make your guess!',
//             correctAnswer: Math.floor(Math.random() * 100) + 1
//         });
//     }
//     guess(guess) {
//         guess = parseInt(guess, 10);
//         if (isNaN(guess)) {
//             this.setState({
//                 feedback: 'Please enter a valid number'
//             });
//             return;
//         }

//         const difference = Math.abs(guess - this.state.correctAnswer);

//         let feedback;
//         if (difference >= 50) {
//             feedback = 'You\'re Ice Cold...';
//         }
//         else if (difference >= 30) {
//             feedback = 'You\'re Cold...';
//         }
//         else if (difference >= 10) {
//             feedback = 'You\'re Warm';
//         }
//         else if (difference >= 1) {
//             feedback = 'You\'re Hot!';
//         }
//         else {
//             feedback = 'You got it!';
//         }

//         this.setState({
//             feedback,
//             guesses: [...this.state.guesses, guess]
//         });
//     }

export const guessReducer = (state=initialState, action) => {
	if (action.type === SET_NEW_GAME) {
		return Object.assign({}, state, {
			correctAnswer: action.correctAnswer
		});
		// return state;
	}
	else if (action.type === SET_GUESS) {
		const guess = parseInt(action.guess, 10);

		if(isNaN(guess)) {
			return Object.assign({}, state, {
				feedback: 'Please enter a number'
			});
			// return state;
		}
		const difference = Math.abs(guess - state.correctAnswer);

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

        Object.assign({}, state, {
        	feedback,
        	guesses: state.guesses.concat(action.guess)
        });
        return state;
	}
	
	else if (action.type === TOGGLE_INFO) {
		return Object.assign({}, state, {
			showInfoModal: !state.showInfoModal
		});
		// return state;
	}
	return state;
}









