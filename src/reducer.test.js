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
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = reducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });

  describe('newGame', () => {
    it('Should reset the state', () => {
      let state = {
        guesses: [guess1, guess2, guess3],
        feedback: 'Testing',
        correctAnswer: correctAnswer,
        showInfoModal: true
      };

      state = reducer(state, newGame());
      expect(state.guesses).toEqual([]);
      expect(state.feedback).toEqual('Make your guess!');
      expect(state.correctAnswer).toBeGreaterThanOrEqual(1);
      expect(state.correctAnswer).toBeLessThanOrEqual(100);
      expect(state.showInfoModal).toBe(false);
    });
  });

  describe('makeGuess', () => {
    it('Should add a guess to the guesses array', () => {
      let state = {
        guesses: [guess1, guess2]
      };
      state = reducer(state, makeGuess('80'));
      expect(state.guesses).toEqual(['25', '30', '80']);
    });

    it('Should provide the correct feedback for the guess', () => {
      let state ={
        guesses: [],
        feedback: 'Make your guess!',
        correctAnswer: '50'
      };
      state = reducer(state, makeGuess('10'));
      expect(state.feedback).toEqual('You\'re Cold...');
    })
  });
});