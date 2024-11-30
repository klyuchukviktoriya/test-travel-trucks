import PropTypes from "prop-types";
import {
  equipmentIconsTruck,
  equipmentLabelsTruck,
} from "../../constants/filter.jsx";
import css from "./Features.module.css";

export default function Features({ truck }) {
  const fuelFeature =
    truck.engine === "petrol" ? (
      <div className={css.iconLabelContainer}>
        {equipmentIconsTruck.petrol}
        <span className={css.featureLabel}>Petrol</span>
      </div>
    ) : null;

  const features = Object.keys(equipmentLabelsTruck)
    .filter(key => truck[key])
    .map(key => (
      <div key={key} className={css.iconLabelContainer}>
        {equipmentIconsTruck[key]}
        <span className={css.featureLabel}>{equipmentLabelsTruck[key]}</span>
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
  truck: PropTypes.shape({
    engine: PropTypes.string,
    AC: PropTypes.bool,
    kitchen: PropTypes.bool,
    TV: PropTypes.bool,
    bathroom: PropTypes.bool,
    water: PropTypes.bool,
    radio: PropTypes.bool,
    microwave: PropTypes.bool,
    refrigerator: PropTypes.bool,
  }).isRequired,
};
