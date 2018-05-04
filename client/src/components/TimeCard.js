import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';
import formatTime from '../config/formatTime';

class OrderCard extends Component {
  state = {
    elapsedTime: null
  };

  componentDidMount() {
    setInterval(() => {
      const now = moment(new Date()); //todays date
      const end = moment(this.props.placedAt); // another date
      const duration = moment.duration(now.diff(end));
      this.setState({ elapsedTime: duration });
      // console.log('time card??', this.state.elapsedTime);
    }, 1000);
  }

  render() {
    return (
      <View style={styles.timeCard}>
        <Text style={styles.timeCardText}>
          {formatTime(this.state.elapsedTime)}
        </Text>
        <Text style={styles.timeCardSubText}>mins ago</Text>
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
  timeCard: {
    alignSelf: 'flex-start',
    padding: 8,
    marginTop: -30,
    marginLeft: -20,
    borderRadius: 10,
    backgroundColor: '#2EC4B6'
  },
  timeCardText: {
    fontFamily: 'supermercado',
    fontSize: 30,
    color: 'white',
    textAlign: 'center'
  },
  timeCardSubText: {
    alignSelf: 'flex-start',
    fontFamily: 'supermercado',
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  }
});

export default OrderCard;
