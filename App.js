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
 * Tree Shaking -Removing nu-wanted
 *
 * Transitive Dependencies
 */

import { React } from "react";
import ReactDOM from "react-dom/client";

// We will never use React.createElement
// const heading1 = React.createElement(
//   "h1",
//   {
//     id: "title",
//     key: "h1",
//   },
//   "Heading 1 from parcel"
// );

// React.createElement(gives us object) => Object (object is converted to html code) => HTML(DOM)

// const heading = React.createElement(
//   "h2",
//   {
//     id: "title",
//     key: "h2",
//   },
//   "Namaste React"
// );

/**<div class="header">
      <h1>Namaste React</h1>
      <ul>
        <li>About Us</li>
        <li>Support</li>
        <li>Home</li>
      </ul>
    </div> 
*/

// JSX?
// What is a React element? Object
const title = (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

// React Component
// - Functional - New way of writing code
// - Use of functional component -

// Composing component / Component composition
// = Passing component inside another component then it is known as component composition.
const HeaderComponent = () => {
  return (
    <div>
      {title}
      <h1>Namaste React from functional component</h1>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

// - Class Based Component - Old Way of writing code

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root

// async defer
root.render(<HeaderComponent />);
