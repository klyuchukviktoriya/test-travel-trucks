import PropTypes from "prop-types";
import {
  equipmentIconsTruck,
  equipmentLabelsTruck,
} from "../../constants/filter.jsx";
import css from "./Features.module.scss";
import { truckPropTypes } from "../../constants/propTypes.js";

export default function Features({ truck }) {
  const fuelFeature =
    truck.engine === "petrol" ? (
      <div className={css.feature__item}>
        {equipmentIconsTruck.petrol}
        <span className={css.feature__item_label}>Petrol</span>
      </div>
    ) : null;

  const features = Object.keys(equipmentLabelsTruck)
    .filter(key => truck[key])
    .map(key => (
      <div key={key} className={css.feature__item}>
        {equipmentIconsTruck[key]}
        <span className={css.feature__item_label}>
          {equipmentLabelsTruck[key]}
        </span>
      </div>
    ));

  return (
    <div className={css.feature}>
      {fuelFeature}
      {features.length > 0 ? features : <p>No features available</p>}
    </div>
  );
}

Features.propTypes = {
  truck: PropTypes.shape(truckPropTypes).isRequired,
};
