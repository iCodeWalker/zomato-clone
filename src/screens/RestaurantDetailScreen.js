import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CuisineSection from '../components/CuisineSection';
import FloatingButton from '../components/FloatingButton';
import RestaurantDetailCard from '../components/RestaurantDetailCard';
import restaurantDetailData from '../store/data/restaurantDetail.json';

const RestaurantDetail = ({route, navigation}) => {
  const {restaurantId, restaurantName} = route.params;

  const CuisineSections = restaurantDetailData.map((item, index) => {
    return <CuisineSection key={index} cuisines={item.cuisines} />;
  });

  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
      }}>
      <ScrollView>
        <RestaurantDetailCard restaurantName={restaurantName} />
        {CuisineSections}
      </ScrollView>
      <FloatingButton />
    </View>
  );
};

export default RestaurantDetail;
