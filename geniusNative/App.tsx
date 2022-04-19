import React from 'react';
import HomeGame from './pages/Home';
import Provider from './providers';

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
