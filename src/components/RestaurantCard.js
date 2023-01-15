import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IsFavouriteButton from './IsFavouriteButton';
import OfferBadge from './OfferBadge';
import SpecialFood from './SpecialFood';
import VegHeading from './VegHeading';

const RestaurantCard = ({
  name,
  restroID,
  cusines,
  rating,
  amountForOne,
  isVeg,
  specialFood,
  specialFoodAmount,
  ordersPlaced,
  isFavourite,
  offerPercent,
  offerAmount,
}) => {
  return (
    <View style={styles.restroCardContainer}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/images/dish.jpg')}
      />

      <VegHeading isVeg={isVeg} />

      <SpecialFood
        specialFood={specialFood}
        specialFoodAmount={specialFoodAmount}
      />
      <IsFavouriteButton isFavourite={isFavourite} name={name} />

      <OfferBadge offerAmount={offerAmount} offerPercent={offerPercent} />

      <View style={styles.textContainer}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{cusines}</Text>
        </View>

        <View>
          <Text style={styles.rating}>
            {rating} <Icon name="star" size={15} />
          </Text>
          <Text style={styles.subtitle}>{amountForOne} for one</Text>
        </View>
      </View>
      <View style={styles.ordersPlacedDesc}>
        <View
          style={{backgroundColor: '#757bc8', borderRadius: 50, padding: 2}}>
          <Icon name="trending-up" size={15} color="white" />
        </View>

        <Text style={{marginLeft: 10}}>
          {ordersPlaced} orders placed from here recently
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  restroCardContainer: {
    marginHorizontal: 16,
    marginBottom: 50,
    height: 350,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 20,
    shadowColor: '#52006A',
  },
  tinyLogo: {
    height: 200,
    width: 360,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 21,
    fontWeight: '800',
    color: 'black',
  },
  subtitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1d1d1d',
    paddingTop: 5,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 15,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#D8D5D3',
    paddingBottom: 20,
  },
  rating: {
    paddingVertical: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: '700',
    color: 'white',
    backgroundColor: 'green',
    borderRadius: 10,
    width: 60,
  },
  ordersPlacedDesc: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
});

export default RestaurantCard;
