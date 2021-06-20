import React from 'react';
import HomeScreen from './screens/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './screens/MenuScreen';
import DishDetailsScreen from './screens/DishDetailsScreen';

const AppNavigator = () => {
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();

  const MenuStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Menu' component={MenuScreen} />
        <Stack.Screen name='Dish Details' component={DishDetailsScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name='Home' component={HomeScreen} />
      <Drawer.Screen name='Menu' component={MenuStack} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
