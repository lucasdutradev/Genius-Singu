import React from 'react';
import {PropsButton} from '../../config/types';

import {ButtonDefaultAll, ButtonText} from './styled';

const ButtonDefault = ({title, onPress}: PropsButton) => {
  return (
    <ButtonDefaultAll onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonDefaultAll>
  );
};

export default ButtonDefault;
