import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessSection} from './guess-section';

describe('<GuessSection />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessSection />);
	});
	
	it('Should render the correct feedback', () => {
		const feedback = 'foo';
		const wrapper = shallow(<GuessSection feedback={feedback} />);
		expect(wrapper.contains('foo')).toEqual(true);
	});
});