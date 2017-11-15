import React from 'react';
import {shallow} from 'enzyme';

import {GuessCount} from './guess-count';

describe('<GuessCount />', () => {
  it('Should render without crashing', () => {
    shallow(<GuessCount />)
  });

  it('Should display the correct count', () => {
    const count = '5';
    const wrapper = shallow(<GuessCount count={count} />);
    expect(wrapper.text()).toEqual('Guess #5!');
  });
});