import React from 'react';
import {shallow} from 'enzyme';

import {GuessSection} from './guess-section';

describe('<GuessSection />', () => {
  const feedback = 'ok';
  it('Renders without crashing', () => {
    shallow(<GuessSection feedback={feedback} />);
  });
  it('Displays the correct feedback', () => {
    const wrapper = shallow(<GuessSection feedback={feedback} />);
    const text = wrapper.find('h2').text();
    expect(text).toEqual('ok');
  });
});