import React, {useContext} from 'react';
import {LogicGeniusContext} from '../../providers/LogicGenius/logicGenius';
import {ButtonGeniusDefault} from './styled';

interface FullButton {
  color: string;
  code: number;
  rotate: number;
  isActive: boolean;
}

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
