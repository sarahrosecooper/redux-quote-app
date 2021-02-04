import React from "react";
import { connect } from "react-redux";

import Form from './Form';

const Quote = (props) => {
    
    

    return (
        <div>
           <p>"{props.quote}"</p>
           <br></br> -- A quote by Donald Trump about {props.tag}
        <br></br><br></br>
        <Form props={props}/>
       
        </div>
    )
}

const mapStateToProps = state => ({
    quote: state.quote,
    tag: state.tag
});

export default connect(mapStateToProps, {})(Quote);