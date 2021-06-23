import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Card from '../components/Card';

const FavouriteScreen = () => {
  const favouriteDishes = useSelector((state) => state.favouriteDishes);
  return (
    <View>
      <FlatList
        data={favouriteDishes}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({});
