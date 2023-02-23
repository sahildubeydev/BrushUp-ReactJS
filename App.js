/**
 * npx parcel index.html does the following:
 * It Creates a server
 * HOT - Hot Module Replacement
 * File Watcher algorithms - written in C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compatible with older version of browser
 * HTTPS on dev
 * PORT Number
 * Parcel uses Consist Hashing ALgorithms for Caching
 * It is a Zero Config Bundler
 *
 *
 *
 * Transitive Dependencies
 */

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1 from parcel"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
    hello: "world",
  },
  [heading, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
