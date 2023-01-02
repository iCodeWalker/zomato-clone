import React from 'react';
import {View, Text} from 'react-native';

const AddButton = () => {
  return (
    <View
      style={{
        padding: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ff4d6d',
        backgroundColor: '#fae0e4',
      }}>
      <Text
        style={{
          color: '#ff4d6d',
          fontWeight: '700',
          fontSize: 20,
          textAlign: 'center',
        }}>
        ADD
      </Text>
      <View style={{position: 'absolute', top: 0, right: 10}}>
        <Text style={{fontSize: 18, fontWeight: '600', color: '#ff4d6d'}}>
          +
        </Text>
      </View>
    </View>
  );
};

export default AddButton;
