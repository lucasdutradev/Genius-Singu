import React, {createContext, useState} from 'react';

interface PropsContext {
  userClick: Array<number>;
  setUserClick: React.Dispatch<React.SetStateAction<Array<number>>>;
  sequenceWin: Array<number>;
  setSequenceWin: (arr: Array<number>) => void;
  computerSequence: (reset: boolean) => void;
}

const DefaultValue = {
  userClick: [],
  setUserClick: () => {},
  sequenceWin: [],
  setSequenceWin: () => {},
  computerSequence: () => {},
};

export const LogicGeniusContext = createContext<PropsContext>(DefaultValue);

export const LogicGeniusProvider: React.FC = ({children}) => {
  const [userClick, setUserClick] = useState<Array<number>>([]);
  const [sequenceWin, setSequenceWin] = useState<Array<number>>([]);

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
      }}>
      {children}
    </LogicGeniusContext.Provider>
  );
};
