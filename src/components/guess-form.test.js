import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessForm} from './guess-form';
import {makeGuess} from '../actions'

describe('<GuessForm />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });
  it('Should dispatch makeGuess when the form is submitted', () => {
    const dispatch = jest.fn();
    const wrapper = mount(<GuessForm dispatch={dispatch} />);
    const guess = '24';
    wrapper.find('input[type="text"]').instance().value = guess;
    wrapper.simulate('submit');
    expect(dispatch).toHaveBeenCalledWith(makeGuess(guess));
  });
});