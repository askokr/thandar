import React, { Component } from "react";
import chapters from "./Content/chapters";
import { CaptiveMessages } from "./Content/messages";

class Captive extends Component {
  Paragraphs = content => {
    return (
      <div className="content">
        {content.map(function(paragraph, index) {
          return (
            <p key={index} className="paragraphText">
              {paragraph}
            </p>
          );
        })}
      </div>
    );
  };

  render() {
    const { captive, id, onCaptive } = this.props;

    const chapter = chapters.find(c => c.id === 10);

    if (id === 7 || (id > 11 && id < 16)) {
      if (!captive.found) {
        return (
          <div className="captiveBox">
            <button
              className="btn btn-secondary btn-captive"
              onClick={() => onCaptive("found")}
            >
              {CaptiveMessages.foundMessage}
            </button>
          </div>
        );
      } else if (!captive.freed) {
        return (
          <div className="captiveBox">
            <div className="captiveBoxText">
              {this.Paragraphs(chapter.content)}
            </div>
            <button
              className="btn btn-secondary btn-captive"
              onClick={() => onCaptive("freed")}
            >
              {CaptiveMessages.freedMeddage}
            </button>
          </div>
        );
      }
      // captive found and freed
      return <div />;
    } else {
      return <div />;
    }
  }
}

export default Captive;
