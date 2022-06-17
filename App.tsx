import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import Router from './src/routes';
import Store from './src/store/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
