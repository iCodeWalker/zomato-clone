import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AddressItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Icon name="home-outline" size={25} color="grey" />
        <Text>0 m</Text>
      </View>
      <View>
        <Text style={styles.textStyle}>Home</Text>
        <Text>House no.322, Ganesh Nagar, Bajpur, Betul</Text>
        <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
          <View style={styles.iconContainer}>
            <Icon name="ellipsis-horizontal" size={17} color="#e63946" />
          </View>

          <View style={styles.iconContainer}>
            <Icon name="arrow-redo-outline" size={17} color="#e63946" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 16,
    paddingBottom: 10,
    borderBottomColor: '#D8D5D3',
    borderBottomWidth: 1,
  },
  subContainer: {
    marginRight: 15,
    paddingHorizontal: 16,
  },
  textStyle: {fontSize: 17, fontWeight: '700', color: 'black'},
  iconContainer: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 2,
    marginRight: 10,
  },
});

export default AddressItem;
