import React from "react";
import ReactDOM from "react-dom";
import App from "main/App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { createMemoryHistory } from "history";
import { ToastProvider } from "react-toast-notifications";

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "./index.css";

const history = createMemoryHistory();

ReactDOM.render(
  <ToastProvider>
    <React.StrictMode>
      <BrowserRouter history={history}>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ToastProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
