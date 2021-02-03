import { NEW_QUOTE } from '../actions'; 

const initialState = {
    quote: ["This is quote one", "This is quote two"],
    error: '',
    isFetching: false
};

export const reducer = (state = initialState, action) => {

switch(action.type) {
    case NEW_QUOTE:
        return {
            ...state,
        }
default: return state;
}
}
