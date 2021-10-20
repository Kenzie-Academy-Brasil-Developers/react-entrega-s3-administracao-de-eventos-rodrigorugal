import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./style/style";
import BrowserRoutes from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRoutes>
      <GlobalStyles />
      <App />
    </BrowserRoutes>
  </React.StrictMode>,
  document.getElementById("root")
);
