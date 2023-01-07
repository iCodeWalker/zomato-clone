import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HeaderTop = ({navigation}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 16,
      }}>
      <View style={styles.headerContainer}>
        <Icon name="location" size={30} color="#e63946" />
        <View>
          <Text style={{fontSize: 18, color: 'black', fontWeight: '800'}}>
            Ganesh Nagar <Icon name="chevron-down" size={20} color="black" />
          </Text>
          <Text style={{color: 'black'}}>Bajpur, Betul</Text>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        <View
          style={{
            elevation: 50,
            shadowColor: '#52006A',
            padding: 5,
            borderColor: '#D8D5D3',
            borderWidth: 1,
            borderRadius: 10,
          }}>
          <Icon name="language" size={20} color="#e63946" />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile Screen')}>
          <Icon
            name="person-circle"
            size={50}
            color="#a5adff"
            style={{marginLeft: 10}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
});

export default HeaderTop;
