import React, { Component } from "react";
import chapters from "../Content/chapters";
import { NoSuchPage } from "../Content/messages";

import StoryDisplay from "../PageElements/storyDisplay";

class Chapter extends Component {
  state = {
    captive: {
      found: false,
      freed: false
    }
  };

  handleCaptive = status => {
    const captive = {
      found: true,
      freed: false
    };
    if (status === "freed") {
      captive.freed = true;
    }
    this.setState({ captive });
  };

  render() {
    const { response } = this.props;
    const id = parseInt(response.params.id, 10);
    const chapter = chapters.find(c => c.id === id);
    if (!chapter) {
      return (
        <div>
          <h3>{NoSuchPage}</h3>
        </div>
      );
    }

    return (
      <div className="App">
        <div className="container">
          <StoryDisplay
            chapter={chapter}
            captive={this.state.captive}
            onCaptive={this.handleCaptive}
          />
        </div>
      </div>
    );
  }
}

export default Chapter;
