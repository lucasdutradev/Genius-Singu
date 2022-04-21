import React from 'react';

import {View, Button} from 'react-native';

const StartScreen = ({navigation}: any) => {
  return (
    <View>
      <Button title="Start Game" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default StartScreen;
