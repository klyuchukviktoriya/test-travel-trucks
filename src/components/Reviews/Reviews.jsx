import css from "./Reviews.module.scss";
import sprite from "../../assets/sprite.svg";
import PropTypes from "prop-types";

export default function Reviews({ reviews }) {
  const renderStars = rating => {
    const clampedRating = Math.min(Math.max(rating, 0), 5);
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          width="16"
          height="16"
          fill={i <= clampedRating ? "#9a3800" : "#e9dbd3"}
          className={css.star}
        >
          <use href={`${sprite}#icon-star`} />
        </svg>
      );
    }
    return stars;
  };

  if (!Array.isArray(reviews) || reviews.length === 0) {
    return <p className={css.review}>No reviews available for this camper.</p>;
  }

  return (
    <div className={css.review}>
      {reviews.map((review, index) => (
        <div key={index} className={css.review__card}>
          <div className={css.review__header}>
            <div className={css.review__avatar}>
              <span className={css.review__avatar_letter}>
                {review.reviewer_name[0].toUpperCase()}
              </span>
            </div>
            <div className={css.review__content}>
              <h3 className={css.review__author}>{review.reviewer_name}</h3>
              <div className={css.review__stars}>
                {renderStars(review.reviewer_rating)}
              </div>
            </div>
          </div>
          <p className={css.review__comment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      reviewer_name: PropTypes.string.isRequired,
      reviewer_rating: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
    })
  ).isRequired,
};
