import React, {useContext} from 'react';
import {FullButton} from '../../config/types';
import {LogicGeniusContext} from '../../providers/LogicGenius/logicGenius';
import {ButtonGeniusDefault} from './styled';

const ButtonGenius = ({color, code, rotate, isActive}: FullButton) => {
  const {userClick, setUserClick} = useContext(LogicGeniusContext);
  return (
    <ButtonGeniusDefault
      rotate={rotate}
      changeColor={color}
      onPress={() => setUserClick([...userClick, code])}
      isActive={isActive}
    />
  );
};

export default ButtonGenius;
