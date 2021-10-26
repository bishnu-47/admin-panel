import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalContextProvider } from "./store/GlobalState.js";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

ReactDOM.render(
  <GlobalContextProvider>
    <Router>
      <CssBaseline />
      <App />
    </Router>
  </GlobalContextProvider>,
  document.getElementById("root")
);
