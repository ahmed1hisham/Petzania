import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import AppNavigator from './app/navigation/AppNavigator';

const App = () => {
  Icon.loadFont();
  return <AppNavigator />;
};

export default App;
