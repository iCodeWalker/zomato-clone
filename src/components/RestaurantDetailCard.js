import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CouponCard from './CouponCard';
import restaurantDetailData from '../store/data/restaurantDetail.json';

const RestaurantDetailCard = ({restaurantName, restaurantId}) => {
  return restaurantDetailData.map((item, index) => {
    return item.id === restaurantId ? (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.restroNameStyle}>{restaurantName}</Text>
            <Text style={{color: 'black'}}>{item.typeOfCuisines}</Text>
            <Text>{item.address}</Text>
            <Text style={styles.deliveryTextStyle}>
              <Icon name="alarm" color="green" size={18} />{' '}
              {item.averageDeliveryTime} | {item.distance} away
            </Text>
          </View>
          <View>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingTextStyle}>
                {item.restroRating || 3.8} <Icon name="star" size={15} />
              </Text>
            </View>
            <View style={styles.reviewContainer}>
              <Text style={styles.reviewTextStyle}>{item.restroReviews}</Text>
              <Text style={{textAlign: 'center', fontWeight: '600'}}>
                Reviews
              </Text>
            </View>
          </View>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.couponCard}>
          {item.coupons.map((coupon, index) => {
            return <CouponCard couponData={coupon} />;
          })}
        </ScrollView>
      </View>
    ) : null;
  });
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#52006A',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    padding: 16,
  },
  restroNameStyle: {fontSize: 24, color: 'black', fontWeight: '700'},
  deliveryTextStyle: {
    color: 'black',
    fontSize: 14,
    fontWeight: '700',
    paddingTop: 4,
  },
  ratingContainer: {
    padding: 5,
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'grey',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 5,
  },
  ratingTextStyle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  reviewContainer: {
    borderWidth: 1,
    borderColor: 'grey',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  reviewTextStyle: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '600',
  },
  couponCard: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 16,
  },
});

export default RestaurantDetailCard;
