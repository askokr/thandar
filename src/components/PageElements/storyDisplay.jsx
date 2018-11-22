import React, { Component } from "react";
import { Link } from "@curi/react-dom";
import ReactHtmlParser from "react-html-parser";
import Captive from "./captive";
import RulesPopup from "./rulesPopup";

class StoryDisplay extends Component {
  Paragraphs = content => {
    return (
      <div className="content">
        {content.map(function(paragraph, index) {
          return (
            <p key={index} className="paragraphText">
              {ReactHtmlParser(paragraph)}
            </p>
          );
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
              <Link
                name="Chapter"
                params={{ id: button.id }}
                key={index}
                className="linkBehindButton"
              >
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
    const { chapter, captive, onCaptive, showRules } = this.props;

    return (
      <div>
        <h2 className="chapterTitle">{chapter.title}</h2>
        {this.Paragraphs(chapter.content)}
        <Captive
          captive={captive}
          id={chapter.id}
          onCaptive={onCaptive}
          showRules={showRules}
        />
        <RulesPopup rules={chapter.rules} showRules={showRules} />
        {this.Buttons(chapter.buttons)}
      </div>
    );
  }
}

export default StoryDisplay;
