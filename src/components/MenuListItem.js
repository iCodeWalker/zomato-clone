import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AddButton from './AddButton';
import VegIcon from './VegIcon';
import NonVegIcon from './NonVegIcon';

const MenuListItem = ({item}) => {
  return (
    <View
      style={{
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingVertical: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        borderStyle: 'dashed',
      }}>
      <View style={{width: '50%'}}>
        <View
          style={{
            marginVertical: 10,
          }}>
          {item.isVeg ? <VegIcon /> : <NonVegIcon />}
        </View>

        <Text
          style={{
            fontSize: 16,
            color: 'black',
            fontWeight: '700',
          }}>
          {item.dishName}
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: 5,
              backgroundColor: '#fff6cc',
              borderWidth: 1,
              borderColor: '#ffe97f',
              borderRadius: 5,
            }}>
            <Icon
              name="star"
              size={14}
              color="#fdc500"
              style={{marginLeft: 2}}
            />
            <Icon
              name="star"
              size={14}
              color="#fdc500"
              style={{marginLeft: 2}}
            />
            <Icon
              name="star"
              size={14}
              color="#fdc500"
              style={{marginLeft: 2}}
            />
            <Icon
              name="star"
              size={14}
              color="#fdc500"
              style={{marginLeft: 2}}
            />
            <Icon
              name="star"
              size={14}
              color="#ffffff"
              style={{marginLeft: 2}}
            />
          </View>
          <View>
            <Text style={{marginLeft: 10, fontWeight: '600', color: 'black'}}>
              {item.reviews} reviews
            </Text>
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={{color: 'black', fontSize: 14, fontWeight: '800'}}>
            {item.dishPrice}
          </Text>
        </View>
      </View>
      <View>
        <Image
          source={require('../assets/images/burger.jpg')}
          style={{width: 150, height: 150, borderRadius: 15, borderWidth: 2}}
        />
        <View style={{position: 'absolute', top: 130, right: 20, left: 20}}>
          <AddButton name={item.dishName} />
        </View>
      </View>
    </View>
  );
};

export default MenuListItem;
