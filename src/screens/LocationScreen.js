import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AddressItem from '../components/AddressItem';

const LocationScreen = ({handleModalVisibility, navigation}) => {
  const handleCurrentLocationClick = () => {
    navigation.navigate('Map Screen');
    handleModalVisibility();
  };
  return (
    <View>
      <TouchableOpacity onPress={() => handleModalVisibility()}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginHorizontal: 16,
            marginTop: 16,
          }}>
          <Icon name="chevron-down-outline" size={25} color="black" />
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              color: 'black',
              marginLeft: 10,
            }}>
            Select a location
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.textInputContainer}>
        <View
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="search" size={25} color="#e63946" />
          <TextInput
            placeholder="Search for area, street name..."
            style={{fontSize: 15}}
          />
        </View>
      </View>

      <TouchableOpacity onPress={() => handleCurrentLocationClick()}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 16,
            paddingBottom: 15,
            borderBottomWidth: 1,
            borderBottomColor: '#D8D5D3',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}>
            <MaterialCommunityIcons name="target" size={25} color="#e63946" />
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#e63946',
                  fontWeight: '700',
                }}>
                Use current location
              </Text>
              <Text>Ganesh Nagar, Bajpur Betul</Text>
            </View>
          </View>

          <View>
            <Icon name="chevron-forward-outline" size={25} color="grey" />
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={{
          margin: 16,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: 'black',
          }}>
          Saved addresses
        </Text>

        <AddressItem />
        <AddressItem />
      </View>
      {/* <View style={{height: 500, margin: 16}}>
        <MapComponent coordinates={coordinates} />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F0EFEE',
    marginHorizontal: 16,
    marginVertical: 10,
    paddingLeft: 10,
    borderColor: '#D8D5D3',
    borderWidth: 1,
    borderRadius: 10,
    fontWeight: 'bold',
  },
});

export default LocationScreen;
