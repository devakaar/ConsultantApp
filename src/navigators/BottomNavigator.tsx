import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Profile} from '../screens/Profile';
import {ChatList} from '../screens/Chat';

const BottomNavigator = () => {
  const Tabs = createBottomTabNavigator<BottomStack>();
  return (
    <Tabs.Navigator
      initialRouteName="ChatList"
      screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name="ChatList"
        component={ChatList}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="chat" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="account-circle" color={color} size={size} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomNavigator;
