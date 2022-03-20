import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/tabs/Dashboard';
import WorkoutScreen from '../screens/tabs/workout/Workout';
import DietScreen from '../screens/tabs/diet/Diet';
import SettingsScreen from '../screens/tabs/Settings';
import WorkoutNav from './WorkoutNav';
import DietNav from './DietNav';

export default function MainTabNav() {
  return (
      <TabNav.Navigator screenOptions={{
          headerShown: false
      }}>
          <TabNav.Screen name="Dashboard" component={DashboardScreen}/>
          <TabNav.Screen name="Workout" component={WorkoutNav}/>
          <TabNav.Screen name="Diet" component={DietNav}/>
          <TabNav.Screen name="Settings" component={SettingsScreen}/>
      </TabNav.Navigator>
  );
}

const TabNav = createBottomTabNavigator();