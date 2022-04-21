import React, {useContext} from 'react';

import {
  ViewBoxContain,
  ViewBoxStartGame,
  TextBoxStartGame,
  TextBoxFootGame,
  ViewBoxTextStartGame,
  ImageBoxStartGame,
} from './styled';
import ButtonDefault from '../../components/ButtonDefault';
import {LogicGeniusContext} from '../../providers/LogicGenius/logicGenius';

const StartScreen = ({navigation}: any) => {
  const {initGame} = useContext(LogicGeniusContext);
  return (
    <ViewBoxContain>
      <ViewBoxStartGame>
        <ViewBoxTextStartGame>
          <ImageBoxStartGame source={require('../../images/genius.png')} />
          <TextBoxStartGame>Welcome to the</TextBoxStartGame>
          <TextBoxStartGame>Genius Game!</TextBoxStartGame>
        </ViewBoxTextStartGame>
        <ButtonDefault
          title="Start!"
          onPress={() => {
            initGame();
            return navigation.navigate('Home');
          }}
        />
      </ViewBoxStartGame>
      <TextBoxFootGame>Created By Lucas Bryan</TextBoxFootGame>
    </ViewBoxContain>
  );
};

export default StartScreen;
