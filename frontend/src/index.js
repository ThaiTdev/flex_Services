import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.scss";
import App from "./App";
// import AppTest from "./AppTest";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <AppTest /> */}
    </BrowserRouter>
  </React.StrictMode>
);
