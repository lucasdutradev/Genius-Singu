import React from 'react';
import {ButtonGeniusDefault} from '../../components/ButtonsGenius/styled';
import {TextTitle, ViewBox, ViewBoxContainer, ViewBoxGame} from './styled';

const HomeGame = () => {
  return (
    <ViewBoxContainer>
      <TextTitle>Genius Singu</TextTitle>
      <ViewBox>
        <TextTitle>Reservado</TextTitle>
      </ViewBox>
      <ViewBoxGame>
        <ButtonGeniusDefault color="#ff6f6f" title="1" />
        <ButtonGeniusDefault color="#80ff86" title="2" />
        <ButtonGeniusDefault color="#e0ff6e" title="3" />
        <ButtonGeniusDefault color="#8afbff" title="4" />
      </ViewBoxGame>
    </ViewBoxContainer>
  );
};

export default HomeGame;
