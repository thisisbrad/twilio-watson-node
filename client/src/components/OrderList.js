import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  RefreshControl,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';

class OrderList extends Component {
  state = {
    refreshing: false
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
    return orders.map((todo, index) => (
      <TodoItem
        key={todo._id}
        id={todo._id}
        index={index}
        checked={todo.checked}
        text={todo.text}
      />
    ));
  };

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#BCE3E7', '#75CBD0']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 600
          }}
        />
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
        >
          {this.renderOrders()}
        </ScrollView>
        <TouchableOpacity style={styles.button} onPress={this.logout}>
          <Text style={styles.buttonText}>LOGOUT</Text>
        </TouchableOpacity>
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
