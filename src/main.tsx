import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./Button";
import "virtual:windi.css";
// import "./index.css";
// import "virtual:windi-devtools";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Button variant="primary" label="Button Test" />
    <Button variant="secondary" label="Button Test" />
  </React.StrictMode>
);
