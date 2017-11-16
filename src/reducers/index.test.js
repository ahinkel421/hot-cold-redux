import {guessReducer} from './index';
import {initialState} from './index';
import {setNewGame, setGuess, toggleInfo} from '../actions';

describe('guessReducer', () => {
	const correctAnswer = 15;
	const feedback = 'Testing feedback';
	const guesses = [1, 50, 100];

	it('Should set the initial state when nothing is passed in', () => {
		const state = guessReducer(undefined, {type: '__UNKNOWN'});
		expect(state).toEqual({
			guesses: [],
			feedback: 'Make your guess!',
			correctAnswer: initialState.correctAnswer,
			showInfoModal: false
		});
	});
	
	it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = guessReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });
});