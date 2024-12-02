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
import css from "./CatalogPage.module.css";
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
    <div className={css.catalog}>
      <Filter onApplyFilters={handleApplyFilters} />
      {loading ? (
        <Loader />
      ) : error ? (
        <p>Error loading campers: {error}</p>
      ) : (
        <TruckList trucks={campers} />
      )}
    </div>
  );
}
