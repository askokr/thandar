import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import StoryDisplay from "./components/storyDisplay";
import { Title } from "./components/messages";

class App extends Component {
  state = {
    number: 0,
    checkPoint: 0,
    captiveFound: false,
    captiveFreed: false
  };

  handleCaptiveFound = () => {
    const captiveFound = true;
    this.setState({ captiveFound });
  };
  handleCaptiveFreed = () => {
    console.log("happens");
    const captiveFreed = true;
    this.setState({ captiveFreed });
  };

  handleDefeat = currentEncounter => {
    const storyStart = 0;
    const secondEncounter = storyStart + 2;
    const thirdEncounter = storyStart + 6;
    console.log(currentEncounter);
    let checkPoint, number;
    if (currentEncounter >= thirdEncounter) {
      checkPoint = thirdEncounter;
      number = thirdEncounter;
      this.setState({ checkPoint, number });
    } else if (currentEncounter >= secondEncounter) {
      checkPoint = secondEncounter;
      number = secondEncounter;
      this.setState({ checkPoint, number });
    } else {
      checkPoint = this.state.checkPoint;
      number = checkPoint;
      this.setState({ number });
    }
  };

  handleVictory = newNumber => {
    const number = newNumber;
    this.setState({ number });
  };
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <h1>{Title}</h1>
          </header>
          <div className="container">
            <StoryDisplay
              captiveFound={this.state.captiveFound}
              captiveFreed={this.state.captiveFreed}
              number={this.state.number}
              onVictory={this.handleVictory}
              onDefeat={this.handleDefeat}
              onCaptiveFound={this.handleCaptiveFound}
              onCaptiveFreed={this.handleCaptiveFreed}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
