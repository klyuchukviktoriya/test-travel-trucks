import PropTypes from "prop-types";
import css from "./Truck.module.scss";
import sprite from "../../assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/campers/selectors.js";
import { toggleFavorite } from "../../redux/campers/slice.js";
import { NavLink } from "react-router-dom";
import Features from "../Features/Features.jsx";
import RaitingLocation from "../RaitingLocation/RaitingLocation.jsx";
import { truckPropTypes } from "../../constants/propTypes.js";
import Button from "../../common/Button/Button.jsx";

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
      <div className={css.truck__img}>
        <img src={galleryImage} alt={truck.name} />
      </div>

      <div className={css.truck__info}>
        <div className={css.truck__head}>
          <div className={css.truck__headUp}>
            <h2 className={css.truck__title}>{truck.name}</h2>
            <div className={css.truck__titleRight}>
              <p className={css.truck__price}>€{truck.price.toFixed(2)}</p>

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
          <div className={css.truck__headDown}>
            <RaitingLocation truck={truck} />
          </div>
        </div>
        <p className={css.truck__description}>{truck.description}</p>
        <Features truck={truck} />

        <NavLink to={`/catalog/${truck.id}`}>
          <Button className={css.truck__btn}>Show more</Button>
        </NavLink>
      </div>
    </div>
  );
}

Truck.propTypes = {
  truck: PropTypes.shape(truckPropTypes).isRequired,
};
