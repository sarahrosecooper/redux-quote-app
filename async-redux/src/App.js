import React from "react";
import './index.css';
import Quote from "./components/Quote"
import Form from "./components/Form"
import { connect } from "react-redux"

const App = (props) => {
  return (
    <div className="App">
      <h1>quotes from your favorite idiot</h1>
      <img alt="assorted header image of trump" src="https://lh3.googleusercontent.com/proxy/MAtbfHWfXeI6Ovbh8ctnBrf9v_jUt7Y8e05ejqxiMAI0A5gEbM51Y3Tvm5lJJ0IqE9JNsK_azWqdH5NdikehNp046oh6Ay-9EjulIstdU_gDp7Mi0v9qjiYU-c19qiFcWDM53RFWq2GHZDs38tlNhXVyHV-xH-OEC38wTfpuhHQ"></img>
      <Quote quote={props.quote}/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    quote: state.quote,
  }
}

export default connect(mapStateToProps, {}) (App);
