import React from "react";
import "./index.css";
import Quote from "./components/Quote";
import { connect } from "react-redux";

const App = (props) => {
  return (
    <div className="App">
      <h1>quotes from your favorite idiot</h1>
      <img
        className="trump"
        alt="assorted trump"
        src="https://images.unsplash.com/photo-1585241937013-d4a82152ebf4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8dHJ1bXB8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      ></img>
      <Quote quote={props.quote} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    quote: state.quote,
  };
};

export default connect(mapStateToProps, {})(App);
