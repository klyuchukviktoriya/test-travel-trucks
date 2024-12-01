import { useState } from "react";
import css from "./DetailsInfo.module.css";
import Reviews from "../Reviews/Reviews.jsx";
import FeaturesBlock from "../FeaturesBlock/FeaturesBlock.jsx";
import Booking from "../Booking/Booking.jsx";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCamperDetails } from "../../redux/campers/selectors.js";

export default function DetailsInfo() {
  const [activeTab, setActiveTab] = useState("features");

  const camperDetails = useSelector(selectCamperDetails);

  const renderContent = () => {
    switch (activeTab) {
      case "features":
        return <FeaturesBlock truck={camperDetails} />;
      case "reviews":
        return <Reviews reviews={camperDetails?.reviews || []} />;
      default:
        return <FeaturesBlock truck={camperDetails} />;
    }
  };

  return (
    <div className={css.detailsInfo}>
      <nav className={css.detailsNav}>
        <NavLink
          className={`${css.navButton} ${
            activeTab === "features" ? css.activeNavButton : ""
          }`}
          onClick={() => setActiveTab("features")}
        >
          Features
        </NavLink>
        <NavLink
          className={`${css.navButton} ${
            activeTab === "reviews" ? css.activeNavButton : ""
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </NavLink>
      </nav>

      <div className={css.detailsDiv}>
        <div className={css.detailsContent}>{renderContent()}</div>
        <Booking />
      </div>
    </div>
  );
}
