import axios from 'axios'

export const GET_QUOTE = "GET_QUOTE" // action type
export const GET_QUOTE_SUCCESS = "GET_QUOTE_SUCCESS"
export const GET_QUOTE_FAIL = 'GET_QUOTE_FAIL'
export const GET_TAG = "GET_TAG" // action type
export const GET_TAG_SUCCESS = "GET_TAG_SUCCESS"
export const GET_TAG_FAIL = 'GET_TAG_FAIL'

export const getQuote = () => dispatch => {
    dispatch({
        type: GET_QUOTE
    });
    axios
    .get('https://api.tronalddump.io/random/quote')
    .then(response => {
        console.log("response", response)
        dispatch({ 
            type: GET_QUOTE_SUCCESS,
            payload: response.data.value,        
        })
    })
        .catch(error => dispatch({
            type: GET_QUOTE_FAIL,
            payload: error
        }))
}

export const getTag = () => dispatch => {
    dispatch({
        type: GET_TAG
    });
    axios
    .get('https://api.tronalddump.io/random/quote')
    .then(response => {
        console.log("tag response", response)
        dispatch({ 
            type: GET_TAG_SUCCESS,
            payload: response.data.tags
     })
    })
        .catch(error => dispatch({
            type: GET_TAG_FAIL,
            payload: error
        }))
}