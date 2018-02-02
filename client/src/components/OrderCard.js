import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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
        <Text style={styles.sizeTitle}>{size}</Text>
        <Text style={styles.flavorTitle}>{flavor} Sundae</Text>

        <View style={styles.orderDetails}>
          <Text>Cherry: {cherry}</Text>
          <Text>Nuts: {nuts}</Text>
        </View>
        <Text style={styles.flavorTitle}>{from}</Text>
        <Text>{this.state.status}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'stretch',
    // height: 200,
    margin: 10,
    padding: 10,
    backgroundColor: 'white'
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
  button: { backgroundColor: '#FFCC25' },
  buttonText: {
    padding: 8,
    fontSize: 16,
    color: 'white',
    textAlign: 'center'
  }
});

export default OrderCard;
