import React, {useContext, useEffect} from 'react';
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
import ButtonDefault from '../../components/ButtonDefault';

const HomeGame = ({navigation}: any) => {
  const {
    wave,
    fail,
    initGame,
    awaitGame,
    buttons,
    setAwaitGame,
    handleAwait,
    sequenceWin,
    setButtons,
    stopCall,
  } = useContext(LogicGeniusContext);

  useEffect(() => {
    setAwaitGame(true);
    handleAwait();
    sequenceWin.forEach((buttonNun, i) => {
      setTimeout(() => {
        const clickCompt = buttons.map(butt => {
          if (butt.code === buttonNun) {
            butt.nota.play();
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
          <ButtonDefault title="Resetar" onPress={() => initGame()} />
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
            nota={btn.nota}
          />
        ))}
      </ViewBoxGame>
      <ViewBoxTexts>
        <ButtonDefault
          title="Back Menu"
          onPress={() => navigation.navigate('Start')}
        />
      </ViewBoxTexts>
    </ViewBoxContainer>
  );
};

export default HomeGame;
