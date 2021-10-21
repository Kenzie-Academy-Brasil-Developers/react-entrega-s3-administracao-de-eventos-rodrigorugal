import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./style/style";
import Providers from "./Providers";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
