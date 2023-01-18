import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {IS_STORYBOOK} from '@env';
import StorybookUI from './storybook';
import {Welcome, Confirmation} from './src/screens';

const Stack = createNativeStackNavigator();
const stackNavOptions = {
  headerStyle: {
    backgroundColor: 'lightblue',
  },
  headerTintColor: 'white',
};

const MainFlow = () => {
  return (
    <Stack.Navigator screenOptions={stackNavOptions}>
      <Stack.Screen
        name="welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen name="confirmation" component={Confirmation} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MainFlow />
    </NavigationContainer>
  );
};

module.exports = IS_STORYBOOK ? StorybookUI : App;
