import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import CircleCard from '../components/CircleCard';
import RestaurantCard from '../components/RestaurantCard';
import SearchBar from '../components/SearchBar';
import SmallCard from '../components/SmallCard';

const HomeScreen = () => {
  return (
    <View style={{height: '100%'}}>
      <SearchBar />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{display: 'flex', flexDirection: 'row', margin: 16}}>
        <SmallCard title="Sort" />
        <SmallCard title="Fast Delivery" />
        <SmallCard title="Great Offers" />
        <SmallCard title="Rating 4.0+" />
        <SmallCard title="Pure Veg" />
        <SmallCard title="Cuisines" />
        <SmallCard title="More" />
      </ScrollView>
      <View style={{marginLeft: 16}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '800',
            color: 'black',
            marginBottom: 15,
          }}>
          Eat what makes you happy
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginHorizontal: 16,
          marginBottom: 5,
        }}>
        <CircleCard />
        <CircleCard />
        <CircleCard />
        <CircleCard />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginHorizontal: 16,
          marginBottom: 5,
        }}>
        <CircleCard />
        <CircleCard />
        <CircleCard />
        <CircleCard />
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginHorizontal: 16,
          marginBottom: 5,
        }}>
        <CircleCard />
        <CircleCard />
        <CircleCard />
        <CircleCard />
      </View>

      <RestaurantCard />
    </View>
  );
};

export default HomeScreen;
