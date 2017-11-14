//ACTIONS

export const SET_GUESSES = 'SET_GUESSES';
export const setGuesses = guesses => ({
    type: SET_GUESSES,
    guesses
});

export const SET_FEEDBACK = 'SET_FEEDBACK';
export const setFeedback = feedback => ({
    type: SET_FEEDBACK,
    feedback
});

export const SET_CORRECT_ANSWER = 'SET_CORRECT_ANSWER';
export const setCorrectAnswer = correctAnswer => ({
    type: SET_CORRECT_ANSWER,
    correctAnswer
});