import { RestaurantCard } from "./RestaurantCard";
import { allRestaurants } from "../utils/mockData";
import { useEffect, useState } from "react";
import { NAMASTE_DEV_BACKEND_URL } from "../utils/constants";
import { ApiFetchStatus } from "../utils/common";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const RestaurantSection = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [data, setData] = useState([]);
  const [sortedList, setSortedList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchInput, setSearchInput] = useState(data);
  const [apiReqStatus, setStatus] = useState(ApiFetchStatus.LOADING);

  const options = [
    { id: 1, label: "Sort By", value: "" },
    { id: 2, label: "Relevance", value: "relevance" },
    { id: 3, label: "Delivery Time", value: "deliveryTime" },
    { id: 4, label: "Rating", value: "rating" },
  ];

  useEffect(() => {
    console.log("Use effect called after render!");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const URL = `${NAMASTE_DEV_BACKEND_URL}/listRestaurants`;
      const res = await fetch(URL);

      if (res.status == 200) {
        console.log("Restaurant fetch success!");
        setStatus(ApiFetchStatus.SUCCESS);
      }

      const jsonData = await res.json();
      const finalData =
        jsonData?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      const mappedData = finalData.map((i) => {
        return {
          id: i.info.id,
          name: i.info.name,
          cloudinaryImageId: i.info.cloudinaryImageId,
          cuisines: i.info.cuisines,
          avgRating: i.info.avgRating,
          totalRatingsString: i.info.totalRatingsString.split(" ")[0],
          locality: i.info.locality,
          aggregatedOffer: i.info.aggregatedDiscountInfoV3,
          deliveryTimeString: i.info.sla.slaString,
        };
      });

      setData(mappedData);
      setFilteredList(mappedData);
    } catch (error) {
      setStatus(ApiFetchStatus.ERROR);
      console.log("Error while fetching api", error);
    }
  };

  const handleSelectChange = (e) => {
    const target = e.target.value;
    setSelectedValue(target);

    let sorted;
    // here we cant use the selectedValue state becasue react state update asynchrously and batched (dont update immedietly) so we can rely on it.
    switch (target) {
      case "relevance":
        setSortedList(allRestaurants);
        break;
      case "deliveryTime":
        // array sort mutate original array, hence we copy the original array into other by spread and sort that array
        sorted = [...allRestaurants].sort(
          (a, b) => a.data.timeToDeliver - b.data.timeToDeliver
        );
        setSortedList(sorted);
        break;
      case "rating":
        sorted = [...allRestaurants].sort(
          (a, b) => b.data.avgRating - a.data.avgRating
        );
        setSortedList(sorted);
        break;
      default:
        setSortedList(allRestaurants);
        break;
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    searchFilter(value);
  };

  const searchFilter = (input) => {
    const filterData = data.filter((i) => {
      return i.name.toLowerCase().includes(input.toLowerCase());
    });
    setFilteredList(filterData);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <div className="offline-container">
        <h1 className="offline-text">
          Looks like you're offline! Please check your internet connectivity!
        </h1>
      </div>
    );
  }

  // Renderings
  if (apiReqStatus === ApiFetchStatus.LOADING) {
    return <ShimmerUI />;
  }

  if (apiReqStatus === ApiFetchStatus.ERROR) {
    return <h1>Ohh hoh! Something went wrong.</h1>;
  }

  return (
    <section className="restaurant-section">
      <h2 className="sections-title">
        Restaurants with online food delivery in {"Kochi"}
      </h2>
      <div className="filter-container">
        <div className="select-container">
          <select
            className="sort-by"
            value={selectedValue}
            onChange={handleSelectChange}
            name=""
            id=""
          >
            {options.map((i) => {
              return (
                <option key={i.id} value={i.value}>
                  {i.label}
                </option>
              );
            })}
          </select>
        </div>
        <div className="search-container">
          <input
            type="text"
            className="search"
            placeholder="Search for restaurant"
            value={searchInput}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="restaurant-container">
        {filteredList.map((item) => {
          return (
            <Link
              className="link-container"
              to={`/restaurant/${item.id}`}
              key={item.id}
            >
              <RestaurantCard item={item} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};
