import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import CircleCard from '../components/CircleCard';
import RestaurantCard from '../components/RestaurantCard';
import SearchBar from '../components/SearchBar';
import SmallCard from '../components/SmallCard';
import Header from '../components/header';

const HomeScreen = () => {
  return (
    <View style={{height: '100%'}}>
      <Header />
      <SearchBar />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{display: 'flex', flexDirection: 'row', marginVertical: 16}}>
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
            fontSize: 20,
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
        <CircleCard
          imageUrl={require('../assets/images/pizza.jpg')}
          title="Pizza"
        />
        <CircleCard
          imageUrl={require('../assets/images/sandwich.jpg')}
          title="Sandwich"
        />
        <CircleCard
          imageUrl={require('../assets/images/burger.jpg')}
          title="Burger"
        />
        <CircleCard
          imageUrl={require('../assets/images/paratha.jpg')}
          title="Paratha"
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginHorizontal: 16,
          marginBottom: 5,
        }}>
        <CircleCard
          imageUrl={require('../assets/images/dosa.jpg')}
          title="Dosa"
        />
        <CircleCard
          imageUrl={require('../assets/images/sandwich.jpg')}
          title="Thali"
        />
        <CircleCard
          imageUrl={require('../assets/images/biryani.jpg')}
          title="Biryani"
        />
        <CircleCard
          imageUrl={require('../assets/images/paneer.jpg')}
          title="Paneer"
        />
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginHorizontal: 16,
          marginBottom: 5,
        }}>
        <CircleCard
          imageUrl={require('../assets/images/noodles.jpg')}
          title="Noodles"
        />
        <CircleCard
          imageUrl={require('../assets/images/chole-bhature.jpg')}
          title="Chole"
        />
        <CircleCard
          imageUrl={require('../assets/images/fries.jpg')}
          title="Fries"
        />
        <CircleCard
          imageUrl={require('../assets/images/fries.jpg')}
          title="Idli"
        />
      </View>
      <View
        style={{
          marginHorizontal: 16,
          marginTop: 15,
          paddingTop: 15,
          borderTopWidth: 1,
          borderTopColor: '#D8D5D3',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '800',
            color: 'black',
            marginBottom: 15,
          }}>
          All restaurants around you
        </Text>
      </View>

      <RestaurantCard />
    </View>
  );
};

export default HomeScreen;
