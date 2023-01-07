/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import RestaurantDetail from './src/screens/RestaurantDetailScreen';
import TabNavigator from './src/containers/TabNavigator';
import OrderScreen from './src/screens/OrderScreen';
import OrderPlacedScreen from './src/screens/OrderPlacedScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Restaurant Details"
          component={RestaurantDetail}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Order Screen"
          component={OrderScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Order Placed Screen"
          component={OrderPlacedScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile Screen"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
