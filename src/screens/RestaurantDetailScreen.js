import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import BottomSlideButton from '../components/BottomSlideButton';
import CuisineSection from '../components/CuisineSection';
import FloatingButton from '../components/FloatingButton';
import RestaurantDetailCard from '../components/RestaurantDetailCard';
import restaurantDetailData from '../store/data/restaurantDetail.json';

const RestaurantDetail = ({route, navigation}) => {
  const {restaurantId, restaurantName} = route.params;

  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
      }}>
      <ScrollView>
        <RestaurantDetailCard
          restaurantId={restaurantId}
          restaurantName={restaurantName}
        />
        {restaurantDetailData.map((item, index) => {
          return item.id === restaurantId ? (
            <CuisineSection key={index} cuisines={item.cuisines} />
          ) : null;
        })}
        <View style={{marginTop: 30, padding: 16, marginBottom: 100}}>
          <Text style={{marginVertical: 10, fontSize: 12}}>
            Menu items, nutritional information and prices are set directly by
            the restaurant.
          </Text>
          <Text style={{marginVertical: 10, fontSize: 12}}>
            nutritional information values displayed are indicative, per serving
            and may vary depending on the ingredients, portion size and
            customizations.
          </Text>
          <Text style={{marginVertical: 10, fontSize: 12}}>
            An average active adult requires 2,000 kcal energy per day, however,
            calorie need may vary
          </Text>

          <Text
            style={{
              fontSize: 12,
              fontWeight: '700',
              color: 'red',
              marginTop: 50,
            }}>
            Report an issue with the menu
          </Text>
        </View>
      </ScrollView>
      {/* <FloatingButton /> */}
      <BottomSlideButton />
    </View>
  );
};

export default RestaurantDetail;
