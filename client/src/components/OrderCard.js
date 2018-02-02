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
      <View>
        <Text>{_id}</Text>
        <Text>{from}</Text>
        <Text>{from}</Text>
        <Text>{from}</Text>
        <Text>{this.state.status}</Text>
      </View>
    );
  }
}

export default OrderCard;
