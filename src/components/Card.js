import React from 'react';
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeFavouriteDish } from '../redux/action';

const Card = (props) => {
  const dispatch = useDispatch();

  const removeDish = () => {
    Alert.alert(
      'Delete Favourite?',
      'are you sure you want to delete the favourite dish ' +
        props.item.name +
        '?',
      [
        {
          text: 'cancel',
          onPress: () => {
            console.log('Cancelled!');
          },
          style: 'cancel',
        },
        {
          text: 'ok',
          onPress: () => {
            dispatch(removeFavouriteDish(props.item));
          },
        },
      ],
      {
        cancelable: false,
      }
    );
  };

  return (
    <Pressable onLongPress={removeDish}>
      <View style={styles.card}>
        <Image source={{ uri: props.item.image }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.title}> {props.item.name}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: 'white',
    overflow: 'hidden',
    margin: 20,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 150,
  },
  details: {
    padding: 25,
  },
  title: {
    marginTop: 7,
    fontSize: 20,
  },
});
