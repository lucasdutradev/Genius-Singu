import React from 'react';
import {LogicGeniusProvider} from './LogicGenius/logicGenius';

const Provider: React.FC = ({children}) => {
  return <LogicGeniusProvider>{children}</LogicGeniusProvider>;
};

export default Provider;
