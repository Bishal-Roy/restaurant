import * as constants from './constant';

export const reducer = (
  state = { dishes: [], favouriteDishes: [] },
  action
) => {
  switch (action.type) {
    case constants.LOAD_DATA:
      return {
        ...state,
        dishes: action.payload,
      };

    case constants.ADD_FAVOURITE_DISH:
      return {
        ...state,
        favouriteDishes: state.favouriteDishes.concat(action.payload),
      };
    case constants.REMOVE_FAVOURITE_DISH:
      return {
        ...state,
        favouriteDishes: state.favouriteDishes.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};
