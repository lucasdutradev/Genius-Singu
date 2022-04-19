import React from 'react';
import {Text} from 'react-native';
import {ButtonGeniusDefault} from './styled';

interface FullButton {
  color: string;
  code: string;
  rotate: number;
}

const ButtonGenius = ({color, code, rotate}: FullButton) => {
  return (
    <ButtonGeniusDefault
      rotate={rotate}
      changeColor={color}
      onPress={() => console.log(code)}>
      <Text>opa</Text>
    </ButtonGeniusDefault>
  );
};

export default ButtonGenius;
