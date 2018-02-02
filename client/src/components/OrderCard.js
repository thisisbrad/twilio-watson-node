import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Svg, { Image } from 'react-native-svg';

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

    // const SVGpath = `../../assets/svgs/${size}-${flavor}-${cherry}-${nuts}.svg`;
    const SVGpath = '../../assets/svgs/large-chocolate-yes-yes.svg';
    console.log('PATH', SVGpath);

    return (
      <View style={styles.card}>
        <View>
          <Svg height="100" width="100">
            <Image
              x="5%"
              y="5%"
              width="50%"
              height="50%"
              href={require(SVGpath)}
            />
          </Svg>
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
    width: 300,
    margin: 10,
    padding: 10,
    backgroundColor: 'white'
  },
  iceCream: {
    // Holds Ice Cream Image
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
