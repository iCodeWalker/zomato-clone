import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import VegIcon from './VegIcon';
import Icon from 'react-native-vector-icons/Ionicons';

const HistoryCard = () => {
  const ratingArray = [1, 2, 3, 4, 5];
  return (
    <View style={styles.historyCardContainer}>
      <View style={styles.restroContainer}>
        <View style={styles.restroSubContainer}>
          <View>
            <Image
              source={require('../assets/images/dish.jpg')}
              style={styles.imageStyle}
            />
          </View>
          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
              KFC
            </Text>
            <Text style={{fontSize: 12, fontWeight: '700'}}>
              Vijay Nagar, Indore
            </Text>
            <Text style={{fontSize: 12, fontWeight: '700', color: 'red'}}>
              Does not deliver to your location
            </Text>
          </View>
        </View>
        <View style={{justifyContent: 'center', marginRight: 10}}>
          <View
            style={{backgroundColor: '#e9ecef', borderRadius: 5, padding: 5}}>
            <Text>Delivered</Text>
          </View>
          <View>
            <Text style={{fontSize: 12, color: 'red', fontWeight: '700'}}>
              View menu
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.dishDetailConatiner}>
        <View style={styles.dishInfoContainer}>
          <VegIcon />
          <Text style={styles.dishTextStyle}>1 x Hot & Crispy Chicken-4pc</Text>
        </View>
        <View style={styles.dishInfoContainer}>
          <VegIcon />
          <Text style={styles.dishTextStyle}>1 x Hot & Crispy Chicken-4pc</Text>
        </View>
      </View>
      <View style={styles.dateTextContainer}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '600',
          }}>
          19 Dec 2022 at 11:08PM
        </Text>
        <Text style={{color: 'black', fontWeight: '600'}}>$10.99 </Text>
      </View>

      <View style={styles.ratingContainer}>
        <Text style={styles.ratingTextStyle}>Rate</Text>
        {ratingArray.map((item, index) => {
          return (
            <View style={styles.ratingIconContainer}>
              <Text>{item}</Text>
              <Icon name="star" size={10} />
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  historyCardContainer: {
    marginHorizontal: 16,
    marginVertical: 16,
    borderWidth: 1,
    borderColor: '#e9ecef',
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  restroContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
    backgroundColor: '#f5f3f4',
    borderRadius: 10,
  },
  restroSubContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  dishDetailConatiner: {
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderBottomColor: '#e9ecef',
    paddingBottom: 10,
  },
  imageStyle: {
    height: 60,
    width: 60,
    borderRadius: 10,
  },
  dishInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  dishTextStyle: {
    marginLeft: 10,
    color: 'black',
    fontWeight: '600',
  },
  dateTextContainer: {
    marginTop: 10,
    marginHorizontal: 10,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  ratingTextStyle: {
    color: 'red',
    fontWeight: '700',
  },
  ratingContainer: {
    marginHorizontal: 10,
    marginTop: 15,
    paddingBottom: 15,
    display: 'flex',
    flexDirection: 'row',
  },
  ratingIconContainer: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    paddingHorizontal: 5,
  },
});

export default HistoryCard;
