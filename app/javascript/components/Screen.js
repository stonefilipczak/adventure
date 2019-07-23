import React from "react";
import Typist from "react-typist";

class Screen extends React.Component {
  state = {
    animate: true,
    choiceA: "",
    choiceB: ""
  };

  choiceToggle = button => {
    button == "choiceA"
      ? this.setState({
          choiceA: "green",
          choiceB: "red"
        })
      : this.setState({
          choiceA: "red",
          choiceB: "green"
        });
  };

  choiceReset = () => {
    this.setState({
      choiceA: "",
      choiceB: ""
    });
  };

  render() {
    return (
      <div id="Container">
        <div id="screen">
          <div id="promptContainer">
            <Typist
              key={this.props.prompt}
              onTypingDone={this.props.typingDone}
            >
              {this.props.prompt}
            </Typist>
          </div>
          <div id="choicesContainer" className={this.props.choiceDisplay}>
            <div id="choiceA" className={this.state.choiceA}>
              {this.props.choiceA}
            </div>
            <div id="choiceB" className={this.state.choiceB}>
              {this.props.choiceB}
            </div>
          </div>
        </div>
        <div id="buttonContainer">
          <div id="buttonA">
            <button
              className={this.props.buttonA}
              name="choiceA"
              onClick={e => this.props.onClick(e.target.name)}
              onMouseOver={event => this.choiceToggle(event.target.name)}
              onMouseOut={event => this.choiceReset()}
            />
          </div>
          <div id="buttonB">
            <button
              className={this.props.buttonB}
              name="choiceB"
              onClick={e => this.props.onClick(e.target.name)}
              onMouseOver={event => this.choiceToggle(event.target.name)}
              onMouseOut={event => this.choiceReset()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Screen;
