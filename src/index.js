import React from "react";
import ReactDOM from "react-dom/client";

import Hello from "./components/hello/hello.jsx";
import "./index.html";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("app")).render(
  <>
    <Hello name="Mango" />
    <Hello name="Siri" />
  </>
);

function proba(a, b) {
  console.log("a", a);
  console.log("b", b);
  return a * b;
}

console.log(proba(5, 4));
