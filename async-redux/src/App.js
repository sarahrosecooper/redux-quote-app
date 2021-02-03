import React from "react";
import './index.css';
import Header from './components/Header'
import Quote from "./components/Quote"
import Form from "./components/Form"
import { connect } from "react-redux"

const App = (props) => {
  console.log(props.quote)
  return (
    <div className="App">
      <Header />
      
      <Quote />
      <Form />
     
    </div>
  );
}

const mapStateToProps = state => {
  return {
    quote: state.quote,
  }
}

export default connect(mapStateToProps, {}) (App);
