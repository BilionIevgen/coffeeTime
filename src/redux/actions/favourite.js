import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../constant/constants";

export const addToFavourite = (payload) => ({
  type: ADD_TO_FAVOURITE,
  payload,
});

export const removeFromFavourite = (payload) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload,
});
