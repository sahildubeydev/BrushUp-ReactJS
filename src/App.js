import { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
// import Instamart from "./components/Instamart";
import UserContext from "./utils/UserContext";

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));
// Upon On Demand Loading -> upon render -> react will suspend loading -> because the code is not loaded yet

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Shiv Dubey",
    email: "support@shiv.com",
  });

  return (
    <>
      <UserContext.Provider
        value={{
          user: user,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Body
            user={{
              name: "Namaste React",
              email: "namaste@react.com",
            }}
          />
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <About fallback={<h1>Loading...</h1>} />
          </Suspense>
        ),
        children: [
          {
            path: "profile", //parentPath/{path} => localhost:1234/about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

/**
 * AppLayout
 * (user)
 *    - <Body user={user}/>
 *     - <RestaurantContainer user=>
 *      - RestaurantCard user={user}
 *       - <h4>{user}</h4>
 *
 * This is known as PROPS DRILLING
 */
