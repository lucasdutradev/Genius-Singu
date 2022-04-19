import React, {createContext, useState} from 'react';

interface PropsContext {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const DefaultValue = {
  state: '',
  setState: () => {},
};

export const LogicGeniusContext = createContext<PropsContext>(DefaultValue);

export const LogicGeniusProvider: React.FC = ({children}) => {
  const [state, setState] = useState('');
  return (
    <LogicGeniusContext.Provider value={{state, setState}}>
      {children}
    </LogicGeniusContext.Provider>
  );
};
