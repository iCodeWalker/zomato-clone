import React from 'react';
import {View, Text} from 'react-native';
import Header from '../components/Header';
import HistoryCard from '../components/HistoryCard';

const HistoryScreen = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#ffffff'}}>
      <Header navigation={navigation} />
      <HistoryCard />
    </View>
  );
};

export default HistoryScreen;
