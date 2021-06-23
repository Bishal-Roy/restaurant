import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from '../components/Icon';
import { addFavouriteDish } from '../redux/action';

const DishDetailsScreen = (props) => {
  const dish = props.route.params.dish;
  const dispatch = useDispatch();
  const favouriteDishes = useSelector((state) => state.favouriteDishes);

  isFavourite = favouriteDishes.some((item) => item.id === dish.id);
  const submitHandler = (dish) => {
    if (isFavourite) {
      alert('already in favourite list');
    } else {
      dispatch(addFavouriteDish(dish));
    }
  };
  let icon = 'ios-heart-outline';
  if (isFavourite) {
    icon = 'ios-heart';
  }

  return (
    <View>
      <Image source={{ uri: dish.image }} style={styles.image} />
      <Icon
        name={icon}
        size={40}
        color='#F53850'
        iconStyle={{ padding: 10 }}
        action={() => submitHandler(dish)}
      />
      <Text style={styles.description}>{dish.description}</Text>
    </View>
  );
};

export default DishDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  description: {
    color: '#6e6969',
  },
});
