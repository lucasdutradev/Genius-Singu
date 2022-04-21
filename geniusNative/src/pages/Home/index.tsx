import React, {useContext} from 'react';
import {
  TextTitle,
  ViewBox,
  ViewBoxContainer,
  ViewBoxGame,
  ViewCenterBox,
  ViewBoxTexts,
  ImageLogo,
  ViewAwaitSequence,
  ViewBoxOver,
} from './styled';
import {LogicGeniusContext} from '../../providers/LogicGenius/logicGenius';
import ButtonGenius from '../../components/ButtonsGenius';
import {Button} from 'react-native';

const HomeGame = ({navigation}: any) => {
  const {wave, fail, initGame, awaitGame, buttons} =
    useContext(LogicGeniusContext);

  return (
    <ViewBoxContainer>
      {fail && (
        <ViewBoxOver>
          <TextTitle>Game Over!</TextTitle>
          <Button title="Resetar" onPress={() => initGame()} />
        </ViewBoxOver>
      )}
      <ViewBox>
        <TextTitle>Level: {wave + 1}</TextTitle>
      </ViewBox>
      <ViewBoxGame>
        <ViewCenterBox>
          <ImageLogo source={require('../../images/logo.png')} />
        </ViewCenterBox>
        {awaitGame && <ViewAwaitSequence />}
        {buttons.map((btn, i) => (
          <ButtonGenius
            key={i}
            rotate={btn.rotate}
            color={btn.color}
            code={btn.code}
            isActive={btn.isActive}
          />
        ))}
      </ViewBoxGame>
      <ViewBoxTexts>
        <Button
          title="Back Menu"
          onPress={() => navigation.navigate('Start')}
        />
      </ViewBoxTexts>
    </ViewBoxContainer>
  );
};

export default HomeGame;
