import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import ScrollAnimation from './screens/ScrollAnimation';
import FlatlistAnimation from './screens/FlatlistAnimation';
import ItemDetailsScreen from './screens/ItemDetailsScreen';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={MainScreen} />
      <Stack.Screen name="First" component={ScrollAnimation} />
      <Stack.Screen name="Flat" component={FlatlistAnimation} />
      <Stack.Screen name="ItemDetails" component={ItemDetailsScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
