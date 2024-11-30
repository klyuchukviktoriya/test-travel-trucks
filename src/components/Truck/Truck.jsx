import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import css from "./Truck.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/campers/selectors.js";
import { toggleFavorite } from "../../redux/campers/slice.js";
import sprite from "../../assets/sprite.svg";
export default function Truck({ truck }) {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.includes(truck.id);
  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(truck.id));
  };

  const featureMapping = {
    transmission: { label: "Automatic", icon: "icon-automatic" },
    engine: { label: "Petrol", icon: "icon-petrol" },
    AC: { label: "AC", icon: "icon-ac" },
    bathroom: { label: "Bathroom", icon: "icon-bathroom" },
    kitchen: { label: "Kitchen", icon: "icon-kitchen" },
    TV: { label: "TV", icon: "icon-tv" },
    radio: { label: "Radio", icon: "icon-radio" },
    refrigerator: { label: "Refrigerator", icon: "icon-refrigerator" },
    microwave: { label: "Microwave", icon: "icon-microwave" },
    gas: { label: "Gas", icon: "icon-gas" },
    water: { label: "Water", icon: "icon-water" },
  };

  const filteredFeatures = Object.entries(featureMapping).filter(
    ([key]) => truck[key] === true || typeof truck[key] === "string"
  );

  return (
    <div className={css.truck}>
      <img
        className={css.truckImg}
        src={truck.gallery[0]?.thumb}
        alt={truck.name}
      />
      <div className={css.truckInfo}>
        <div className={css.truckTitle}>
          <div className={css.truckTitle1}>
            <h2>{truck.name}</h2>
            <p>€{truck.price.toFixed(2)}</p>
            <button
              onClick={handleFavoriteClick}
              className={css.favoriteButton}
            >
              {isFavorite ? "💖" : "🤍"}
            </button>
          </div>
          <div className={css.truckTitle2}>
            <p>{truck.rating} ⭐</p>
            <p>{truck.location}</p>
          </div>
        </div>
        <div className={css.truckText}>
          <p>{truck.description}</p>
        </div>
        <div className={css.truckFilter}>
          {filteredFeatures.map(([key, { label, icon }]) => (
            <span key={key} className={css.feature}>
              <svg
                className={css.featureIcon}
                width="20"
                height="20"
                fill="transparent"
                stroke="#101828"
              >
                <use href={`${sprite}#${icon}`} />
              </svg>
              {label}
            </span>
          ))}
        </div>
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
    rating: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    transmission: PropTypes.string,
    engine: PropTypes.string,
    kitchen: PropTypes.bool,
    AC: PropTypes.bool,
    water: PropTypes.bool,
    gallery: PropTypes.arrayOf(
      PropTypes.shape({
        thumb: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
