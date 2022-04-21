import React, {useContext, useEffect} from 'react';
import {FullButton} from '../../config/types';
import {LogicGeniusContext} from '../../providers/LogicGenius/logicGenius';
import {ButtonGeniusDefault} from './styled';

const ButtonGenius = ({color, code, rotate, isActive, nota}: FullButton) => {
  const {userClick, setUserClick} = useContext(LogicGeniusContext);
  useEffect(() => {
    nota.setVolume(0.6);
  }, []);

  return (
    <ButtonGeniusDefault
      rotate={rotate}
      changeColor={color}
      onPress={() => {
        setUserClick([...userClick, code]);
        nota.play();
      }}
      isActive={isActive}
    />
  );
};

export default ButtonGenius;
