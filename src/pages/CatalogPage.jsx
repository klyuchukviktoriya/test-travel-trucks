import { useSelector, useDispatch } from "react-redux";
import {
  selectCampers,
  selectLoading,
  selectError,
} from "../redux/campers/selectors";
import { selectFilters } from "../redux/filters/selectors.js";
import { fetchCampers } from "../redux/campers/operations.js";
import { setFilters } from "../redux/filters/slice.js";
import Filter from "../components/Filter/Filter.jsx";
import TruckList from "../components/TruckList/TruckList.jsx";
import { useEffect } from "react";
import css from "./CatalogPage.module.scss";
import Loader from "../components/Loader/Loader.jsx";
export default function CatalogPage() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const filters = useSelector(selectFilters);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers(filters));
  }, [dispatch, filters]);

  const handleApplyFilters = filters => {
    dispatch(setFilters(filters));
  };

  return (
    <section className={css.catalog}>
      <div className={css.container}>
        <Filter onApplyFilters={handleApplyFilters} />
        {loading ? (
          <Loader />
        ) : error ? (
          <div className={css.errorContainer}>
            <p className={css.errorMessage}>
              No campers found for your request.
            </p>
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzd3ZXozbmJuN3g4dDBudXVqdmppcjRvcTRob3BoZG0ydnRnazMxYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/g01ZnwAUvutuK8GIQn/giphy.gif"
              alt="No campers found"
              className={css.errorGif}
            />
          </div>
        ) : (
          <TruckList trucks={campers} />
        )}
      </div>
    </section>
  );
}
