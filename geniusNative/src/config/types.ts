//  Tipando States e funcoes uteis
export interface FullButton {
  color: string;
  code: number;
  rotate: number;
  isActive: boolean;
}

export interface PropsContext {
  userClick: Array<number>;
  sequenceWin: Array<number>;
  wave: number;
  fail: boolean;
  awaitGame: boolean;
  buttons: Array<FullButton>;
  setUserClick: React.Dispatch<React.SetStateAction<Array<number>>>;
  setButtons: (arr: Array<FullButton>) => void;
  setSequenceWin: (arr: Array<number>) => void;
  setWave: (numb: number) => void;
  setFail: (isFail: boolean) => void;
  setAwaitGame: (isAwait: boolean) => void;
  computerSequence: (reset: boolean) => void;
  initGame: () => void;
  handleAwait: () => void;
  stopCall: () => void;
}

export interface PropsButton {
  title: string;
  onPress(): void;
}
