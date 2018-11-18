import { prepareRoutes } from "@curi/router";
import Home from "./components/Pages/Home";
import Chapter from "./components/Pages/Chapter";
import NotFound from "./components/Pages/NotFound";

export default prepareRoutes([
  {
    name: "Home",
    path: "",
    response() {
      return { body: Home };
    }
  },
  {
    name: "Chapter",
    path: "chapter/:id",
    response() {
      return { body: Chapter };
    }
  },
  {
    name: "Catch All",
    path: "(.*)",
    response() {
      return { body: NotFound };
    }
  }
]);
