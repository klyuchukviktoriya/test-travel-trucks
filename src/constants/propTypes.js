import PropTypes from "prop-types";

export const truckPropTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      reviewer_name: PropTypes.string,
      reviewer_rating: PropTypes.number,
      comment: PropTypes.string,
    })
  ),
  rating: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      thumb: PropTypes.string.isRequired,
    })
  ).isRequired,
  transmission: PropTypes.string,
  form: PropTypes.string,
  engine: PropTypes.string,
  AC: PropTypes.bool,
  kitchen: PropTypes.bool,
  TV: PropTypes.bool,
  bathroom: PropTypes.bool,
  water: PropTypes.bool,
};
