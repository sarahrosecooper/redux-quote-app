import React from "react";
import { connect } from "react-redux";
// import { getQuote, getTag} from '../actions/index';
import Form from './Form';

const Quote = (props) => {
    console.log("quote props", props)
    
    // const fetchQuote = (e) => {
    //     e.preventDefault();
    //     props.getQuote();
    //     props.getTag();
    // }

    return (
        <div>
            <h1>this is the header component</h1>
           <p>"{props.quote}"</p>
           <br></br> -- A quote by Donald Trump about {props.tag}
        <br></br>
        <Form props={props}/>
       
        </div>
    )
}

const mapStateToProps = state => ({
    quote: state.quote,
    tag: state.tag
});

export default connect(mapStateToProps, {})(Quote);