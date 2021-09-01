import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTabNavigator from './HomeTabNavigator';
import DestinationSearch from '../screens/DestinationSearch';
import Guests from '../screens/Guests';

const Stack = createNativeStackNavigator();

const Router = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DestinationSearch"
          component={DestinationSearch}
          options={{title: 'Search Your Destination'}}
        />
        <Stack.Screen
          name="Guests"
          component={Guests}
          options={{title: 'How many people?'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
