//ACTIONS

export const SET_NEW_GAME = 'SET_NEW_GAME';
export const setNewGame = () => ({
    type: SET_NEW_GAME,
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.floor(Math.random() * 100) + 1
});

export const SET_GUESS = 'SET_GUESS';
export const setGuess = (guess) => ({
    type: SET_GUESS,
    guess
    //why guess? guess is not part of state..wouldn't it be:
    // guesses: [guess]
});

export const TOGGLE_INFO = 'TOGGLE_INFO';
export const toggleInfo = () => ({
    type: TOGGLE_INFO,
});