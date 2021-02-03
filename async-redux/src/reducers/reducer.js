import { GET_QUOTE, GET_QUOTE_SUCCESS, GET_QUOTE_FAIL } from "../actions";

const initialState = {
  quote: "",
  error: "",
  isFetching: false,
};

export const reducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case GET_QUOTE:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
      case GET_QUOTE_SUCCESS:
          return {
              ...state,
              quote: action.payload,
              isFetching: false,
              error: "",
          };
          case GET_QUOTE_FAIL:
              return {
                  ...state,
                  error: action.payload
              }
    default:
      return state;
  }
};
