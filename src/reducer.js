import { SignalCellularNull } from "@material-ui/icons";
import { StateContext } from "./Stateprovider";

export const initialState = {
  term: null,
};
export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: actionTypes.term,
      };

    default:
      return state;
  }
};
export default reducer;
