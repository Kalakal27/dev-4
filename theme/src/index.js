import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import ThemeProvider from "./Provider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  rootElement
);
