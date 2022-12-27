import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const CircleCard = () => {
  return (
    <View style={{display: 'flex', alignItems: 'center', margin: 10}}>
      <Image
        source={require('../assets/images/dish.jpg')}
        style={styles.imageContainer}
      />
      <Text style={styles.title}>Burger</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 70,
    height: 75,
    borderRadius: 50,
    borderWidth: 2,
  },
  title: {color: 'black', fontWeight: '600', marginTop: 5},
});

export default CircleCard;
