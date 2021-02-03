export const NEW_QUOTE = "NEW_QUOTE" // action type

export const newQuote = quote => {
    console.log(quote);
    return { // action
        type: NEW_QUOTE,
        payload: quote
    }
}

