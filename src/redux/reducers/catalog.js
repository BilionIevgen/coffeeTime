import {
  SET_COFFEE,
  SET_TEA,
  SET_ACTIVE_TYPE,
  SET_IS_VISIBLE_CATALOG,
  SET_ACTIVE_CATALOG,
} from "../constant/constants";

const initialState = {
  tea: {},
  coffee: {},
  isVisibleCatalog: false,
  activeType: null,
  activeCatalogTitle: null,
};

const catalog = (state = initialState, action) => {
  switch (action.type) {
    case SET_COFFEE:
      return {
        ...state,
        coffee: action.payload,
      };

    case SET_TEA:
      return {
        ...state,
        tea: action.payload,
      };

    case SET_IS_VISIBLE_CATALOG:
      return {
        ...state,
        isVisibleCatalog: action.payload,
      };
    case SET_ACTIVE_TYPE:
      return {
        ...state,
        activeType: action.payload,
      };
    case SET_ACTIVE_CATALOG:
      return {
        ...state,
        activeCatalogTitle: action.payload,
      };
    default:
      return state;
  }
};

export default catalog;
