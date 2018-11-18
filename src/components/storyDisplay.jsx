import React, { Component } from "react";
import { Link } from "@curi/react-dom";
import Captive from "./captive";

class StoryDisplay extends Component {
  Paragraphs = content => {
    return (
      <div className="content">
        {content.map(function(paragraph, index) {
          return <p key={index}>{paragraph}</p>;
        })}
      </div>
    );
  };

  Buttons = buttons => {
    if (buttons !== undefined) {
      return (
        <div className="buttons">
          {buttons.map(function(button, index) {
            return (
              <Link name="Chapter" params={{ id: button.id }} key={index}>
                <button className={"btn btn-" + button.class}>
                  {button.message}
                </button>
              </Link>
            );
          })}
        </div>
      );
    }
  };

  render() {
    const { chapter, captive, onCaptive } = this.props;

    return (
      <div>
        <h2>{chapter.title}</h2>
        {this.Paragraphs(chapter.content)}
        <Captive captive={captive} id={chapter.id} onCaptive={onCaptive} />
        {this.Buttons(chapter.buttons)}
      </div>
    );
  }
}

export default StoryDisplay;
