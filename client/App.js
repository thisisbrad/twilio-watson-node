import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { configureStore } from './src/store';
const { persistor, store } = configureStore();

import Base from './src/components/Base';
import Loading from './src/components/Loading';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<Loading />}>
          <Base />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
