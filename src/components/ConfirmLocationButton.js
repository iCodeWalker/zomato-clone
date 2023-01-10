import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ConfirmLocationButton = ({navigation}) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.textContainer}>
          <Icon name="location" size={30} style={styles.iconStyle} />
          <View>
            <Text style={styles.title}>Ganesh Nagar</Text>
            <Text style={styles.subtitle}>Bajpur, Betul</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.button}>
            <Text style={styles.textStyle}>Confirm location</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    shadowColor: '#52006A',
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowRadius: 10,
    elevation: 60,
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingBottom: 15,
    paddingTop: 20,
    paddingHorizontal: 16,
    shadowColor: '#52006A',
    shadowOffset: {
      width: 20,
      height: 15,
    },
    shadowRadius: 4,
    elevation: 20,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  iconStyle: {color: '#ff4d6d', marginRight: 5},
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff4d6d',
    width: '100%',
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '700',
  },
});

export default ConfirmLocationButton;
