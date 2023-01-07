import React from 'react';
import {View, Text} from 'react-native';

const OrderPlacedScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 18, fontWeight: '600', color: '#ff4d6d'}}>
        Your Order has been placed.
      </Text>
      <Text style={{fontSize: 18, fontWeight: '600', color: '#ff4d6d'}}>
        Thank You.
      </Text>
    </View>
  );
};

export default OrderPlacedScreen;
