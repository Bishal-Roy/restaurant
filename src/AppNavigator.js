import React from 'react';
import HomeScreen from './screens/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './screens/MenuScreen';
import DishDetailsScreen from './screens/DishDetailsScreen';
import Icon from './components/Icon';
import { useNavigation } from '@react-navigation/native';
import FavouriteScreen from './screens/FavouriteScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MenuStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => (
          <Icon
            name='ios-menu'
            size={24}
            color='black'
            iconStyle={{ paddingRight: 15 }}
            action={() => navigation.toggleDrawer()}
          />
        ),
        headerStyle: {
          backgroundColor: '#F53850',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name='Menu' component={MenuScreen} />
      <Stack.Screen
        name='Dish Details'
        component={DishDetailsScreen}
        options={({ route }) => ({ title: route.params.dish.name })}
      />
    </Stack.Navigator>
  );
};

const FavouriteStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => (
          <Icon
            name='ios-menu'
            size={24}
            color='black'
            iconStyle={{ paddingRight: 15 }}
            action={() => navigation.toggleDrawer()}
          />
        ),
        headerStyle: {
          backgroundColor: '#F53850',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name='Favourite' component={FavouriteScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name='Home' component={HomeScreen} />
      <Drawer.Screen name='Menu' component={MenuStack} />
      <Drawer.Screen name='Favourite' component={FavouriteStack} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
