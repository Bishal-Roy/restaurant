import * as constant from './constant';
import axios from 'axios';

export const getDishes = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      'https://restaurant-bf6bb-default-rtdb.firebaseio.com/dishes.json'
    );
    dispatch(loadDishes(data));
  } catch (error) {
    console.log(error);
  }
};

export const loadDishes = (dishes) => {
  return {
    type: constant.LOAD_DATA,
    payload: dishes,
  };
};
