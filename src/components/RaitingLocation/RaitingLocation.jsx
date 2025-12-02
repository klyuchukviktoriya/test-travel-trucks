import css from "./RaitingLocation.module.scss";
import sprite from "../../assets/sprite.svg";
import PropTypes from "prop-types";
import { truckPropTypes } from "../../constants/propTypes";

export default function RaitingLocation({ truck, highlightReviews }) {
  if (!truck || !truck.rating) {
    return <p>Rating or location data is not available</p>;
  }

  const formatLocation = location => {
    if (!location) return "";
    const parts = location.split(",").map(part => part.trim());
    if (parts.length === 2) {
      return `${parts[1]}, ${parts[0]}`;
    }
    return location;
  };

  return (
    <div className={css.truckDetails}>
      <p className={css.truckDetails__star}>
        <svg width="16" height="16" fill="#FFC531">
          <use href={`${sprite}#icon-star`} />
        </svg>{" "}
        <span
          className={`${css.truckDetails__review} ${
            highlightReviews ? css.truckDetails__highlight : ""
          }`}
        >
          {truck.rating} ({truck.reviews?.length || 0} Reviews)
        </span>
      </p>
      <p className={css.truckDetails__loc}>
        <svg width="16" height="16">
          <use href={`${sprite}#icon-map`} />
        </svg>
        {formatLocation(truck.location)}
      </p>
    </div>
  );
}

RaitingLocation.propTypes = {
  truck: PropTypes.shape(truckPropTypes).isRequired,
  highlightReviews: PropTypes.bool,
};
