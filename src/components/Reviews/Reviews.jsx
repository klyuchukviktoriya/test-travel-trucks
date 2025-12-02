import css from "./Reviews.module.css";
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
          fill={i <= clampedRating ? "#e78646" : "#f4ede4"}
          className={css.star}
        >
          <use href={`${sprite}#icon-star`} />
        </svg>
      );
    }
    return stars;
  };

  if (!Array.isArray(reviews) || reviews.length === 0) {
    return <p className={css.reviews}>No reviews available for this camper.</p>;
  }

  return (
    <div className={css.reviews}>
      {reviews.map((review, index) => (
        <div key={index} className={css.reviewCard}>
          <div className={css.reviewHeader}>
            <div className={css.avatar}>
              <span className={css.avatarLetter}>
                {review.reviewer_name[0].toUpperCase()}
              </span>
            </div>

            <div className={css.reviewContent}>
              <h3 className={css.author}>{review.reviewer_name}</h3>
              <div className={css.stars}>
                {renderStars(review.reviewer_rating)}
              </div>
            </div>
          </div>

          <p className={css.comment}>{review.comment}</p>
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
