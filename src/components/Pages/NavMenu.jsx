import React from "react";
import { Link } from "@curi/react-dom";

export default function NavMenu() {
  return (
    <nav>
      <ul>
        <li id="home">
          <Link name="Home">Esileht</Link>
        </li>
      </ul>
    </nav>
  );
}
