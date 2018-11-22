import React, { Component } from "react";
import chapters from "../Content/chapters";
import RulesPopup from "./rulesPopup";

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
    const { captive, id, onCaptive, showRules } = this.props;

    const chapter = chapters.find(c => c.id === 10);

    if (id === 7 || (id > 11 && id < 16)) {
      if (!captive.found) {
        return (
          <div className="captiveBox">
            <button
              className="btn btn-secondary btn-captive"
              onClick={() => onCaptive("found")}
            >
              {chapter.buttons[0].message}
            </button>
          </div>
        );
      } else if (!captive.freed) {
        return (
          <div className="captiveBox">
            <div className="captiveBoxText">
              {this.Paragraphs(chapter.content)}
              <RulesPopup rules={chapter.rules} showRules={showRules} />
            </div>
            <button
              className="btn btn-secondary btn-captive"
              onClick={() => onCaptive("freed")}
            >
              {chapter.buttons[1].message}
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
