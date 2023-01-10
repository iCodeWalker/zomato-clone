import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SpecialFood = ({specialFood, specialFoodAmount}) => {
  return (
    <View style={styles.specialFoodContainer}>
      <View style={styles.specialFoodSubContainer}>
        <Text style={styles.specialFoodTextStyle}>{specialFood}</Text>
        <Text style={styles.specialFoodTextStyle}>
          Order for {specialFoodAmount}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  specialFoodContainer: {
    position: 'absolute',
    top: 40,
    right: 10,
  },
  specialFoodSubContainer: {
    backgroundColor: '#ffffff',
    opacity: 0.8,
    padding: 5,
    borderRadius: 10,
  },
  specialFoodTextStyle: {
    color: 'black',
    fontWeight: '600',
    fontSize: 12,
  },
});

export default SpecialFood;
