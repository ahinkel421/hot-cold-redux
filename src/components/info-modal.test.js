import React from 'react';
import {shallow, mount} from 'enzyme';

import {InfoModal} from './info-modal';

describe('<InfoModal />', () => {
	it('Renders without crashing', () => {
		shallow(<InfoModal />);
	});

	//When using redux, change "callback" to "dispatch"
	//since we are dispatching an action instead of passing a callback.

	it('Closes modal when user clicks "got it"', () => {
		const dispatch = jest.fn();
		const wrapper = mount(<InfoModal dispatch={dispatch} />);
		wrapper.find('.close').simulate('click', {
			preventDefault() {}
		});
		expect(dispatch).toHaveBeenCalled();
	});

	// it('Closes modal when user clicks "got it"', () => {
	// 	const callback = jest.fn();
	// 	const wrapper = shallow(<InfoModal onClose={callback} />);
	// 	wrapper.find('.close').simulate('click', {
	// 		preventDefault() {}
	// 	});
	// 	expect(callback).toHaveBeenCalled();
	// });
});