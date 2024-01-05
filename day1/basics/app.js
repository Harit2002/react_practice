import React from "react";

import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello world from react"
);

const react_elements = [
  React.createElement("div", { id: "child" }),
  [
    React.createElement("h1", {}, "This is heading 1."),
    React.createElement("h2", {}, "This is heading 2."),
  ],
];

const parent = React.createElement("div", { id: "parent" }, react_elements);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
