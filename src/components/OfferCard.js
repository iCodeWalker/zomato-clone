import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const OfferCard = () => {
  return (
    <View style={styles.offerContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.offerTitleStyle}>Offers</Text>
        <Text style={styles.offerDecriptionStyle}>
          Up to 60% off, deal of the day
        </Text>
        <Text style={styles.offerDecriptionStyle}>and other great offers</Text>
      </View>

      <View style={styles.offerBgFirstLayer}>
        <View style={styles.offerBgSecondLayer}>
          <View style={styles.offerBgThirdLayer}>
            <View>
              <Text style={styles.textStyle}>UP TO</Text>
            </View>
            <Text style={styles.percentTextStyle}>60%</Text>
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
  textContainer: {
    paddingVertical: 10,
    paddingLeft: 10,
  },
  offerTitleStyle: {
    color: '#3a0ca3',
    fontSize: 22,
    fontWeight: 'bold',
  },
  offerDecriptionStyle: {
    color: '#3a0ca3',
  },
  percentTextStyle: {
    fontSize: 30,
    fontWeight: '800',
    color: '#ffffff',
    lineHeight: 32,
  },
  textStyle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '400',
    includeFontPadding: false,
    lineHeight: 17,
  },
  offerBgFirstLayer: {
    backgroundColor: '#bbd0ff',
    borderRadius: 100,
    elevation: 100,
    paddingLeft: 25,
  },
  offerBgSecondLayer: {
    backgroundColor: '#c1cdf9',
    borderRadius: 50,
    elevation: 100,
    paddingLeft: 25,
  },
  offerBgThirdLayer: {
    backgroundColor: '#42048a',
    padding: 10,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 100,
    paddingLeft: 30,
  },
});

export default OfferCard;
