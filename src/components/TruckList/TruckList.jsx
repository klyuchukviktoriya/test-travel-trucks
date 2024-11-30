import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations.js";
import { selectCampers } from "../../redux/campers/selectors.js";
import Truck from "../Truck/Truck.jsx";
import css from "./TruckList.module.css";

export default function TruckList() {
  const dispatch = useDispatch();
  const trucks = useSelector(selectCampers);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    if (trucks.length === 0) {
      dispatch(fetchCampers());
    }
  }, [dispatch, trucks.length]);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  if (!Array.isArray(trucks) || trucks.length === 0) {
    return <p>No campers found.</p>;
  }

  return (
    <div>
      <div className={css.trucks}>
        {trucks.slice(0, visibleCount).map(truck => (
          <Truck key={truck.id} truck={truck} />
        ))}
      </div>
      {visibleCount < trucks.length && (
        <button onClick={handleLoadMore} className={css.loadMoreButton}>
          Load More
        </button>
      )}
    </div>
  );
}
