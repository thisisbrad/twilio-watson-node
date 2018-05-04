import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import _ from 'lodash';

import IceCreamIcon from './IceCreamIcon';
import TimeCard from './TimeCard';

class OrderCard extends Component {
  state = {
    status: null
  };

  componentDidMount() {
    const { status } = this.props;
    this.setState({ status });
  }

  render() {
    const {
      _id,
      cherry,
      createdAt,
      convoId,
      flavor,
      from,
      nuts,
      size,
      status
    } = this.props;

    return (
      <View style={styles.card}>
        <View style={styles.iceCream}>
          <IceCreamIcon {...this.props} />
        </View>
        <View style={styles.order}>
          <Text style={styles.sizeTitle}>{_.capitalize(size)}</Text>
          <Text style={styles.flavorTitle}>{_.capitalize(flavor)} Sundae</Text>

          <View style={styles.orderDetails}>
            <Text style={styles.orderDetailsText}>
              Cherry: {_.upperCase(cherry)}
            </Text>
            <Text style={styles.orderDetailsText}>
              Nuts: {_.upperCase(nuts)}
            </Text>
          </View>
          <Text style={styles.flavorTitle}>{from}</Text>
          <Text>{this.state.status}</Text>
        </View>
        <TimeCard placedAt={createdAt} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: 'white'
  },
  iceCream: {
    paddingRight: 20
  },
  order: {
    marginTop: 20
  },
  flavorTitle: {
    fontFamily: 'supermercado',
    fontSize: 26,
    color: '#03334B'
  },
  sizeTitle: {
    fontFamily: 'supermercado',
    fontSize: 42,
    color: '#9ACED0'
  },
  orderDetails: {
    flexDirection: 'row'
  },
  orderDetailsText: {
    marginRight: 10,
    color: '#9ACED0'
  }
});

export default OrderCard;
