import React from "react";
import { createRoot } from "react-dom";
import App from "./App";

const reactRoot = createRoot(document.getElementById('react-root'));

reactRoot.render(
  <App/>
);
