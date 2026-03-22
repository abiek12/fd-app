import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="hero-section bg-primary-accent grid grid-cols-12 grid-rows-2 gap-2 py-4 px-0 leading-normal tracking-[-0.5px]">
      <div className="right-img-container col-span-2 row-span-full">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" />
      </div>

      <div className="top-container col-start-3 col-end-11 row-span-1 flex flex-col justify-center items-center gap-4">
        <div className="title text-secondary text-5xl font-semibold p-3 text-center">
          Order food. Shop groceries.
          <br className="mb-4" />
          Swiggy it!
        </div>
        <div className="search-container flex justify-center items-center gap-4 px-48 py-0">
          <div className="input-container location-container grow-0 shrink-0 basis-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 18 23"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.115 21.8122C12.4772 19.4062 17.7886 13.4751 17.7886 8.78883C17.7886 3.79647 13.9976 0 9.00526 0C4.0129 0 0.210938 3.79647 0.210938 8.78883C0.210938 13.4755 5.52998 19.4073 7.89476 21.8129C8.51149 22.4403 9.49871 22.44 10.115 21.8122ZM8.99988 12.7888C11.4269 12.7888 13.3943 10.8214 13.3943 8.39441C13.3943 5.96745 11.4269 4 8.99988 4C6.57292 4 4.60547 5.96745 4.60547 8.39441C4.60547 10.8214 6.57292 12.7888 8.99988 12.7888Z"
                fill="#FF5200"
              ></path>
            </svg>
            <input
              type="search"
              className="choose-location input"
              placeholder="Enter your delivery location"
            ></input>
            <svg
              className="drop-down-btn cursor-pointer"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              aria-label="rating-down-down-icon"
              aria-hidden="false"
              strokecolor="rgba(2, 6, 12, 0.92)"
              fillcolor="rgba(2, 6, 12, 0.92)"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.372 6.15a1.1 1.1 0 0 0-.117 1.552l7.184 8.355.03.035c.149.173.327.381.504.536.212.186.564.427 1.058.427s.847-.24 1.059-.427c.177-.155.355-.363.504-.536l.03-.035 7.12-8.282a1.1 1.1 0 0 0-1.668-1.434l-7.045 8.194-7.108-8.267a1.1 1.1 0 0 0-1.55-.117"
                fill="rgba(2, 6, 12, 0.92)"
                fillOpacity="0.92"
              ></path>
            </svg>
          </div>
          <div className="input-container restuarant-container grow-0 shrink-0 basis-120">
            <input
              type="search"
              className="search-bar input"
              placeholder="Search for restaurant, item or more"
            ></input>
            <svg
              className="search-icon w-6"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
                style={{
                  fill: "none",
                  stroke: "#000000",
                  strokeMiterlimit: 10,
                  strokeWidth: 32,
                }}
              />

              <line
                x1="338.29"
                y1="338.29"
                x2="448"
                y2="448"
                style={{
                  fill: "none",
                  stroke: "#000000",
                  strokeLinecap: "round",
                  strokeMiterlimit: 10,
                  strokeWidth: 32,
                }}
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="food-insta-cards-container col-start-3 col-end-11 row-span-1 flex">
        <div className="food-card">
          <Link to="/">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"
              alt="Food-delivery-card"
            />
          </Link>
        </div>
        <div className="instamart-card">
          <Link to="/">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"
              alt="instamart-card"
            />
          </Link>
        </div>
        <div className="dine-out-card">
          <Link to="/">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"
              alt="dine-out-card"
            />
          </Link>
        </div>
      </div>

      <div className="left-img-container col-span-2 col-end-13 row-span-full">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" />
      </div>
    </section>
  );
};
