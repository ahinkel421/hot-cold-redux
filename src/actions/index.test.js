import {SET_NEW_GAME, setNewGame, SET_GUESS, setGuess, TOGGLE_INFO, toggleInfo} from './index';

describe('setNewGame', () => {
	it('Should return the action', () => {
		const action = setNewGame();
		expect(action.type).toEqual(SET_NEW_GAME);
		expect(action.guesses).toEqual([]);
	});
});

describe('setGuess', () => {
	it('Should return the action', () => {
		const guess = 7;
		const action = setGuess(guess);
		expect(action.type).toEqual(SET_GUESS);
		expect(action.guess).toEqual(guess);
	});
});

describe('toggleInfo', () => {
	it('Should return the action', () => {
		const action = toggleInfo();
		expect(action.type).toEqual(TOGGLE_INFO);
	});
});