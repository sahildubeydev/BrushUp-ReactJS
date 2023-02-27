import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent - constructor");
  }
  componentDidMount() {
    // This is the best place to make an api call
    // console.log("Parent - componentDidMount");
  }
  render() {
    // console.log("Parent - render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p>This is a Food App project. Day 09 - Finding the path🚀</p>
        <Profile />
      </div>
    );
  }
}

export default About;

/**
 * Parent Constructor
 * Parent Render
 *    First Child - Constructor
 *    First Child - Render
 *    Second Child - Constructor
 *    Second Child - Render
 *    First Child - componentDidMount
 *    Second Child - componentDidMount
 * Parent - componentDidMount
 */
