import React from 'react';

import LottieView from 'lottie-react-native';

const Splash = ({navigation}: any) => {
  return (
    <LottieView
      source={require('../../assets/19902-splash-screen.json')}
      autoPlay
      loop={false}
      onAnimationFinish={() => navigation.navigate('Start')}
    />
  );
};

export default Splash;
