import * as constants from './constant';

export const reducer = (state = { dishes: [] }, action) => {
  switch (action.type) {
    case constants.LOAD_DATA:
      return {
        ...state,
        dishes: action.payload,
      };

    default:
      return state;
  }
};
