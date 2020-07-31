import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../constant/constants";

const initialState = {
  catalog: [],
};

const favourite = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        catalog: [...state.catalog, action.payload],
      };

    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        catalog: state.catalog.filter((item) => {
          return item !== action.payload && item;
        }),
      };

    default:
      return state;
  }
};

export default favourite;
