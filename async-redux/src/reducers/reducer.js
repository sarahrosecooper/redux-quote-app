import {
  GET_QUOTE,
  GET_QUOTE_SUCCESS,
  GET_QUOTE_FAIL,
  GET_TAG,
  GET_TAG_SUCCESS,
  GET_TAG_FAIL,
} from "../actions";

const initialState = {
  quote: "A quote to make you feel better about yourself coming soon.",
  tag: ["a mystery for you and me!"],
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
        error: action.payload,
      };

    case GET_TAG:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case GET_TAG_SUCCESS:
      return {
        ...state,
        tag: action.payload,
        isFetching: false,
        error: "",
      };
    case GET_TAG_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
