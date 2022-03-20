import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import WelcomeScreen from './screens/start/Welcome';
import SignInScreen from './screens/start/SignIn';
import RegisterScreen from './screens/start/Register';
import FitnessLevelScreen from './screens/start/FitnessLevel';
import SportInterestsScreen from './screens/start/SportInterests';
import MainTabNav from './navigation/BottomTab';

export default function App() {
  return (
    <NavigationContainer>
      <AppContainer/>
    </NavigationContainer>
  );
}

const switchNav = createSwitchNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
  Register: RegisterScreen,
  FitnessLevel: FitnessLevelScreen,
  SportInterests: SportInterestsScreen,
  MainTabN: MainTabNav
});

const AppContainer = createAppContainer(switchNav);