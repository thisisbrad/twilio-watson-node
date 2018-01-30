import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const Loading = ({ size = 'small' }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b8793'
  }
});

export default Loading;
