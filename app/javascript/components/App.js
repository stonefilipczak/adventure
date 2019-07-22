import React from "react";
import Screen from "components/Screen";
import axios from "axios";
import "../css/App.css";
import Typist from "react-typist";
import useTypewriter from "react-typewriter-hook";
import "react-typist/dist/Typist.css";
// import "../audio/press.mp3";

class App extends React.Component {
  state = {
    blurb: "",
    prompt: "",
    choiceA: "",
    choiceB: "",
    pathA: "intro",
    pathB: "intro",
    // buttonClass: "",
    animate: "",
    buttonA: "",
    buttonB: "",
    choiceDisplay: "none"
  };

  speak = () => {
    const synth = window.speechSynthesis;
    let utterThis = new SpeechSynthesisUtterance(this.state.prompt);
    utterThis.pitch = 2;
    utterThis.rate = 0.8;
    synth.speaking ? console.log("speaking") : synth.speak(utterThis);
    this.setState({
      buttonClass: "hide",
      animate: "type"
    });
    utterThis.onend = () => {
      console.log("done talking");
      this.setState({
        buttonA: "",
        buttonB: "",
        choiceDisplay: "fade"
      });
    };
  };

  // componentDidMount() {
  //   this.speak();
  // }

  handleClick = button => {
    this.setState({
      choiceDisplay: "none"
    });
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
        pathB: d.pathB
      });
      this.speak();
    });
  };

  render() {
    return (
      <div>
        <audio src="show" controls />
        <Screen
          animate={this.state.animate}
          buttonClass={this.state.buttonClass}
          choiceA={this.state.choiceA}
          choiceB={this.state.choiceB}
          prompt={this.state.prompt}
          onClick={this.handleClick}
          buttonA={this.state.buttonA}
          buttonB={this.state.buttonB}
          choiceDisplay={this.state.choiceDisplay}
        />
      </div>
    );
  }
}
export default App;
