import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalContextProvider } from "./store/GlobalState.js";
import CssBaseline from "@mui/material/CssBaseline";

ReactDOM.render(
  <GlobalContextProvider>
    <CssBaseline />
    <App />
  </GlobalContextProvider>,
  document.getElementById("root")
);
