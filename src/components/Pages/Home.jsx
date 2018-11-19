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
      {/* <div className="form-group col-md-4">
        <label>Kas näitan reegleid</label>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-secondary btn-toggle btn-toggle-ok"
          >
            Jah
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-toggle btn-toggle-no"
          >
            Ei
          </button>
        </div>
      </div> */}
    </div>
  );
}
