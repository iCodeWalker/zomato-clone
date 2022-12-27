import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const RestaurantCard = () => {
  return (
    <View
      style={{
        marginHorizontal: 16,
        marginBottom: 50,
        height: 350,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 20,
        shadowColor: '#52006A',
      }}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/images/dish.jpg')}
        // source={{
        //   uri: 'https://reactnative.dev/img/tiny_logo.png',
        // }}
      />
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}>
        <Text
          style={{
            backgroundColor: 'green',
            opacity: 0.8,
            color: '#ffffff',
            fontWeight: '800',
            padding: 5,
            width: '100%',
            textAlign: 'center',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}>
          <Icon name="leaf" size={15} /> PURE VEG RESTAURANT
        </Text>
      </View>

      <View
        style={{
          position: 'absolute',
          top: 40,
          right: 10,
        }}>
        <View
          style={{
            backgroundColor: '#ffffff',
            opacity: 0.8,
            padding: 5,
            borderRadius: 10,
          }}>
          <Text style={{color: 'black', fontWeight: '600', fontSize: 12}}>
            Masala Dosa
          </Text>
          <Text style={{color: 'black', fontWeight: '600', fontSize: 12}}>
            Order for $10
          </Text>
        </View>
      </View>

      <View style={{position: 'absolute', top: 150, left: -10}}>
        <View
          style={{
            backgroundColor: '#4714dd',
            paddingHorizontal: 15,
            paddingVertical: 5,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}>
          <Text style={{color: '#ffffff', fontWeight: '600', fontSize: 12}}>
            60% OFF
          </Text>
          <Text style={{color: '#ffffff', fontWeight: '600', fontSize: 12}}>
            Up to $10
          </Text>
        </View>
      </View>

      <View style={styles.textContainer}>
        <View>
          <Text style={styles.title}>Dream Sandwich</Text>
          <Text style={styles.subtitle}>Fast Food, Pizza, Sandwich</Text>
        </View>

        <View>
          <Text style={styles.rating}>
            3.9 <Icon name="star" size={15} />
          </Text>
          <Text style={styles.subtitle}>$100 for one</Text>
        </View>
      </View>
      <View style={styles.ordersPlacedDesc}>
        <View
          style={{backgroundColor: '#757bc8', borderRadius: 50, padding: 2}}>
          <Icon name="trending-up" size={15} color="white" />
        </View>

        <Text style={{marginLeft: 10}}>
          1075+ orders placed from here recently
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
