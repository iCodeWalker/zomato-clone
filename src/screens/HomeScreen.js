import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import CircleCard from '../components/CircleCard';
import RestaurantCard from '../components/RestaurantCard';
import SmallCard from '../components/SmallCard';
import OfferCard from '../components/OfferCard';
import Header from '../components/Header';
import restaurantsList from '../store/data/restaurantsList.json';

const restaurants = [
  {
    id: 1,
    name: 'KFC',
    cusines: 'Burger, Fast Food',
    rating: '3.8',
    amountForOne: '$20',
    isVeg: false,
    specialFood: 'Chicken Wings',
    specialFoodAmount: '$10',
    ordersPlaced: '995+',
    isFavourite: false,
    offerPercent: '20%',
    offerAmount: '$15',
  },
  {
    id: 2,
    name: "McDonald's",
    cusines: 'Burger, Fast Food, Beverages',
    rating: '4.1',
    amountForOne: '$20',
    isVeg: false,
    specialFood: 'Burger',
    specialFoodAmount: '$10',
    ordersPlaced: '1005+',
    isFavourite: false,
    offerPercent: '60%',
    offerAmount: '$10',
  },
  {
    id: 3,
    name: "Domino's Pizza",
    cusines: 'Pizza, Italian, Pasta',
    rating: '4.0',
    amountForOne: '$20',
    isVeg: false,
    specialFood: 'Pizza',
    specialFoodAmount: '$10',
    ordersPlaced: '17+',
    isFavourite: false,
    offerPercent: '10%',
    offerAmount: '$10',
  },
  {
    id: 4,
    name: "La Pino'z Pizza",
    cusines: 'Pizza, Italian, Pasta',
    rating: '3.7',
    amountForOne: '$20',
    isVeg: false,
    specialFood: 'Cheezy Pizza',
    specialFoodAmount: '$10',
    ordersPlaced: '895+',
    isFavourite: false,
    offerPercent: '55%',
    offerAmount: '$10',
  },
  {
    id: 5,
    name: 'Burger King',
    cusines: 'Burger, Fast Food',
    rating: '3.5',
    amountForOne: '$20',
    isVeg: false,
    specialFood: 'King Burger',
    specialFoodAmount: '$10',
    ordersPlaced: '675+',
    isFavourite: false,
    offerPercent: '40%',
    offerAmount: '$10',
  },
  {
    id: 6,
    name: 'Cake Walkers',
    cusines: 'Fast Food, Bakery',
    rating: '3.8',
    amountForOne: '$10',
    isVeg: true,
    specialFood: 'Red Velvet Cake',
    specialFoodAmount: '$5',
    ordersPlaced: '52+',
    isFavourite: true,
    offerPercent: '30%',
    offerAmount: '$15',
  },
];

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={{height: '100%'}}>
      <Header navigation={navigation} />
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
      <OfferCard />
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

      {restaurantsList.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Restaurant Details', {
                restaurantId: item.id,
                restaurantName: item.name,
              })
            }>
            <RestaurantCard
              restroId={item.id}
              key={index}
              name={item.name}
              cusines={item.cusines}
              rating={item.rating}
              amountForOne={item.amountForOne}
              isVeg={item.isVeg}
              specialFood={item.specialFood}
              specialFoodAmount={item.specialFoodAmount}
              ordersPlaced={item.ordersPlaced}
              isFavourite={item.isFavourite}
              offerPercent={item.offerPercent}
              offerAmount={item.offerAmount}
            />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default HomeScreen;
