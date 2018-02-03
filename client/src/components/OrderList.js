import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  RefreshControl,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import OrderCard from './OrderCard';

class OrderList extends Component {
  state = {
    refreshing: false,
    orders: [
      {
        _id: '5a692729114627000a9d988b',
        convoId: '589c01bd-157b-4eb0-a520-9f06c5538cf4',
        from: '+19545405650!',
        status: 'damn',
        size: 'large',
        flavor: 'Chocolate',
        nuts: 'yes',
        cherry: 'yes'
      },
      {
        _id: '3dd92729114627000a9d942h',
        convoId: '555c01bd-157b-4eb0-a520-9f06c5538cf4',
        from: '+19545405650!',
        status: 'damn',
        size: 'medium',
        flavor: 'Vanilla',
        nuts: 'yes',
        cherry: 'yes'
      }
    ]
  };

  onRefresh = async () => {
    console.log('Refreshing!!!');
    this.setState({ refreshing: true });
    // const { auth, dispatch } = this.props;
    // await dispatch(fetchTodos(auth));
    this.setState({ refreshing: false });
  };

  renderOrders = () => {
    const { orders } = this.state;
    return orders.map((order, index) => (
      <OrderCard key={order._id} {...order} />
    ));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bar}>
          <TouchableOpacity style={styles.barButtons}>
            <Ionicons name="md-close" size={22} color="#BCE3E7" />
          </TouchableOpacity>

          <Text style={styles.barTitle}>Ice Cream Orders</Text>

          <TouchableOpacity style={styles.barButtons}>
            <Ionicons name="md-create" size={22} color="#BCE3E7" />
          </TouchableOpacity>
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }
          contentContainerStyle={styles.list}
          automaticallyAdjustContentInsets={false}
          horizontal
          pagingEnabled
        >
          {this.renderOrders()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#BCE3E7'
  },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    backgroundColor: '#003548'
  },
  barTitle: {
    fontFamily: 'supermercado',
    fontSize: 26,
    color: 'white'
  },
  barButtons: {
    padding: 10,
    backgroundColor: '#003548'
  },
  button: { backgroundColor: '#FFCC25' },
  buttonText: {
    padding: 8,
    fontSize: 16,
    color: 'white',
    textAlign: 'center'
  }
});

export default OrderList;
