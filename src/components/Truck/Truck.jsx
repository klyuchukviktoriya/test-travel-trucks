import PropTypes from "prop-types";
import css from "./Truck.module.css";
import sprite from "../../assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/campers/selectors.js";
import { toggleFavorite } from "../../redux/campers/slice.js";
import { NavLink } from "react-router-dom";
import Features from "../Features/Features.jsx";

export default function Truck({ truck }) {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.includes(truck.id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(truck.id));
  };

  const formatLocation = location => {
    if (!location) return "";

    const parts = location.split(",").map(part => part.trim());
    if (parts.length === 2) {
      return `${parts[1]}, ${parts[0]}`;
    }
    return location;
  };

  const galleryImage = truck.gallery?.[0]?.thumb || "default-image-path.jpg";

  return (
    <div className={css.truck}>
      <img className={css.truckImg} src={galleryImage} alt={truck.name} />
      <div className={css.truckInfo}>
        <div className={css.truckHead}>
          <div className={css.truckHeadUp}>
            <h2 className={css.truckTitle}>{truck.name}</h2>
            <div className={css.truckTitleRight}>
              <p className={css.truckPrice}>€{truck.price}</p>

              <svg
                width="24"
                height="24"
                className={`${
                  isFavorite ? css.favoriteActive : css.favoriteButton
                }`}
                onClick={handleFavoriteClick}
                role="button"
                aria-label="Like"
              >
                <use href={`${sprite}#icon-favorite`} />
              </svg>
            </div>
          </div>
          <div className={css.truckHeadDown}>
            <div className={css.truckDetails}>
              <p className={css.truckStar}>
                <svg width="16" height="16" fill="#FFC531">
                  <use href={`${sprite}#icon-star`} />
                </svg>{" "}
                {truck.rating} ({truck.reviews.length} Reviews)
              </p>
              <p className={css.truckLoc}>
                <svg width="16" height="16">
                  <use href={`${sprite}#icon-map`} />
                </svg>
                {formatLocation(truck.location)}
              </p>
            </div>
          </div>
        </div>
        <p className={css.description}>{truck.description}</p>
        <Features truck={truck} />

        <NavLink to={`/catalog/${truck.id}`}>
          <button className={css.truckButton}>Show more</button>
        </NavLink>
      </div>
    </div>
  );
}

Truck.propTypes = {
  truck: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    gallery: PropTypes.arrayOf(
      PropTypes.shape({
        thumb: PropTypes.string.isRequired,
      })
    ).isRequired,
    transmission: PropTypes.string,
    engine: PropTypes.string,
    AC: PropTypes.bool,
    kitchen: PropTypes.bool,
    TV: PropTypes.bool,
    bathroom: PropTypes.bool,
    water: PropTypes.bool,
  }).isRequired,
};
