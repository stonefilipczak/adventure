import React from "react";
import Typist from "react-typist";

class Typer extends React.Component {
  state = {};
  render() {
    return <Typist>{this.props.prompt}</Typist>;
  }
}

export default Typer;
