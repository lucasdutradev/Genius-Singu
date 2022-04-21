//  Setando Valores iniciais para o context

import {AllButtons} from './buttonsGeniusObj';

export const DEFAULT_VALUES = {
  userClick: [],
  sequenceWin: [],
  wave: 0,
  fail: false,
  awaitGame: false,
  buttons: AllButtons,
  setAwaitGame: () => {},
  setFail: () => {},
  setWave: () => {},
  setUserClick: () => {},
  setSequenceWin: () => {},
  setButtons: () => {},
  stopCall: () => {},
  computerSequence: () => {},
  initGame: () => {},
  handleAwait: () => {},
};
