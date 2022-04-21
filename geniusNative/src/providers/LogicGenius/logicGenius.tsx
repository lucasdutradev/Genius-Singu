import React, {createContext, useEffect, useState} from 'react';
import {AllButtons} from '../../config/buttonsGeniusObj';
import {DEFAULT_VALUES} from '../../config/defaultValues';
import {FullButton, PropsContext} from '../../config/types';

export const LogicGeniusContext = createContext<PropsContext>(DEFAULT_VALUES); // Juntando a tipagem com os valores iniciasis

// Referenciando o tipo Children com React.FC
export const LogicGeniusProvider: React.FC = ({children}) => {
  // criando e tipando os States--------------
  const [userClick, setUserClick] = useState<Array<number>>([]);
  const [sequenceWin, setSequenceWin] = useState<Array<number>>([]);
  const [wave, setWave] = useState<number>(0);
  const [fail, setFail] = useState<boolean>(false);
  const [awaitGame, setAwaitGame] = useState<boolean>(false);
  const [buttons, setButtons] = useState<Array<FullButton>>(AllButtons);
  // -----------------------------------------

  // criando as funcoes principais --------------
  const computerSequence = (reset: boolean) => {
    setUserClick([]);
    if (reset) {
      setSequenceWin([Math.floor(Math.random() * 4 + 1)]);
    } else {
      setSequenceWin([...sequenceWin, Math.floor(Math.random() * 4 + 1)]);
    }
  };

  const initGame = () => {
    setFail(false);
    setWave(0);
    computerSequence(true);
  };

  const handleAwait = () => {
    setTimeout(() => {
      setAwaitGame(false);
    }, 1000 * sequenceWin.length);
  };

  const stopCall = () => {
    setTimeout(() => {
      const clickCompt = buttons.map(butt => ({...butt, isActive: false}));
      setButtons(clickCompt);
    }, 650);
  };

  // --------------------------------------------

  // criando os Effects principais --------------

  useEffect(() => {
    const clickVerif = userClick.length - 1;
    if (sequenceWin.every((value, index) => value === userClick[index])) {
      setWave(wave + 1);
      computerSequence(false);
    }
    userClick[clickVerif] !== sequenceWin[clickVerif] && setFail(true);
  }, [userClick]);
  // --------------------------------------------

  // Retornando os valores para utilizar nos meus Components e Pages.
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
        fail,
        setFail,
        initGame,
        awaitGame,
        setAwaitGame,
        handleAwait,
        stopCall,
        buttons,
        setButtons,
      }}>
      {children}
    </LogicGeniusContext.Provider>
  );
};
