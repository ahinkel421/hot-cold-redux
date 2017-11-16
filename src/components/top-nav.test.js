import React from 'react';
import {shallow, mount} from 'enzyme';

import {TopNav} from './top-nav';

describe('<TopNav />', () => {
	it('Renders without crashing', () => {
		shallow(<TopNav />);
	});

	//When using redux, change "callback" to "dispatch"
	//since we are dispatching an action instead of passing a callback.

	it('Opens the modal when "what" is clicked', () => {
		const dispatch = jest.fn();
		const wrapper = shallow(<TopNav dispatch={dispatch} />);
		wrapper.find('.what').simulate('click', {
			preventDefault() {}
		});
		expect(dispatch).toHaveBeenCalled();
	});

	it('Starts a new game when "new game" is clicked', () => {
		const dispatch = jest.fn();
		const wrapper = shallow(<TopNav dispatch={dispatch} />);
		wrapper.find('.new').simulate('click', {
			preventDefault() {}
		});
		expect(dispatch).toHaveBeenCalled();
	});

	// it('Opens the modal when "what" is clicked', () => {
	// 	const callback = jest.fn();
	// 	const wrapper = shallow(<TopNav onInfo={callback} />);
	// 	wrapper.find('.what').simulate('click', {
	// 		preventDefault() {}
	// 	});
	// 	expect(callback).toHaveBeenCalled();
	// });
	// it('Starts a new game when "new game" is clicked', () => {
	// 	const callback = jest.fn();
	// 	const wrapper = shallow(<TopNav onNewGame={callback} />);
	// 	wrapper.find('.new').simulate('click', {
	// 		preventDefault() {}
	// 	});
	// 	expect(callback).toHaveBeenCalled();
	// })
});