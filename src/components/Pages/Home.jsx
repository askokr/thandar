import React from "react";
import { Link } from "@curi/react-dom";
import { HomePageMessages } from "../Content/messages";

export default function Home() {
  return (
    <div className="container">
      <div>
        <Link name="Chapter" params={{ id: 1 }}>
          <button className="btn btn-light mt-5">
            {HomePageMessages.firstEncounter}
          </button>
        </Link>
      </div>
      <div>
        <Link name="Chapter" params={{ id: 3 }}>
          <button className="btn btn-light mt-2">
            {HomePageMessages.secondEncounter}
          </button>
        </Link>
      </div>
      <div>
        <Link name="Chapter" params={{ id: 7 }}>
          <button className="btn btn-light mt-2">
            {HomePageMessages.thirdEncounter}
          </button>
        </Link>
      </div>
    </div>
  );
}
