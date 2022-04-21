import React, {useContext, useEffect, useState} from 'react';
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
import {AllButtons} from '../../config/buttonsGeniusObj';

const HomeGame = ({navigation}: any) => {
  const {computerSequence, sequenceWin, userClick, wave, setWave} =
    useContext(LogicGeniusContext);
  const [fail, setFail] = useState(false);
  const [awaitGame, setAwaitGame] = useState(false);
  const [buttons, setButtons] = useState(AllButtons);

  const initGame = () => {
    setFail(false);
    setWave(0);
    computerSequence(true);
  };

  const handleAwait = () => {
    setTimeout(() => {
      setAwaitGame(false);
    }, 1000 * sequenceWin.length);
  };

  const stopCall = () => {
    setTimeout(() => {
      const clickCompt = buttons.map(butt => ({...butt, isActive: false}));
      setButtons(clickCompt);
    }, 650);
  };

  useEffect(() => {
    const clickVerif = userClick.length - 1;
    if (sequenceWin.every((value, index) => value === userClick[index])) {
      setWave(wave + 1);
      computerSequence(false);
    }
    if (userClick[clickVerif] !== sequenceWin[clickVerif]) {
      setFail(true);
    }
  }, [userClick]);

  useEffect(() => {
    setAwaitGame(true);
    handleAwait();
    sequenceWin.forEach((buttonNun, i) => {
      setTimeout(() => {
        const clickCompt = buttons.map(butt => {
          if (butt.code === buttonNun) {
            return {...butt, isActive: true};
          }
          return {...butt, isActive: false};
        });
        setButtons(clickCompt);
        stopCall();
      }, 1000 * i);
    });
  }, [sequenceWin]);

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
