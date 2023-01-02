import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RestaurantDetail from '../screens/RestaurantDetailScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const HomeScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Restaurant Details" component={RestaurantDetail} />
    </Stack.Navigator>
  );
};

export default HomeScreenStack;
