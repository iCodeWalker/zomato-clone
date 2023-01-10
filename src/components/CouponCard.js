import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CouponCard = ({couponData}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name="ticket-percent"
          color="#3f37c9"
          size={30}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {couponData.percentOff} OFF up to {couponData.amountOff}
        </Text>
        <Text style={styles.codeTextStyle}>use code {couponData.codeName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: '#caf0f8',
    width: '45%',
    borderRadius: 15,
    backgroundColor: '#caf0f8a0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
  },
  iconContainer: {
    flex: 1,
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
  textContainer: {
    flex: 4,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 10,
  },
  title: {
    color: 'black',
    fontWeight: '700',
    fontSize: 15,
  },
  codeTextStyle: {
    fontWeight: '600',
    fontSize: 13,
  },
});

export default CouponCard;
