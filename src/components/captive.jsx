import React, { Component } from "react";
// import Messages from "./Content/messages";
// import Story from "./Content/stroy";

class Captive extends Component {
  render() {
    const {
      captiveFound,
      captiveFreed,
      id,
      onCaptiveFound,
      onCaptiveFreed
    } = this.props;
    // const captiveFoundMessage = <Messages nr={7} />;
    // const onwards = <Messages nr={2} />;

    if (captiveFound && !captiveFreed) {
      return (
        <div>
          {/* <Story id={9} /> */}
          <div>
            <button className="btn btn-secondary" onClick={onCaptiveFreed}>
              {/* {onwards} */}
            </button>
          </div>
        </div>
      );
    } else if (
      (id === 6 || id === 11 || id === 12 || id === 13 || id === 14) &&
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
