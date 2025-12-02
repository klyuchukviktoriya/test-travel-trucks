import { useState } from "react";
import css from "./DetailsInfo.module.scss";
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
      <nav className={css.detailsInfo__nav}>
        <NavLink
          className={`${css.detailsInfo__nav_btn} ${
            activeTab === "features" ? css.detailsInfo__nav_btnActive : ""
          }`}
          onClick={() => setActiveTab("features")}
        >
          Features
        </NavLink>
        <NavLink
          className={`${css.detailsInfo__nav_btn} ${
            activeTab === "reviews" ? css.detailsInfo__nav_btnActive : ""
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </NavLink>
      </nav>

      <div className={css.detailsInfo__div}>
        <div>{renderContent()}</div>
        <Booking />
      </div>
    </div>
  );
}
