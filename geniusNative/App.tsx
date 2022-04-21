import React from 'react';
import HomeGame from './src/pages/Home';
import StartScreen from './src/pages/StartScreen';
import Provider from './src/providers';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/pages/splash';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Home"
            component={HomeGame}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Start"
            component={StartScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
