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
});

export const TOGGLE_INFO = 'TOGGLE_INFO';
export const toggleInfo = () => ({
    type: TOGGLE_INFO,
});

//actions are what the user can do. In this app the user can:

//click new game, to start a new game
//make a guess
//and click 'what?' to get more info.

//...hence the three actions above.