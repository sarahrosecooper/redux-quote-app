import React from "react";
import { connect } from "react-redux";
import { getQuote, getTag } from '../actions'

const Form = props => {
   
    const fetchQuote = (e) => {
        e.preventDefault();
        props.getQuote();
        props.getTag();
    }

    return (
        <div>
           {`(courtesy of`} <a href="https://www.tronalddump.io/">trondalddump.io</a>{`)`}{" "}
           <button onClick={fetchQuote}>🤢 New?</button>
           
        </div>
    )
}

export default connect(null, { getQuote, getTag})(Form);