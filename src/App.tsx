import { Intent, Spinner } from "@blueprintjs/core";
import React from "react";
import ReactDOM from "react-dom";

import Title from "./Title";

const App = () => (
  <div>
    <Title />
    <Spinner intent={Intent.PRIMARY} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
