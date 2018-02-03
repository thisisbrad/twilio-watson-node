import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import IceCreamIcon from './IceCreamIcon';

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
        <View>
          <Text style={styles.sizeTitle}>{size}</Text>
          <Text style={styles.flavorTitle}>{flavor} Sundae</Text>

          <View style={styles.orderDetails}>
            <Text style={styles.orderDetailsText}>Cherry: {cherry}</Text>
            <Text style={styles.orderDetailsText}>Nuts: {nuts}</Text>
          </View>
          <Text style={styles.flavorTitle}>{from}</Text>
          <Text>{this.state.status}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'stretch',
    flexDirection: 'row',
    height: 250,
    // width: 300,
    margin: 10,
    padding: 10,
    backgroundColor: 'white'
  },
  iceCream: {
    // Holds Ice Cream Image
    // borderWidth: 1,
    // borderColor: '#d6d7da'
    paddingRight: 20
  },
  order: {
    // Order side of the card
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
  },
  button: { backgroundColor: '#FFCC25' },
  buttonText: {
    padding: 8,
    fontSize: 16,
    color: 'white',
    textAlign: 'center'
  }
});

export default OrderCard;
