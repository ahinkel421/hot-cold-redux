import React from 'react';
import {connect} from 'react-redux';
import './guess-form.css';
import {setGuess} from '../actions';

export class GuessForm extends React.Component {
    onGuess(event) {
        event.preventDefault();
        const value = this.input.value;
        this.props.dispatch(setGuess(value));
    }

    render() {
        return (
            <form onSubmit={e => this.onGuess(e)} >
                <label htmlFor="userGuess">Enter your Guess</label>
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder='Pick a number!' required
                    ref={input => this.input = input} />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
};

const mapStateToProps = state => ({
    correctAnswer: state.correctAnswer
});

export default connect(mapStateToProps)(GuessForm);

