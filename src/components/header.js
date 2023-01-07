import React from 'react';
import {View, Text} from 'react-native';
import HeaderTop from './HeaderTop';
import SearchBar from './SearchBar';

const Header = ({navigation}) => {
  return (
    <View>
      <HeaderTop navigation={navigation} />
      <SearchBar />
    </View>
  );
};

export default Header;
