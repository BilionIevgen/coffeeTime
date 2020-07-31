const initialState = {
  isAdmin: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ADMIN":
      return {
        ...state,
        isAdmin: !state.isAdmin,
      };

    default:
      return state;
  }
};

export default auth;
