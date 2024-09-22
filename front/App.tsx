import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import RootNavigator from './src/navigation/root/RootNavigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;
