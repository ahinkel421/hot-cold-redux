import React from 'react';
import {shallow, mount} from 'enzyme';
import InfoModal from './info-modal';
import {Header} from './header';

describe('<Header />', () => {
	it('Renders without crashing', () => {
		shallow(<Header />);
	});

	it('Should render the modal when requested', () => {
		const wrapper = shallow(<Header showInfoModal={true} />);
		expect(wrapper.find(InfoModal).exists()).toEqual(true);
	});

	it('Should hide the modal when requested', () => {
		const wrapper = shallow(<Header showInfoModal={false} />);
		expect(wrapper.find(InfoModal).exists()).toEqual(false);
	});
});