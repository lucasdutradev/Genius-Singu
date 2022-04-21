import React, {createContext, useState} from 'react';

interface PropsContext {
  userClick: Array<number>;
  sequenceWin: Array<number>;
  wave: number;
  setUserClick: React.Dispatch<React.SetStateAction<Array<number>>>;
  setSequenceWin: (arr: Array<number>) => void;
  setWave: (numb: number) => void;
  computerSequence: (reset: boolean) => void;
}

const DefaultValue = {
  userClick: [],
  sequenceWin: [],
  wave: 0,
  setWave: () => {},
  setUserClick: () => {},
  setSequenceWin: () => {},
  computerSequence: () => {},
};

export const LogicGeniusContext = createContext<PropsContext>(DefaultValue);

export const LogicGeniusProvider: React.FC = ({children}) => {
  const [userClick, setUserClick] = useState<Array<number>>([]);
  const [sequenceWin, setSequenceWin] = useState<Array<number>>([]);
  const [wave, setWave] = useState<number>(0);

  const computerSequence = (reset: boolean) => {
    setUserClick([]);
    if (reset) {
      setSequenceWin([Math.floor(Math.random() * 4 + 1)]);
    } else {
      setSequenceWin([...sequenceWin, Math.floor(Math.random() * 4 + 1)]);
    }
  };

  return (
    <LogicGeniusContext.Provider
      value={{
        userClick,
        setUserClick,
        computerSequence,
        sequenceWin,
        setSequenceWin,
        wave,
        setWave,
      }}>
      {children}
    </LogicGeniusContext.Provider>
  );
};
