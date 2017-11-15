import React from 'react';
import {shallow} from 'enzyme';

import {GuessList} from './guess-list';

describe('<GuessList />', () => {
  const guesses = ['1', '2', '3'];
  it('Renders without crashing', () => {
    shallow(<GuessList guesses={guesses} />);
  });
  it('Renders the guess', () => {
    const wrapper = shallow(<GuessList guesses={guesses} />);
    const items = wrapper.find('li');
    expect(items.length).toEqual(guesses.length);
    guesses.forEach((guess, index) => {
      expect(items.at(index).text()).toEqual(guess.toString());
    });
  });
});