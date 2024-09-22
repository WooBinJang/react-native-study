import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';

import AuthStackNavigator from './src/navigation/AuthStackNavigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
}

export default App;
