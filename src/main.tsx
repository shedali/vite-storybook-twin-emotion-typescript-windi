import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./Button";
import "./index.css";
import "virtual:windi.css"; //this is added for devtools to work
import "virtual:windi-devtools"; //https://windicss.org/integrations/vite.html#design-in-devtools

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Button variant="primary" label="Button Test" />
    <Button variant="secondary" label="Button Test" />
  </React.StrictMode>
);
