import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBar = () => {
  return (
    <View style={styles.textInputContainer}>
      <View style={styles.textInputSubContainer}>
        <Icon name="search" size={25} color="#e63946" />
        <TextInput placeholder="Search 'Burger'" style={styles.inputStyle} />
      </View>
      <View style={styles.voiceIconContainer}>
        <Icon name="mic" size={25} color="#e63946" />
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
  textInputSubContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyle: {
    fontSize: 16,
  },
  voiceIconContainer: {
    borderLeftWidth: 1,
    borderLeftColor: '#D8D5D3',
    paddingLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchBar;
