import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { FilterProvider } from "./Context/filterContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <FilterProvider>
    <App />
    </FilterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
