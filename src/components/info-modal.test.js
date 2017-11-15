import React from 'react';
import {shallow, mount} from 'enzyme';

import {InfoModal} from './info-modal';
import {toggleInfoModal} from '../actions';

describe('<InfoModal />', () => {
  it('Renders without crashing', () => {
    shallow(<InfoModal />);
  });

  it('Dispatches toggleInfoModal to hide InfoModal onClick', () => {
    const dispatch = jest.fn();
    const wrapper = mount(<InfoModal dispatch={dispatch} />);
    wrapper.find('.close').simulate('click');
    expect(dispatch).toHaveBeenCalledWith(toggleInfoModal());
  });
});
