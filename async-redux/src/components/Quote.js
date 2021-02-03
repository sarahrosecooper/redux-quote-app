import React from "react";
import { connect } from "react-redux";
import { getQuote, getTag} from '../actions/index'

const Quote = (props) => {
    console.log("quote props", props)
    
    const fetchQuote = (e) => {
        e.preventDefault();
        props.getQuote();
        props.getTag();
    }

    return (
        <div>
            <h1>This is the Header component</h1>
           <p>"{props.quote}"</p>
           <br></br> -- A quote by Donald Trump about {props.tag}

    <button onClick={fetchQuote}>💩 New?</button>
            
        </div>
    )
}

const mapStateToProps = state => ({
    quote: state.quote,
    tag: state.tag
});

export default connect(mapStateToProps, { getQuote, getTag })(Quote);