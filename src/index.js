import React from "react";
import ReactDOM from "react-dom";
import { curi } from "@curi/router";
import Browser from "@hickory/browser";
import { curiProvider } from "@curi/react-dom";

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
          <header>
            <header className="App-header">
              <h1>{Title}</h1>
            </header>
            <NavMenu />
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

// ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
