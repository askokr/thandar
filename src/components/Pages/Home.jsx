import React, { Component } from "react";
import { Link } from "@curi/react-dom";
import { HomePageMessages } from "../Content/messages";

class Home extends Component {
  state = {
    showRules: false
  };
  handleShowRules = e => {
    const showRules = e;
    this.setState({ showRules });
  };
  render() {
    const { showRules } = this.state;
    return (
      <div className="container">
        <div>
          <Link name="Chapter" params={{ id: 1 }} state={showRules}>
            <button className="btn btn-light mt-5">
              {HomePageMessages.firstEncounter}
            </button>
          </Link>
        </div>
        <div>
          <Link name="Chapter" params={{ id: 3 }} state={showRules}>
            <button className="btn btn-light mt-2">
              {HomePageMessages.secondEncounter}
            </button>
          </Link>
        </div>
        <div>
          <Link name="Chapter" params={{ id: 7 }} state={showRules}>
            <button className="btn btn-light mt-2">
              {HomePageMessages.thirdEncounter}
            </button>
          </Link>
        </div>
        <div>
          <p className="showRulesQuestion">
            {HomePageMessages.showRulesQuestion}
          </p>
        </div>
        <div className="form-group col-md-4">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className={
                "btn btn-secondary btn-toggle btn-toggle-ok" +
                (this.state.showRules ? "-full" : "")
              }
              onClick={() => this.handleShowRules(true)}
            >
              {HomePageMessages.showRulesYes}
            </button>
            <button
              type="button"
              className={
                "btn btn-secondary btn-toggle btn-toggle-no" +
                (this.state.showRules ? "" : "-full")
              }
              onClick={() => this.handleShowRules(false)}
            >
              {HomePageMessages.showRulesNo}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
