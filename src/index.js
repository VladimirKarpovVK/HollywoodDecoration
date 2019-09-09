import ReactDOM from "react-dom";
import React, { Component } from "react";
import "./styles.css";
import { Header, Section } from "./elements";

function App() {
  return [<Header />, <Section />];
}

ReactDOM.render(<App />, document.getElementById("root"));
