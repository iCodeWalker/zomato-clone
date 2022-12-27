import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SmallCard = ({title}) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#D8D5D3',
    backgroundColor: '#F0EFEE',
    elevation: 10,
    shadowColor: '#52006A',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 14,
    color: 'black',
    fontWeight: '600',
  },
});

export default SmallCard;
