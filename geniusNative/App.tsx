import React from 'react';
import HomeGame from './app/pages/Home';
import Provider from './app/providers';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <Provider>
      <HomeGame />
    </Provider>
  );
};

export default App;
