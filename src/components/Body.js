import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredList , setFilteredList]  =useState([]);
  const [searchText, setsearchText] = useState("");

  
  useEffect(() => {
    getData();
  },[]);

  const getData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.365185009368908&lng=79.41905222833157&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };


  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filterList = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredList(filterList);
              console.log(filterList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const rateList = resList.filter(
              (resturant) => resturant.info.avgRating > 4.5
            );
            setFilteredList(rateList);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((resturant) => (
        <Link to={"/restaurants/9"} key={resturant.info.id} ><RestaurantCard  resData={resturant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
