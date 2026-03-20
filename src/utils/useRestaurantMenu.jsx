import { useEffect, useState } from "react";
import { NAMASTE_DEV_BACKEND_URL } from "./constants";
import { ApiFetchStatus } from "./common";

const useRestaurantMenu = (resId) => {
  const [apiRes, setApiRes] = useState(null);
  const [apiReqStatus, setApiReqStatus] = useState(ApiFetchStatus.LOADING);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const URL = `${NAMASTE_DEV_BACKEND_URL}/listRestaurantMenu/${resId}`;
      const res = await fetch(URL);

      if (res.status !== 200) {
        console.log("Restaurant menu fetch failed!");
        setApiReqStatus(ApiFetchStatus.ERROR);
      }

      console.log("Restaurant fetch success!");
      const jsonData = await res.json();
      const finalData = {
        singleItem: jsonData?.data?.cards[2]?.card?.card?.info,
        groupedItems:
          (jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(
            (obj) => Object.keys(obj).length > 0
          ),
      };

      setApiRes(finalData);
      setApiReqStatus(ApiFetchStatus.SUCCESS);
    } catch (error) {
      console.log(error);
      setApiReqStatus(ApiFetchStatus.ERROR);
    }
  };

  return { apiReqStatus, apiRes };
};

export default useRestaurantMenu;
