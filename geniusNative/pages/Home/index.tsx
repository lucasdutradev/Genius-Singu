import React, {useContext} from 'react';
import {
  TextTitle,
  ViewBox,
  ViewBoxContainer,
  ViewBoxGame,
  ViewCenterBox,
  ViewBoxTexts,
} from './styled';
import {LogicGeniusContext} from '../../providers/LogicGenius/logicGenius';
import ButtonGenius from '../../components/ButtonsGenius';

const HomeGame = () => {
  const {state} = useContext(LogicGeniusContext);
  console.log(state);
  return (
    <ViewBoxContainer>
      <TextTitle>Genius Singu</TextTitle>
      <ViewBox>
        <TextTitle>Reservado</TextTitle>
      </ViewBox>
      <ViewBoxGame>
        <ButtonGenius rotate={0} color="#ff6f6f" code="1" />
        <ButtonGenius rotate={90} color="#80ff86" code="2" />
        <ViewCenterBox />
        <ButtonGenius rotate={270} color="#e0ff6e" code="3" />
        <ButtonGenius rotate={180} color="#8afbff" code="4" />
      </ViewBoxGame>
      <ViewBoxTexts />
    </ViewBoxContainer>
  );
};

export default HomeGame;
