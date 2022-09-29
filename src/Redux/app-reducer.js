import { getAuthUserData } from "./auth-reducer";

const SET_INITIALIZING = "app/SET_INITIALIZING";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZING:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const setInitializing = () => {
  return {
    type: SET_INITIALIZING,
  };
};

export const initializeApp = () => {
  return (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
      dispatch(setInitializing());
    });
  };
};

export default appReducer;
