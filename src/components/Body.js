import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
// import UserContext from "../utils/UserContext";

const Body = ({ user }) => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  // const { newUser } = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  // const isOnline = useOnline();

  // if (!isOnline) {
  //   return <h1>🔴Offline, please check your internet connection!!</h1>;
  // }

  // not render component (Early return)
  if (!allRestaurants) return null;

  // if (filteredRestaurants?.length === 0)
  //   return <h1>No Restaurant match your search!</h1>;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-fuchsia-50 my-5">
        <input
          type="text"
          className="focus:bg-purple-100 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            // e.target.value = whatever you type in input
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-2 m-2 bg-purple-500 hover:bg-purple-400 text-white rounded-md"
          onClick={() => {
            // need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        {/* <input value={newUser.name}></input> */}
      </div>
      <div className="flex flex-wrap ">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard
                {...restaurant.data}
                key={restaurant.data.id}
                user={user}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
