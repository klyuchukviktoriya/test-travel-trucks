import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperDetails } from "../redux/campers/operations.js";
import css from "../components/Truck/Truck.module.scss";
import { selectCamperDetails } from "../redux/campers/selectors.js";
import DetailsInfo from "../components/DetailsInfo/DetailsInfo.jsx";
import RaitingLocation from "../components/RaitingLocation/RaitingLocation.jsx";
import Loader from "../components/Loader/Loader.jsx";

export default function CamperDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const truck = useSelector(selectCamperDetails);

  useEffect(() => {
    dispatch(fetchCamperDetails(id));
  }, [dispatch, id]);

  if (!truck) {
    return <Loader />;
  }

  return (
    <div className={css.details}>
      <div className={css.details__div}>
        <div className={css.details__head}>
          {/* fsdifbnsdjfvnhaosjfvasbfoasnf vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv*/}

          <div className={css.truckHead}>
            <h2 className={css.truckTitle}>{truck.name}</h2>
            <RaitingLocation truck={truck} highlightReviews={true} />
          </div>
          <p className={css.truckPrice}>€{truck.price.toFixed(2)}</p>
        </div>

        <div className={css.details_gallery}>
          {truck.gallery?.map((image, index) => (
            <img
              key={index}
              className={css.details__img}
              src={image.thumb}
              alt={`${truck.name} ${index + 1}`}
            />
          ))}
        </div>
        <p className={css.details__description}>{truck.description}</p>
      </div>

      <DetailsInfo />
    </div>
  );
}
