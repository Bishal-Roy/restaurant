import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const DishDetailsScreen = (props) => {
  const dish = props.route.params.dish;
  return (
    <View>
      <Image source={{ uri: dish.image }} style={styles.image} />
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
