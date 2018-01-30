import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, NavigatorIOS } from 'react-native';

import OrderList from './OrderList';

class Main extends Component {
  state = {
    orders: []
  };

  render() {
    return (
      <View>
        <NavigatorIOS
          initialRoute={{
            component: OrderList,
            title: 'Order List',
            navigationBarHidden: true
          }}
          style={styles.container}
        />
      </View>
    );
  }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width
  }
});

export default Main;
