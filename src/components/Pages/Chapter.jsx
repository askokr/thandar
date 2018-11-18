import React, { Component } from "react";
import chapters from "../Content/chapters";

import StoryDisplay from "../storyDisplay";

class Chapter extends Component {
  state = {
    id: 1,
    checkPoint: 1,
    captiveFound: false,
    captiveFreed: false
  };

  componentDidMount() {
    const { response } = this.props;
    const id = parseInt(response.params.id, 10);
    this.setState({ id });
  }

  // handleCaptiveFound = () => {
  //   const captiveFound = true;
  //   this.setState({ captiveFound });
  // };
  // handleCaptiveFreed = () => {
  //   console.log("happens");
  //   const captiveFreed = true;
  //   this.setState({ captiveFreed });
  // };

  // handleDefeat = currentEncounter => {
  //   const storyStart = 1;
  //   const secondEncounter = storyStart + 2;
  //   const thirdEncounter = storyStart + 6;
  //   console.log(currentEncounter);
  //   let checkPoint, id;
  //   if (currentEncounter >= thirdEncounter) {
  //     checkPoint = thirdEncounter;
  //     id = thirdEncounter;
  //     this.setState({ checkPoint, id });
  //   } else if (currentEncounter >= secondEncounter) {
  //     checkPoint = secondEncounter;
  //     id = secondEncounter;
  //     this.setState({ checkPoint, id });
  //   } else {
  //     checkPoint = this.state.checkPoint;
  //     id = checkPoint;
  //     this.setState({ id });
  //   }
  // };

  handleVictory = newId => {
    const id = newId;
    this.setState({ id });
  };

  render() {
    const { response } = this.props;
    const id = parseInt(response.params.id, 10);
    const chapter = chapters.find(c => c.id === id);
    // if (!chapter) {
    //   return <div>Sellist peatükki pole</div>;
    // }

    return (
      <div className="App">
        <div className="container">
          <StoryDisplay
            captiveFound={this.state.captiveFound}
            captiveFreed={this.state.captiveFreed}
            chapter={chapter}
            checkpoint={this.state.checkpoint}
            id={this.state.id}
            // onVictory={this.handleVictory}
            // onDefeat={this.handleDefeat}
            // onCaptiveFound={this.handleCaptiveFound}
            // onCaptiveFreed={this.handleCaptiveFreed}
          />
        </div>
      </div>
    );
  }
}

export default Chapter;
