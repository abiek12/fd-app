import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiFetchStatus } from "../utils/common";
import MenuItem from "./MenuItem";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [openMap, setOpenMap] = useState({});

  let { apiReqStatus, apiRes } = useRestaurantMenu(id);

  useEffect(() => {
    if (!apiRes?.groupedItems) return;

    setGroupItemsState(apiRes.groupedItems);
  }, [apiRes]);

  const setGroupItemsState = (groupData) => {
    if (groupData.length === 0) return;

    let inital = {};
    groupData.map((_, i) => {
      inital[i] = true; // by default open all
    });

    setOpenMap(inital);
  };

  const toggeCollapse = (index) => {
    setOpenMap((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Renderings
  if (apiReqStatus === ApiFetchStatus.LOADING || !apiRes) {
    return <h1>Loading</h1>;
  }

  if (apiReqStatus === ApiFetchStatus.ERROR) {
    return <h1>Ohh hoh! Something went wrong.</h1>;
  }

  return (
    <div className="restaurant-menu-section px-130 py-30 flex flex-col justify-center gap-6">
      <h1 className="restuarant-name text-3xl font-bold">
        {apiRes.singleItem?.name}
      </h1>
      <div className="shadow-container p-4 rounded-2xl bg-[linear-gradient(to_top,var(--color-off-white-bg),var(--color-primary-bg))]">
        <div className="restaurant-details-container flex flex-col bg-primary-bg rounded-2xl border border-solid border-off-white-bg">
          <div className="det-container flex flex-col gap-4 py-6 px-5">
            <div className="top-container flex flex-col gap-[0.65rem] font-semibold text-[0.96rem]">
              <div className="top-sub flex justify-start items-center gap-4">
                <div className="rating-container flex justify-center items-center gap-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    stroke-color="rgba(2, 6, 12, 0.92)"
                    fill-color="rgba(2, 6, 12, 0.92)"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="9"
                      fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
                    ></circle>
                    <path
                      d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                      fill="white"
                    ></path>
                    <defs>
                      <linearGradient
                        id="StoreRating20_svg__paint0_linear_32982_71567"
                        x1="10"
                        y1="1"
                        x2="10"
                        y2="19"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#21973B"></stop>
                        <stop offset="1" stopColor="#128540"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="rating-text">{`${apiRes.singleItem?.avgRating} (${apiRes.singleItem?.totalRatingsString})`}</div>
                </div>
                <div className="for-two">{apiRes.singleItem?.costForTwo}</div>
              </div>
              <div className="cusines text-primary-accent text-[0.9rem]">
                {apiRes.singleItem?.cuisines.join(", ")}
              </div>
            </div>
            <div className="location-delivery-details flex flex-col gap-2 font-semibold">
              <div className="outlet">
                Outlet
                <span className="font-normal ml-2">
                  {apiRes.singleItem?.areaName}
                </span>
              </div>
              <div className="avg-delivery-time">
                {apiRes.singleItem?.sla?.slaString}
              </div>
            </div>
          </div>
          <div className="res-bottom-container py-3 px-4 flex items-center gap-2 border-t border-solid border-off-white-bg text-primary-accent text-[0.85rem]">
            <div className="swiggy-one-logo h-4">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_86,h_30/v1634558776/swiggy_one/OneLogo_3x.png"
                alt="swiggy-one"
                className="w-full h-full"
              />
            </div>
            <h4>Free delivery on orders above ₹199</h4>
          </div>
        </div>
      </div>

      <div className="deals-section my-4 mx-0 text-[0.88rem] font-extrabold">
        <h2 className="text-xl">Deals for you</h2>
        <div className="deals-container flex gap-4 overflow-x-scroll p-4">
          <div className="item grow-4 shrink-0 flex justify-center items-center gap-3 whitespace-nowrap cursor-pointer p-4 border border-solid border-off-white-bg rounded-2xl">
            <div className="deal-logo">
              <img
                className="w-12 h-12"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2026/1/12/96c82e26-2baa-4216-985d-f97a215fdde2_d07196b25b85d1fd9951e10c255ab737.avif"
                alt="30%off"
              />
            </div>
            <div className="deal-text flex flex-col gap-[0.2rem] ">
              <div className="deal-title text-4 font-extrabold">
                Extra ₹30 Off
              </div>
              <div className="deal-desc text-[0.8rem] text-off-white-font">
                NO CODE REQUIRED | ABOVE ₹99
              </div>
            </div>
          </div>
          <div className="item grow-4 shrink-0 flex justify-center items-center gap-3 whitespace-nowrap cursor-pointer p-4 border border-solid border-off-white-bg rounded-2xl">
            <div className="deal-logo">
              <img
                className="w-12 h-12"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2026/1/12/96c82e26-2baa-4216-985d-f97a215fdde2_d07196b25b85d1fd9951e10c255ab737.avif"
                alt="30%off"
              />
            </div>
            <div className="deal-text flex flex-col gap-[0.2rem] ">
              <div className="deal-title text-4 font-extrabold">
                Extra ₹30 Off
              </div>
              <div className="deal-desc text-[0.8rem] text-off-white-font">
                NO CODE REQUIRED | ABOVE ₹99
              </div>
            </div>
          </div>
          <div className="item grow-4 shrink-0 flex justify-center items-center gap-3 whitespace-nowrap cursor-pointer p-4 border border-solid border-off-white-bg rounded-2xl">
            <div className="deal-logo">
              <img
                className="w-12 h-12"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/DealRush_Offer_Icon.png"
                alt="50%off"
              />
            </div>
            <div className="deal-text flex flex-col gap-[0.2rem] ">
              <div className="deal-title text-4 font-extrabold">
                Extra ₹50 Off
              </div>
              <div className="deal-desc text-[0.8rem] text-off-white-font">
                NO CODE REQUIRED
              </div>
            </div>
          </div>
          <div className="item grow-4 shrink-0 flex justify-center items-center gap-3 whitespace-nowrap cursor-pointer p-4 border border-solid border-off-white-bg rounded-2xl">
            <div className="deal-logo">
              <img
                className="w-12 h-12"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic"
                alt="upto"
              />
            </div>
            <div className="deal-text flex flex-col gap-[0.2rem] ">
              <div className="deal-title text-4 font-extrabold">
                50% Off Upto ₹100
              </div>
              <div className="deal-desc text-[0.8rem] text-off-white-font">
                NO CODE REQUIRED | ABOVE ₹99
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="menu-text text-center font-bold text-[0.9rem] text-dull">
        MENU
      </p>

      <div className="filter-section flex flex-col w-full gap-4">
        <div className="search-container flex w-full">
          <input
            className="search w-full py-3 px-2 rounded-[0.65rem] border-none bg-off-white-bg cursor-pointer placeholder:text-[0.9rem] placeholder:font-semibold text-center text-dull"
            placeholder="Search for dishes"
            type="text"
          />
        </div>
        <div className="filter-container w-full flex justify-start items-center gap-2 text-sm">
          <div className="veg-container">
            <button className="veg-btn text-green-600 py-[0.2rem] px-[0.8rem] rounded-2xl border border-solid border-off-white-bg cursor-pointer bg-primary-bg hover:bg-tertiary-bg hover:border-off-white">
              Veg
            </button>
          </div>
          <div className="non-veg-container">
            <button className="non-veg-btn text-red-600 py-[0.4rem] px-[0.8rem] rounded-2xl border border-solid border-off-white-bg cursor-pointer bg-primary-bg hover:bg-tertiary-bg hover:border-off-white">
              Non
            </button>
          </div>
          <div className="best-seller">
            <button className="best-seller-btn text-gray-600 py-[0.4rem] px-[0.8rem] rounded-2xl border border-solid border-off-white-bg cursor-pointer bg-primary-bg hover:bg-tertiary-bg hover:border-off-white">
              Bestseller
            </button>
          </div>
        </div>
      </div>

      <div className="category-section">
        {apiRes.groupedItems.map((item, index) => {
          const isOpen = openMap[index];
          return (
            <div key={index} className="container">
              <div className="menu-item py-0 px-4">
                <button
                  onClick={() => toggeCollapse(index)}
                  className="collapse-btn w-full border-none bg-none flex justify-between items-center mt-2 mr-0 mb-8 ml-0 text-[1.1rem] font-extrabold cursor-pointer"
                >
                  <div className="menu-group-title">
                    {`${item?.card?.card?.title} (${item?.card?.card?.itemCards?.length})`}
                  </div>
                  <div
                    className={`transition-all duration-200 ease-in-out  ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      shapeRendering="geometricPrecision"
                      textRendering="geometricPrecision"
                      imageRendering="optimizeQuality"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      viewBox="0 0 512 266.77"
                    >
                      <path
                        fillRule="nonzero"
                        d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"
                      />
                    </svg>
                  </div>
                </button>
                {isOpen &&
                  item?.card?.card?.itemCards.map((i, idx) => (
                    <div key={idx} className="ind-item">
                      <hr className="my-8 text-gray-200" />
                      <MenuItem item={i} />
                    </div>
                  ))}
              </div>
              <div className="divider my-4 border-t border-solid border-t-gray-300"></div>
            </div>
          );
        })}
      </div>

      <div className="menu-items-footer">END</div>
    </div>
  );
};

export default RestaurantMenu;
