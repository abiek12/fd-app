import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

export const Header = () => {
  return (
    <header className="header flex justify-between items-center px-47 py-10 bg-primary-accent">
      <div className="logo-container h-12 w-40">
        <Link to="/">
          <img
            alt=""
            height="100%"
            loading="lazy"
            width="100%"
            src={LOGO_URL}
            className="w-52"
          />
        </Link>
      </div>

      <div className="nav-container flex justify-evenly items-center gap-8">
        <a href="" className="nav-item about-us">
          Swiggy Corporate
        </a>

        <a href="" className="nav-item partner-with-us">
          Partner with us
        </a>

        <div className="contact">
          <Link className="nav-item" to="/contact">
            Contact
          </Link>
        </div>

        <div className="about-us">
          <Link className="nav-item" to="/about-us">
            About Us
          </Link>
        </div>

        <a
          href=""
          className="nav-item flex gap-2 justify-center align-middle p-4 border border-secondary rounded-xl"
        >
          Get the App
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
              className="-rotate-45"
            >
              <path
                d="M12.634 3.45a1 1 0 0 0-1.365 1.462l4.827 4.506c.238.221.44.41.614.577H2.996a1 1 0 0 0 0 2h13.777c-.186.18-.41.39-.677.64l-4.769 4.45a1 1 0 0 0 1.365 1.462l4.817-4.495c.546-.51 1.03-.96 1.367-1.376.365-.449.664-.979.664-1.65 0-.672-.299-1.201-.664-1.65-.338-.415-.821-.866-1.367-1.376z"
                fill="#FFFFFF"
                fillOpacity="0.92"
              ></path>
            </svg>
          </div>
        </a>

        <div className="nav-item profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.7607 11.8897C17.6325 11.8897 19.1488 10.4133 19.1488 8.59205C19.1488 6.77184 17.6325 5.29541 15.7607 5.29541C13.89 5.29541 12.3726 6.77184 12.3726 8.59205C12.3726 10.4133 13.89 11.8897 15.7607 11.8897ZM8.4418 18.8226C9.55113 15.9384 12.4101 13.8843 15.7607 13.8843C19.1131 13.8843 21.9711 15.9384 23.0799 18.8226C23.4596 19.8103 23.6494 20.3041 23.2438 20.8947C22.8381 21.4853 22.1753 21.4853 20.8498 21.4853H10.6717C9.34616 21.4853 8.68342 21.4853 8.27773 20.8947C7.87205 20.304 8.06197 19.8102 8.4418 18.8226Z"
              fill="#43464A"
            />

            <path
              d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z"
              fill="#43464A"
            />

            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.449 17.773C23.0101 17.773 25.0849 15.7528 25.0849 13.2608C25.0849 10.7702 23.0101 8.75 20.449 8.75C17.8893 8.75 15.813 10.7702 15.813 13.2608C15.813 15.7528 17.8893 17.773 20.449 17.773ZM10.4354 27.2601C11.9533 23.3136 15.8653 20.5029 20.4498 20.5029C25.037 20.5029 28.9475 23.3136 30.4646 27.26C30.9842 28.6115 31.244 29.2872 30.6889 30.0953C30.1338 30.9034 29.2269 30.9034 27.4132 30.9034H13.4865C11.6729 30.9034 10.766 30.9034 10.2109 30.0952C9.65584 29.2869 9.9157 28.6113 10.4354 27.2601Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};
