import PropTypes from "prop-types";
import css from "./Truck.module.css";
import sprite from "../../assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/campers/selectors.js";
import { toggleFavorite } from "../../redux/campers/slice.js";
import { NavLink } from "react-router-dom";
import Features from "../Features/Features.jsx";
import RaitingLocation from "../RaitingLocation/RaitingLocation.jsx";
import { truckPropTypes } from "../../constants/propTypes.js";

export default function Truck({ truck }) {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.includes(truck.id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(truck.id));
  };

  const galleryImage = truck.gallery?.[0]?.thumb;

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
            <RaitingLocation truck={truck} />
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
  truck: PropTypes.shape(truckPropTypes).isRequired,
};
