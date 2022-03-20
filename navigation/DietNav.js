import React from 'react';
import DietScreen from '../screens/tabs/diet/Diet';
import { createAppContainer } from 'react-navigation';
import DietInfoScreen from '../screens/tabs/diet/DietInfo';
import { createStackNavigator } from '@react-navigation/stack';

export default function DietNav() {
  return (
      <DietStack.Navigator screenOptions={{
          headerShown: false
      }}>
          <DietStack.Screen name="DietS" component={DietScreen}/>
          <DietStack.Screen name="DietInfoS" component={DietInfoScreen}/>
      </DietStack.Navigator>
  );
}

const DietStack = createStackNavigator();
