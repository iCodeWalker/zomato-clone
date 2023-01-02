import React from 'react';
import {View, Text} from 'react-native';

const VegIcon = () => {
  return (
    <View
      style={{
        padding: 2,
        borderWidth: 1,
        borderColor: 'green',
        width: 15,
        height: 15,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          height: 6,
          width: 6,
          backgroundColor: 'green',
          borderRadius: 50,
        }}></View>
    </View>
  );
};

export default VegIcon;
