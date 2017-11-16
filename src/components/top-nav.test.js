import React from 'react';
import {shallow, mount} from 'enzyme';

import {TopNav} from './top-nav';
import {newGame, toggleInfoModal} from '../actions';

describe('<TopNav />', () => {
  it('Renders without crashing', () => {
    shallow(<TopNav />);
  });

  it('Dispatches newGame when "NEW GAME" is clicked', () => {
    const dispatch = jest.fn();
    const wrapper = mount(<TopNav dispatch={dispatch} />);
    wrapper.find('.new').simulate('click');
    expect(dispatch).toHaveBeenCalledWith(newGame());
  });

  it('Dispatches toggleInfoModal when "WHAT?" is clicked', () => {
    const dispatch = jest.fn();
    const wrapper = mount(<TopNav dispatch={dispatch} />);
    wrapper.find('.what').simulate('click');
    expect(dispatch).toHaveBeenCalledWith(toggleInfoModal());
  })
})