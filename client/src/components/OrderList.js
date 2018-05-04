import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  RefreshControl,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions';

import { Ionicons } from '@expo/vector-icons';

import OrderCard from './OrderCard';

class OrderList extends Component {
  state = {
    refreshing: false
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    await dispatch(fetchTodos());
    console.log('OrderList -> ', this.props.orders);
  }

  onRefresh = async () => {
    console.log('Refreshing!!!');
    this.setState({ refreshing: true });
    const { dispatch } = this.props;
    await dispatch(fetchTodos());
    this.setState({ refreshing: false });
    console.log('OrderList -> ', this.props.orders);
  };

  onScroll = async e => {
    const xOffset = e.nativeEvent.contentOffset.x;
    console.log('Our offset is: ', xOffset);
    // This works but fires to many times
    // Maybe a scrollview to refresh, with the horizontal list inside of it?
    // if (xOffset < -10) {
    //   this.setState({ refreshing: true });
    //   const { dispatch } = this.props;
    //   await dispatch(fetchTodos());
    //   this.setState({ refreshing: false });
    // }
  };

  renderOrders = () => {
    const { orders } = this.props;
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
              tintColor="teal"
              title="Loading Orders..."
            />
          }
          style={styles.scrollMenu}
          scrollEventThrottle={16}
          contentContainerStyle={styles.list}
          automaticallyAdjustContentInsets={false}
          horizontal
        >
          {this.renderOrders()}
        </ScrollView>
        <View style={styles.ordersDashboard}>
          <Text style={styles.dashboardTitle}>Order Dashboard</Text>
        </View>
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
  scrollMenu: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: 'pink'
  },
  ordersDashboard: {
    flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'stretch',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 2,
    borderColor: '#003548',
    backgroundColor: '#97D7E2'
  },
  dashboardTitle: {
    fontFamily: 'supermercado',
    fontSize: 30,
    color: '#003548'
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

function mapStateToProps(state) {
  // console.log('the state', state);
  return {
    orders: state.orders
  };
}

export default connect(mapStateToProps)(OrderList);
