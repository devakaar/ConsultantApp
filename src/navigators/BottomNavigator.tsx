import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Profile} from '../screens/Profile';
import {ChatList} from '../screens/Chat';
import {UpcomingMeetings} from '../screens/Meeting';
import TabBar from './TabBar';

const BottomNavigator = () => {
  const Tabs = createBottomTabNavigator<BottomStack>();
  return (
    <Tabs.Navigator
      initialRouteName="ChatList"
      tabBar={props => <TabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name="ChatList"
        component={ChatList}
        initialParams={{icon: 'chat', label: 'Chat'}}
      />
      <Tabs.Screen name="Meetings" component={UpcomingMeetings} />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        initialParams={{icon: 'account-circle'}}
      />
    </Tabs.Navigator>
  );
};

export default BottomNavigator;
