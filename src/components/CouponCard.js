import React from 'react';
import {View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CouponCard = ({couponData}) => {
  return (
    <View
      style={{
        borderWidth: 3,
        borderColor: '#caf0f8',
        width: '45%',
        borderRadius: 15,
        backgroundColor: '#caf0f8a0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 10,
      }}>
      <View style={{flex: 1, paddingHorizontal: 10, alignSelf: 'center'}}>
        <MaterialCommunityIcons
          name="ticket-percent"
          color="#3f37c9"
          size={30}
        />
      </View>
      <View
        style={{
          flex: 4,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          padding: 10,
        }}>
        <Text style={{color: 'black', fontWeight: '700', fontSize: 15}}>
          {couponData.percentOff} OFF up to {couponData.amountOff}
        </Text>
        <Text style={{color: 'grey', fontWeight: '500', fontSize: 13}}>
          use code {couponData.codeName}
        </Text>
      </View>
    </View>
  );
};

export default CouponCard;
