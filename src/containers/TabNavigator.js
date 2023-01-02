import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarActiveBackgroundColor: '#EF7A85af'}}>
      <Tab.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Delivery',
          title: 'Home',
          headerShown: false,
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: '600',
            padding: 2,
            color: 'black',
          },
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons name="moped" color="#e63946" size={25} />
            );
          },
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'History',
          title: 'History',
          headerShown: false,
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: '600',
            padding: 2,
            color: 'black',
          },
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons name="script" color="#e63946" size={25} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
