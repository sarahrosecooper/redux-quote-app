import React from "react";
// import { connect } from "react-redux";

const Quote = props => {
    console.log("QUOTE PROPS:", props)
    return (
        <div>
            {props.quote}
            
        </div>
    )
}

export default Quote