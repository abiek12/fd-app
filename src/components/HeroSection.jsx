export const HeroSection = () => {
  return (
    <section className="hero-section bg-primary-accent grid grid-cols-12 grid-rows-2 gap-4 py-4 px-0">
      <div className="right-img-container col-span-2 row-span-full">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" />
      </div>

      <div className="top-container col-start-3 col-end-11 row-span-1 flex flex-col justify-center items-center">
        <div className="title text-secondary text-5xl font-semibold p-3">
          Order food. Shop groceries. Swiggy it!
        </div>
        <div className="search-container flex gap-4 px-48 py-0">
          <div className="input-container location-container grow shrink-0 basis-80">
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

      <div className="food-insta-cards-container col-start-3 col-end-11 row-span-1">
        <div className="card">
          <div className="card-top-section">
            <h1 className="title">FOOD DELIVERY</h1>
            <h2 className="desc">FROM RESTAURANTS</h2>
            <h4 className="offer">UPTO 60% OFF</h4>
          </div>
          <div className="card-bottom-section">
            <a href="" className="explore-btn">
              <div className="explore">Explore</div>
              <div className="icon-container">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  aria-label="rating-up-down-icon"
                  aria-hidden="false"
                  strokecolor="#FFFFFF"
                  fillcolor="#FFFFFF"
                >
                  <path
                    d="M12.634 3.45a1 1 0 0 0-1.365 1.462l4.827 4.506c.238.221.44.41.614.577H2.996a1 1 0 0 0 0 2h13.777c-.186.18-.41.39-.677.64l-4.769 4.45a1 1 0 0 0 1.365 1.462l4.817-4.495c.546-.51 1.03-.96 1.367-1.376.365-.449.664-.979.664-1.65 0-.672-.299-1.201-.664-1.65-.338-.415-.821-.866-1.367-1.376z"
                    fill="#FFFFFF"
                    fillOpacity="0.92"
                  ></path>
                </svg>
              </div>
            </a>
            <div className="food-img"></div>
          </div>
        </div>
        <div className="card">
          <div className="card-top-section">
            <h1 className="title">INSTAMART</h1>
            <h2 className="desc">INSTANT GROCERY</h2>
            <h4 className="offer">UPTO 60% OFF</h4>
          </div>
          <div className="card-bottom-section">
            <a href="" className="explore-btn">
              <div className="explore">Explore</div>
              <div className="icon-container">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  aria-label="rating-up-down-icon"
                  aria-hidden="false"
                  strokecolor="#FFFFFF"
                  fillcolor="#FFFFFF"
                >
                  <path
                    d="M12.634 3.45a1 1 0 0 0-1.365 1.462l4.827 4.506c.238.221.44.41.614.577H2.996a1 1 0 0 0 0 2h13.777c-.186.18-.41.39-.677.64l-4.769 4.45a1 1 0 0 0 1.365 1.462l4.817-4.495c.546-.51 1.03-.96 1.367-1.376.365-.449.664-.979.664-1.65 0-.672-.299-1.201-.664-1.65-.338-.415-.821-.866-1.367-1.376z"
                    fill="#FFFFFF"
                    fillOpacity="0.92"
                  ></path>
                </svg>
              </div>
            </a>
            <div className="food-img"></div>
          </div>
        </div>
      </div>

      <div className="left-img-container col-span-2 col-end-13 row-span-full">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" />
      </div>
    </section>
  );
};
