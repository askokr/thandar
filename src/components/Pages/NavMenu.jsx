import React from "react";
import { Link } from "@curi/react-dom";

export default function NavMenu() {
  return (
    <nav>
      <ul>
        <li id="home">
          <Link name="Home">Home</Link>
        </li>
        <li id="chapter">
          <Link name="Chapter" params={{ id: 1 }}>
            Chapter
          </Link>
        </li>
      </ul>
    </nav>
  );
}
