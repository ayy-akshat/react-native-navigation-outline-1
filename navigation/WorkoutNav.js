import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import CategorialWorkoutScreen from '../screens/tabs/workout/CategorialWorkout';
import SportWorkoutScreen from '../screens/tabs/workout/SportWorkout';
import WorkoutScreen from '../screens/tabs/workout/Workout';

export default function WorkoutNav() {
  return (
      <WorkoutStack.Navigator screenOptions={{
        headerShown: false
    }}>
          <WorkoutStack.Screen name="WorkoutS" component={WorkoutScreen}/>
          <WorkoutStack.Screen name="CategorialWorkoutS" component={CategorialWorkoutScreen}/>
          <WorkoutStack.Screen name="SportWorkoutS" component={SportWorkoutScreen}/>
      </WorkoutStack.Navigator>
  );
}

const WorkoutStack = createStackNavigator();