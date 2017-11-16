import React from 'react';
import {shallow, mount} from 'enzyme';

import {setGuess} from '../actions';
import {GuessForm} from './guess-form';

describe('<GuessForm />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessForm />);
	});

	
	//When using redux, change "callback" to "dispatch"
	//since we are dispatching an action instead of passing a callback.

	it('Should dispatch setGuess from setGuess', () => {
		const dispatch = jest.fn();
		const wrapper = mount(<GuessForm dispatch={dispatch} />);
		const value = 'foobar';
		wrapper.find('input[type="text"]').instance().value = value;
		wrapper.simulate('submit');
		expect(dispatch).toHaveBeenCalledWith(setGuess(value));
	});


	// it('Should run onGuess when the submit button is clicked', () => {
	// 	const callback = jest.fn();
	// 	const wrapper = mount(<GuessForm onGuess={callback} />);
	// 	const value = 'foobar';
	// 	wrapper.find('input[type="text"]').instance().value = value;
	// 	wrapper.simulate('submit');
	// 	expect(callback).toHaveBeenCalledWith(value);
	// });
});