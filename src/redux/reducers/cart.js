import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  ADD_ACTIVE_CART_BUTTON,
  REMOVE_ACTIVE_CART_BUTTON,
  TOGGLE_IS_ADDING_TO_CART,
} from "../constant/constants";

const initialState = {
  catalog: [],
  totalPrice: 0,
  activeCartButton: [],
  isAddingtoCart: false,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        catalog: [...state.catalog, action.payload],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        catalog: state.catalog.filter((item) => {
          return item.uniqId !== action.payload && item;
        }),
      };

    case ADD_ACTIVE_CART_BUTTON:
      return {
        ...state,
        activeCartButton: [...state.activeCartButton, action.payload],
      };

    case REMOVE_ACTIVE_CART_BUTTON:
      return {
        ...state,
        activeCartButton: state.activeCartButton.filter((item) => {
          return item !== action.payload;
        }),
      };

    case TOGGLE_IS_ADDING_TO_CART:
      return {
        ...state,
        isAddingtoCart: action.payload,
      };

    case CLEAR_CART:
      return {
        ...state,
        catalog: [],
      };

    default:
      return state;
  }
};

export default cart;
