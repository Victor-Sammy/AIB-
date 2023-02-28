import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import "./fontawesome";
import { dom } from "@fortawesome/fontawesome-svg-core";
import "./Api/Api";
import AppProviders from "./context";

dom.watch();
// This will kick off the initial replacement of i to svg tags and configure a MutationObserver

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProviders>
    <App />
  </AppProviders>
);
