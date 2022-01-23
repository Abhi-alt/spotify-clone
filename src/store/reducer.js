import { combineReducers } from "redux";

const INITIAL_STATE = {
  user: null,
  token: null, // change after development
  playing: false,
  playlist: [],
  weekly: [],
};

const reducer = (initial_state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...initial_state,
        token: action.payload,
      };
    case "SET_USER":
      return {
        ...initial_state,
        user: action.payload,
      };
    case "SET_PLAYLIST":
      return {
        ...initial_state,
        playlist: action.payload,
      };
    case "SET_WEEKLY":
      return {
        ...initial_state,
        weekly: action.payload,
      };
    default:
      return initial_state;
  }
};

// const userReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {

//     default:
//       return state;
//   }
// };

// const reducer = combineReducers({
//   token: tokenReducer,
//   user: userReducer,
// });

export default reducer;
