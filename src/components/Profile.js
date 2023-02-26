import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // API Call
    // console.log("useEffect");
  }, [count]);
  //   console.log("render");

  useEffect(() => {
    // API Call
    const timer = setInterval(() => {
      console.log("React class componentDidMount");
    }, 1000);

    console.log("useEffect");

    return () => {
      clearInterval(timer);
      console.log("useEffect return");
    };
  }, []);
  console.log("render");

  return (
    <div>
      <h2>Profile Functional Component</h2>
      <h3>Hello {props.name} from functional component</h3>
      <h3>Count: {count}</h3>
      <button
        onClick={() => {
          setCount(1);
        }}
      >
        Count
      </button>
    </div>
  );
};

export default Profile;
