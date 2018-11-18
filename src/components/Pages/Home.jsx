import React from "react";
import { Link } from "@curi/react-dom";

export default function Home() {
  return (
    <div className="container">
      <div>
        <Link name="Chapter" params={{ id: 1 }}>
          <button className="btn btn-light mt-5">Alusta algusest</button>
        </Link>
      </div>
      <div>
        <Link name="Chapter" params={{ id: 3 }}>
          <button className="btn btn-light mt-2">Teine võitlus</button>
        </Link>
      </div>
      <div>
        <Link name="Chapter" params={{ id: 7 }}>
          <button className="btn btn-light mt-2">Kolmas võitlus</button>
        </Link>
      </div>
    </div>
  );
}
