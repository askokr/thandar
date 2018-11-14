import React, { Component } from "react";
import Story from "./stroy";
import Buttons from "./buttons";
import Captive from "./captive";

const story = <Story />;
console.log(story);

class StoryDisplay extends Component {
  render() {
    const {
      captiveFound,
      captiveFreed,
      number,
      onCaptiveFound,
      onCaptiveFreed,
      onDefeat,
      onVictory
    } = this.props;
    return (
      <div>
        <Story number={number} />
        <Buttons onDefeat={onDefeat} onVictory={onVictory} number={number} />
        <Captive
          captiveFound={captiveFound}
          captiveFreed={captiveFreed}
          number={number}
          onCaptiveFound={onCaptiveFound}
          onCaptiveFreed={onCaptiveFreed}
        />
      </div>
    );
  }
}

export default StoryDisplay;
