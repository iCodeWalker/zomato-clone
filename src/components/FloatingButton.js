import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FloatingButton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.iconSubContainer}>
          <MaterialCommunityIcons name="silverware" size={15} color="#f9c74f" />
        </View>
      </View>
      <View>
        <Text style={styles.textStyle}>Menu</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: 'black',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
    width: '35%',
    shadowColor: '#52006A',
    position: 'absolute',
    zIndex: 100,
    bottom: 20,
    alignSelf: 'center',
  },
  iconContainer: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#f9c74f',
    shadowColor: '#ff7b00',
  },
  iconSubContainer: {
    padding: 3,
    borderRadius: 50,
    backgroundColor: '#7f4f24',
  },
  textStyle: {
    color: '#ffffff',
    fontWeight: '700',
    marginLeft: 8,
  },
});

export default FloatingButton;
