import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  ADD_ACTIVE_CART_BUTTON,
  REMOVE_ACTIVE_CART_BUTTON,
  TOGGLE_IS_ADDING_TO_CART,
} from "../constant/constants";

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});

export const removeFromCart = (payload) => ({
  type: REMOVE_FROM_CART,
  payload,
});

export const deleteAllFromCart = () => ({
  type: CLEAR_CART,
});

export const addActiveCartButton = (payload) => ({
  type: ADD_ACTIVE_CART_BUTTON,
  payload,
});

export const removeActiveCartButton = (payload) => ({
  type: REMOVE_ACTIVE_CART_BUTTON,
  payload,
});

export const isAddingToCart = (payload) => ({
  type: TOGGLE_IS_ADDING_TO_CART,
  payload,
});
