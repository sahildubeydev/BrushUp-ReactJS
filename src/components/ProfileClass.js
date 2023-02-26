import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // Create State
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    console.log("Child - Constructor" + this.props.name);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("React class componentDidMount");
    }, 1000);
    // console.log("Child - componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      //code
    }
    if (this.state.count2 !== prevState.count2) {
      //code
    }
    console.log("Component Did update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    // console.log("Component Will unmount");
  }

  render() {
    // console.log("Child - render" + this.props.name);
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo?.avatar_url} />
        <h2>Hi {this.state.userInfo?.name} from class component</h2>
        <h2>Location:{this.state.userInfo?.location}</h2>
      </div>
    );
  }
}

export default Profile;

/**
 * Render phase
 * Parent constructor
 * Parent render
 * child constructor
 * child render
 *
 * commit phase
 * DOM is updated
 * API call
 * json is logged in console
 * child component did mount in console
 * parent component did mount
 *
 *
 *
 * child constructor
 * child render
 * child componentDidMount
 * API call
 * setState
 */
