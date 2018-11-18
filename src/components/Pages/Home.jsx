import React from "react";
import { Link } from "@curi/react-dom";

import chapters from "../Content/chapters";

export default function Home() {
  return (
    <div>
      <div>
        <Link name="Chapter" params={{ id: 1 }}>
          <button className="btn btn-light">Alusta algusest</button>
        </Link>
        <h2 />
      </div>
    </div>
  );
}
