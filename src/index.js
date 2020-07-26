import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import MenuContextProvider from "./contexts/MenuContext";

ReactDOM.render(
  <React.StrictMode>
    <MenuContextProvider>
      <App />
    </MenuContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
