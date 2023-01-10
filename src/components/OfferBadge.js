import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const OfferBadge = ({offerPercent, offerAmount}) => {
  return (
    <View style={styles.offerContainer}>
      <View style={styles.offerSubContainer}>
        <Text style={styles.offerTextStyle}>{offerPercent} OFF</Text>
        <Text style={styles.offerTextStyle}>Up to {offerAmount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  offerContainer: {
    position: 'absolute',
    top: 150,
    left: -10,
  },
  offerSubContainer: {
    backgroundColor: '#4714dd',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  offerTextStyle: {color: '#ffffff', fontWeight: '600', fontSize: 12},
});
export default OfferBadge;
