import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const VegHeading = ({isVeg}) => {
  {
    return isVeg ? (
      <View style={styles.isVegContainer}>
        <Text style={styles.isVegTextStyle}>
          <Icon name="leaf" size={15} /> PURE VEG RESTAURANT
        </Text>
      </View>
    ) : (
      <View></View>
    );
  }
};

const styles = StyleSheet.create({
  isVegContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  isVegTextStyle: {
    backgroundColor: 'green',
    opacity: 0.8,
    color: '#ffffff',
    fontWeight: '800',
    padding: 5,
    width: '100%',
    textAlign: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default VegHeading;
