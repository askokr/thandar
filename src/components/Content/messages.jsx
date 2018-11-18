import React, { Component } from "react";

export const Title = "Thandari turm";

class Messages extends Component {
  render() {
    const { nr } = this.props;
    const messages = [
      "Võit",
      "Kaotus",
      "Edasi",
      "Järgne inimesele",
      "Järgne paharetile",
      "Ruinose ülempreestrinna on alistatud",
      "Ruinose rituaal jõuab lõpule",
      "Ruinoslastel on vang",
      "Sinine rituaal",
      "Roheline rituaal",
      "Punane rituaal",
      "Kollane rituaal",
      "Deemon on surnud",
      "Seiklus jätkub"
    ];
    const message = messages[nr];

    return message;
  }
}

export default Messages;
