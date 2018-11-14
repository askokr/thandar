import React, { Component } from "react";
import Messages from "./messages";
import Story from "./stroy";

class Captive extends Component {
  render() {
    const {
      captiveFound,
      captiveFreed,
      number,
      onCaptiveFound,
      onCaptiveFreed
    } = this.props;
    const captiveFoundMessage = <Messages nr={7} />;
    const onwards = <Messages nr={2} />;

    if (captiveFound && !captiveFreed) {
      return (
        <div>
          <Story number={9} />
          <div>
            <button className="btn btn-secondary" onClick={onCaptiveFreed}>
              {onwards}
            </button>
          </div>
        </div>
      );
    } else if (
      (number === 6 ||
        number === 11 ||
        number === 12 ||
        number === 13 ||
        number === 14) &&
      !captiveFreed
    ) {
      return (
        <div>
          <button className="btn btn-secondary mt-2" onClick={onCaptiveFound}>
            {captiveFoundMessage}
          </button>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default Captive;
