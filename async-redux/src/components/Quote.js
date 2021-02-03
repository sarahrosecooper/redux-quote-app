import React from "react";
import { connect } from "react-redux";
import { getQuote } from '../actions/index'

const Quote = (props) => {
    console.log("quote props", props)
    
    const fetchQuote = (e) => {
        e.preventDefault();
        props.getQuote();
    }

    return (
        <div>
           {props.quote}

    <button onClick={fetchQuote}>💩 New?</button>
            
        </div>
    )
}

const mapStateToProps = state => ({
    quote: state.quote,
});

export default connect(mapStateToProps, { getQuote })(Quote);