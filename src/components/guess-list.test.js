import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessList} from './guess-list';

describe('<GuessList />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessList guesses= {[]}/>);
	});

	it('Renders a list of the user\'s guesses', () => {
		const values = [1, 2, 3];
		const wrapper = shallow(<GuessList guesses={values} />);
		const listItem = wrapper.find('li');
		expect(listItem.length).toEqual(values.length);
	});
});