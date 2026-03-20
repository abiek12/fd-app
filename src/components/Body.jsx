import { foodTypes } from "../utils/mockData";
import { FoodSection } from "./FoodSection";
import { HeroSection } from "./HeroSection";
import { RestaurantSection } from "./restaurantSection";

export const Body = () => {
  return (
    <div className="body">
      <HeroSection />
      <FoodSection userName="Abhishek" foods={foodTypes} />
      <RestaurantSection />
    </div>
  );
};
