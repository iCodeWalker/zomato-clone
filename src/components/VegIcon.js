import React from 'react';
import {View, StyleSheet} from 'react-native';

const VegIcon = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 2,
    borderWidth: 1,
    borderColor: 'green',
    width: 15,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    height: 6,
    width: 6,
    backgroundColor: 'green',
    borderRadius: 50,
  },
});

export default VegIcon;
