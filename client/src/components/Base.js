import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native';
import { LinearGradient, Font } from 'expo';

import Loading from './Loading';
import Main from './Main';

class Base extends Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      supermercado: require('../../assets/fonts/SupermercadoOne-Regular.ttf')
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <KeyboardAvoidingView
        {...this.props}
        behavior="padding"
        style={{ flex: 1 }}
      >
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          <LinearGradient
            colors={['#360033', '#0b8793']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: 600
            }}
          />
          {this.state.fontLoaded ? <Main /> : <Loading size="large" />}
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b8793'
  }
});
// Connects them all and calls on the Main component
export default Base;
