import { CDN_URL } from "../utils/constants";

export const RestaurantCard = (props) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    totalRatingsString,
    locality,
    aggregatedOffer,
    deliveryTimeString,
  } = props?.item;

  return (
    <section className="restaurant-card rounded-4xl w-64 h-76 overflow-hidden cursor-pointer leading-normal tracking-[-0.5px]">
      <div
        className="food-img-container w-full h-1/2 relative text-[1.25rem] font-extrabold text-secondary after:pointer-events-none after:absolute after:inset-0 after:content-[''] after:bg-linear-to-t 
            after:from-black/65 after:from-0% 
            after:via-black/25 after:via-35% 
            after:to-transparent after:to-60%"
      >
        <img
          className="restaurant w-full h-full"
          src={`${CDN_URL}/${cloudinaryImageId}`}
        />
        <div className="offer absolute bottom-0 p-4 z-99">
          {aggregatedOffer?.header && (
            <div className="offer-head">{aggregatedOffer?.header}</div>
          )}
          {aggregatedOffer?.subHeader && (
            <div className="offer-subhead">{aggregatedOffer?.subHeader}</div>
          )}
        </div>
      </div>
      <div className="details bg-tertiary-bg flex flex-col items-start gap-1 p-4">
        <h2 className="restaurant-name text-xl font-bold whitespace-nowrap overflow-hidden text-ellipsis w-56">
          {name}
        </h2>
        <div className="ratings-delivery-time-container flex justify-start items-center gap-1 text-base font-medium mb-2">
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
          <h4 className="rating">
            {avgRating} {totalRatingsString ? `(${totalRatingsString})` : ""}
          </h4>
          <h4 className="delivery-time">{deliveryTimeString}</h4>
        </div>
        <div className="cuisines whitespace-nowrap overflow-hidden text-ellipsis w-56 text-[0.92rem] text-off-white-font">
          {cuisines.join(", ")}
        </div>
        <div className="location text-[0.92rem] text-off-white-font">
          {locality}
        </div>
      </div>
    </section>
  );
};
