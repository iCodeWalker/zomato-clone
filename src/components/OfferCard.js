import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const OfferCard = () => {
  return (
    <View style={styles.offerContainer}>
      <View style={{paddingVertical: 10, paddingLeft: 10}}>
        <Text style={{color: '#3a0ca3', fontSize: 22, fontWeight: 'bold'}}>
          Offers
        </Text>
        <Text style={{color: '#3a0ca3'}}>Up to 60% off, deal of the day</Text>
        <Text style={{color: '#3a0ca3'}}>and other great offers</Text>
      </View>

      <View
        style={{
          backgroundColor: '#bbd0ff',
          borderRadius: 100,
          elevation: 100,
          paddingLeft: 25,
        }}>
        <View
          style={{
            backgroundColor: '#c1cdf9',
            borderRadius: 50,
            elevation: 100,
            paddingLeft: 25,
          }}>
          <View
            style={{
              backgroundColor: '#42048a',
              padding: 10,
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              elevation: 100,
              paddingLeft: 30,
            }}>
            <View>
              <Text style={styles.textStyle}>UP TO</Text>
            </View>
            <Text
              style={{
                fontSize: 30,
                fontWeight: '800',
                color: '#ffffff',
                lineHeight: 32,
              }}>
              60%
            </Text>
            <View>
              <Text style={styles.textStyle}>OFF</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  offerContainer: {
    marginHorizontal: 16,
    marginVertical: 10,
    backgroundColor: '#ede5fa',
    elevation: 30,
    shadowColor: '#9bb1ff',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 10,
    borderRightColor: '#ede5fa',
    borderLeftColor: '#ede5fa',
    borderTopColor: '#ede5fa',
    borderBottomColor: '#bbd0ff',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 3,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '400',
    includeFontPadding: false,
    lineHeight: 17,
  },
});

export default OfferCard;
