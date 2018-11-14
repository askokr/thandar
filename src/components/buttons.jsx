import React, { Component } from "react";
import Messages from "./messages";

class Buttons extends Component {
  render() {
    const { number, onDefeat, onVictory } = this.props;

    const newNumber = number + 1;

    const storyBeginsAt = 0;
    const man = storyBeginsAt + 3;
    const imp = storyBeginsAt + 4;
    const ritualSuccess = storyBeginsAt + 7;
    const ritualFailure = storyBeginsAt + 8;
    const afterRitual = storyBeginsAt + 10;
    const red = storyBeginsAt + 11;
    const blue = storyBeginsAt + 12;
    const yellow = storyBeginsAt + 13;
    const green = storyBeginsAt + 14;
    const demonIsSlayn = storyBeginsAt + 15;
    const conclusion = storyBeginsAt + 16;

    const victory = <Messages nr={0} />;
    const defeat = <Messages nr={1} />;
    const onwards = <Messages nr={2} />;
    const followMan = <Messages nr={3} />;
    const followImp = <Messages nr={4} />;
    const inTime = <Messages nr={5} />;
    const tooLate = <Messages nr={6} />;
    const redRitual = <Messages nr={8} />;
    const blueRitual = <Messages nr={9} />;
    const yellowRitual = <Messages nr={10} />;
    const greenRitual = <Messages nr={11} />;
    const dead = <Messages nr={12} />;
    const toBeContinnued = <Messages nr={13} />;
    switch (number) {
      case 1:
        return (
          <div>
            <div>
              <button
                className="btn btn-secondary"
                onClick={() => onVictory(newNumber)}
              >
                {victory}
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <div>
              <button
                className="btn btn-secondary"
                onClick={() => onVictory(man)}
              >
                {followMan}
              </button>
            </div>
            <div>
              <button
                className="btn btn-secondary"
                onClick={() => onVictory(imp)}
              >
                {followImp}
              </button>
            </div>
          </div>
        );
      case 3:
        const afterChase = 5;
        return (
          <div>
            <div>
              <button
                className="btn btn-secondary"
                onClick={() => onVictory(afterChase)}
              >
                {victory}
              </button>
            </div>
            <div>
              <button
                className="btn btn-secondary mt-2"
                onClick={() => onDefeat(number)}
              >
                {defeat}
              </button>
            </div>
          </div>
        );
      case 6:
        return (
          <div>
            <div>
              <button
                className="btn btn-secondary"
                onClick={() => onVictory(ritualSuccess)}
              >
                {inTime}
              </button>
            </div>
            <div>
              <button
                className="btn btn-secondary mt-2"
                onClick={() => onVictory(ritualFailure)}
              >
                {tooLate}
              </button>
            </div>
          </div>
        );
      case 7:
        return (
          <div>
            <div>
              <button
                className="btn btn-secondary"
                onClick={() => onVictory(afterRitual)}
              >
                {onwards}
              </button>
            </div>
          </div>
        );
      case 8:
        return (
          <div>
            <div>
              <button
                className="btn btn-secondary"
                onClick={() => onVictory(afterRitual)}
              >
                {onwards}
              </button>
            </div>
          </div>
        );
      case 10:
        return (
          <div>
            <div>
              <button
                className="btn btn-danger m-2"
                onClick={() => onVictory(red)}
              >
                {redRitual}
              </button>
            </div>
            <div>
              <button
                className="btn btn-primary mt-2"
                onClick={() => onVictory(blue)}
              >
                {blueRitual}
              </button>
            </div>
            <div>
              <button
                className="btn btn-warning mt-2"
                onClick={() => onVictory(yellow)}
              >
                {yellowRitual}
              </button>
            </div>
            <div>
              <button
                className="btn btn-success mt-2"
                onClick={() => onVictory(green)}
              >
                {greenRitual}
              </button>
            </div>
          </div>
        );
      case 11:
        return (
          <div>
            <div>
              <button
                className="btn btn-secondary"
                onClick={() => onVictory(demonIsSlayn)}
              >
                {dead}
              </button>
            </div>
            <div>
              <button
                className="btn btn-secondary mt-2"
                onClick={() => onDefeat(number)}
              >
                {defeat}
              </button>
            </div>
          </div>
        );
      case 12:
        return (
          <div>
            <div>
              <button
                className="btn btn-secondary"
                onClick={() => onVictory(demonIsSlayn)}
              >
                {dead}
              </button>
            </div>
            <div>
              <button
                className="btn btn-secondary mt-2"
                onClick={() => onDefeat(number)}
              >
                {defeat}
              </button>
            </div>
          </div>
        );
      case 13:
        return (
          <div>
            <div>
              <button
                className="btn btn-secondary"
                onClick={() => onVictory(demonIsSlayn)}
              >
                {dead}
              </button>
            </div>
            <div>
              <button
                className="btn btn-secondary mt-2"
                onClick={() => onDefeat(number)}
              >
                {defeat}
              </button>
            </div>
          </div>
        );
      case 14:
        return (
          <div>
            <div>
              <button
                className="btn btn-secondary"
                onClick={() => onVictory(demonIsSlayn)}
              >
                {dead}
              </button>
            </div>
            <div>
              <button
                className="btn btn-secondary mt-2"
                onClick={() => onDefeat(number)}
              >
                {defeat}
              </button>
            </div>
          </div>
        );
      case 15:
        return (
          <div>
            <div>
              <button
                className="btn btn-secondary"
                onClick={() => onVictory(conclusion)}
              >
                {onwards}
              </button>
            </div>
          </div>
        );
      case 16:
        return <p>{toBeContinnued}</p>;
      default:
        return (
          <div>
            <div>
              <button
                className="btn btn-secondary"
                onClick={() => onVictory(newNumber)}
              >
                {victory}
              </button>
            </div>
            <div>
              <button
                className="btn btn-secondary mt-2"
                onClick={() => onDefeat(number)}
              >
                {defeat}
              </button>
            </div>
          </div>
        );
    }
  }
}

export default Buttons;
