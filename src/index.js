import React from "react";
import ReactDOM from "react-dom";
import { curi } from "@curi/router";
import Browser from "@hickory/browser";
import { curiProvider } from "@curi/react-dom";
import { Link } from "@curi/react-dom";

import routes from "./routes";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import { Title } from "./components/Content/messages";
import NavMenu from "./components/Pages/NavMenu";
import * as serviceWorker from "./serviceWorker";

const history = Browser();
const router = curi(history, routes);
const Router = curiProvider(router);

ReactDOM.render(
  <Router>
    {({ response }) => {
      const { body: Body } = response;
      return (
        <React.Fragment>
          <header className="App-header">
            <Link name="Home">
              <h1 className="mainTitle">{Title}</h1>
            </Link>
          </header>
          <main>
            <Body response={response} />
          </main>
        </React.Fragment>
      );
    }}
  </Router>,
  document.getElementById("root")
);
serviceWorker.unregister();
