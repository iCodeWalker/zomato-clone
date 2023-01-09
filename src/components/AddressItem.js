import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AddressItem = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 16,
        paddingBottom: 10,
        borderBottomColor: '#D8D5D3',
        borderBottomWidth: 1,
      }}>
      <View style={{marginRight: 15, paddingHorizontal: 16}}>
        <Icon name="home-outline" size={25} color="grey" />
        <Text>0 m</Text>
      </View>
      <View>
        <Text style={{fontSize: 17, fontWeight: '700', color: 'black'}}>
          Home
        </Text>
        <Text>House no.322, Ganesh Nagar, Bajpur, Betul</Text>
        <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
          <View
            style={{
              borderRadius: 50,
              borderWidth: 1,
              borderColor: 'grey',
              padding: 2,
              marginRight: 10,
            }}>
            <Icon name="ellipsis-horizontal" size={17} color="#e63946" />
          </View>

          <View
            style={{
              borderRadius: 100,
              borderWidth: 1,
              borderColor: 'grey',
              padding: 2,
            }}>
            <Icon name="arrow-redo-outline" size={17} color="#e63946" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddressItem;
