import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import App from "./App";
WebFont.load({
  google: {
    families: ["Roboto:300,400,700", "sans-serif"]
  }
});

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
