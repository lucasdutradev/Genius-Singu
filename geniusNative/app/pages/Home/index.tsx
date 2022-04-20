import React, {useContext, useEffect, useState} from 'react';
import Sound from 'react-native-sound';
import {
  TextTitle,
  ViewBox,
  ViewBoxContainer,
  ViewBoxGame,
  ViewCenterBox,
  ViewBoxTexts,
  ImageLogo,
} from './styled';
import {LogicGeniusContext} from '../../providers/LogicGenius/logicGenius';
import ButtonGenius from '../../components/ButtonsGenius';
import {Button} from 'react-native';

const HomeGame = () => {
  Sound.setCategory('Playback');
  const {computerSequence, sequenceWin, userClick} =
    useContext(LogicGeniusContext);
  const [wave, setWave] = useState(0);
  const [fail, setFail] = useState(false);
  const [buttons, setButtons] = useState([
    {rotate: 0, color: '#ff6f6f', code: 1, isActive: false},
    {rotate: 90, color: '#80ff86', code: 2, isActive: false},
    {rotate: 270, color: '#e0ff6e', code: 4, isActive: false},
    {rotate: 180, color: '#8afbff', code: 3, isActive: false},
  ]);

  const GameOver = () => {
    console.log('voce perdeu');
    setWave(0);
    computerSequence(true);
  };

  const stopCall = () => {
    setTimeout(() => {
      const clickCompt = buttons.map(butt => ({...butt, isActive: false}));
      setButtons(clickCompt);
    }, 750);
  };

  useEffect(() => {
    const clickVerif = userClick.length - 1;
    if (sequenceWin.every((value, index) => value === userClick[index])) {
      setWave(wave + 1);
      computerSequence(false);
    }
    if (userClick[clickVerif] !== sequenceWin[clickVerif]) {
      GameOver();
    }
  }, [userClick]);

  useEffect(() => {
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
    setFail(false);
  }, [sequenceWin, fail]);

  return (
    <ViewBoxContainer>
      <TextTitle>Genius Singu</TextTitle>
      <ViewBox>
        <TextTitle>Level: {wave + 1}</TextTitle>
      </ViewBox>
      <ViewBoxGame>
        <ViewCenterBox>
          <ImageLogo source={require('../../images/logo.png')} />
        </ViewCenterBox>
        {buttons.map(btn => (
          <ButtonGenius
            rotate={btn.rotate}
            color={btn.color}
            code={btn.code}
            isActive={btn.isActive}
          />
        ))}
      </ViewBoxGame>
      <ViewBoxTexts>
        <Button title="start" onPress={() => computerSequence(true)} />
      </ViewBoxTexts>
    </ViewBoxContainer>
  );
};

export default HomeGame;