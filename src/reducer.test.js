import reducer from './reducer';
import {newGame, makeGuess, toggleInfoModal} from './actions';

describe('Reducer', () => {
  const guess1 = '25';
  const guess2 = '30';
  const guess3 = '65';
  const correctAnswer = '35';

  it('Should set the initial state when nothing is passed in', () => {
    const state = reducer(undefined, {type: '__UNKNOWN'});

    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual('Make your guess!');
    expect(state.correctAnswer).toBeGreaterThanOrEqual(1);
    expect(state.correctAnswer).toBeLessThanOrEqual(100);
  })
})