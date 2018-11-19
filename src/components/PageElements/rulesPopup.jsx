import React, { Component } from "react";
import Modal from "react-responsive-modal";
import ReactHtmlParser from "react-html-parser";
import { RulesPopupMessage } from "../Content/messages";

class RulesPopup extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  rulesList = rules => {
    return (
      <div>
        <h3 className="rulesSubtitle">{rules.title}</h3>
        <ul className="rulesList">
          {rules.content.map(function(line, index) {
            return (
              <li key={index} className="ruleLine">
                {ReactHtmlParser(line)}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  render() {
    const { open } = this.state;
    const { rules } = this.props;
    if (rules === undefined) {
      return <div />;
    }
    return (
      <div>
        <button onClick={this.onOpenModal} className="btn btn-rules">
          {RulesPopupMessage}
        </button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2 className="rulesTitle">{RulesPopupMessage}</h2>
          <div>{this.rulesList(rules)}</div>
        </Modal>
      </div>
    );
  }
}

export default RulesPopup;
