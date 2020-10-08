import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import store from './redux/store';
import Routers from './routers';

const MainApp = () => {
  return (
    <NavigationContainer>
      <Routers />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
