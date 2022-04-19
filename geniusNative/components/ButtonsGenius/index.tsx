import React from 'react';
import {ButtonGeniusDefault} from './styled';

interface FullButton {
  color: string;
  title: string;
}

const ButtonGenius = ({color, title}: FullButton) => {
  return <ButtonGeniusDefault color={color} title={title} />;
};

export default ButtonGenius;
