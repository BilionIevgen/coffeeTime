import {
  SET_COFFEE,
  SET_TEA,
  SET_ACTIVE_TYPE,
  SET_IS_VISIBLE_CATALOG,
  SET_ACTIVE_CATALOG,
} from "../constant/constants";

export const setCoffee = (payload) => {
  return {
    type: SET_COFFEE,
    payload,
  };
};

export const setTea = (payload) => {
  return {
    type: SET_TEA,
    payload,
  };
};

export const setIsVisibleCatalog = (payload) => {
  return {
    type: SET_IS_VISIBLE_CATALOG,
    payload,
  };
};

export const setActiveType = () => {
  return {
    type: SET_ACTIVE_TYPE,
  };
};

export const setActiveCatalog = (payload) => {
  return {
    type: SET_ACTIVE_CATALOG,
    payload,
  };
};
