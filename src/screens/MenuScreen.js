import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MenuItem from '../components/MenuItem';
import { getDishes } from '../redux/action';

const MenuScreen = (props) => {
  const dishes = useSelector((state) => state.dishes);
  // console.log(dishes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishes());
  }, []);

  return (
    <View>
      <FlatList
        data={dishes}
        renderItem={({ item }) => (
          <MenuItem
            item={item}
            selectDish={() =>
              props.navigation.navigate('Dish Details', {
                dish: item,
              })
            }
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default MenuScreen;
