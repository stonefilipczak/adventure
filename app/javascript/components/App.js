import React from "react";
import Screen from "components/Screen";
import axios from "axios";
import "../css/App.css";
import "react-typist/dist/Typist.css";

class App extends React.Component {
  state = {
    blurb: "",
    prompt: "",
    choiceA: "",
    choiceB: "",
    pathA: "intro",
    pathB: "intro",
    buttonA: "",
    buttonB: "",
    choiceDisplay: "none",
    typing: false
  };

  speak = () => {
    const synth = window.speechSynthesis;
    let utterThis = new SpeechSynthesisUtterance(this.state.prompt);
    utterThis.pitch = 2;
    utterThis.rate = 0.8;
    synth.speak(utterThis);
  };

  handleClick = button => {
    if (this.state.typing) {
      console.log("TYPING!");
    } else {
      let path;
      if (button == "choiceA") {
        this.setState({
          buttonA: "hide",
          buttonB: "reverse"
        });
        path = this.state.pathA;
      } else if (button == "choiceB") {
        this.setState({
          buttonB: "hide",
          buttonA: "reverse"
        });
        path = this.state.pathB;
      }

      axios.get(`/show?blurb=${path}`).then(res => {
        const d = res.data;
        this.setState({
          prompt: d.prompt,
          choiceA: d.choiceA,
          choiceB: d.choiceB,
          pathA: d.pathA,
          pathB: d.pathB,
          choiceDisplay: "none",
          typing: true
        });
        this.speak();
      });
    }
  };

  typingDone = () => {
    console.log("done typing");
    this.setState({
      buttonA: "",
      buttonB: "",
      choiceDisplay: "fade",
      typing: false
    });
  };

  render() {
    return (
      <div>
        <Screen
          choiceA={this.state.choiceA}
          choiceB={this.state.choiceB}
          prompt={this.state.prompt}
          onClick={this.handleClick}
          buttonA={this.state.buttonA}
          buttonB={this.state.buttonB}
          choiceDisplay={this.state.choiceDisplay}
          typingDone={this.typingDone}
        />
      </div>
    );
  }
}
export default App;
