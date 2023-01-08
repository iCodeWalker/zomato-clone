import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {SearchBar} from 'react-native-screens';
import Icon from 'react-native-vector-icons/Ionicons';

const LocationScreen = ({handleModalVisibility}) => {
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
