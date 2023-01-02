import React from 'react';
import {View, Text} from 'react-native';
import HeaderTop from './HeaderTop';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <View>
      <HeaderTop />
      <SearchBar />
    </View>
  );
};

export default Header;
