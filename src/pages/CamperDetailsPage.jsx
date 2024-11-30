import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperDetails } from "../redux/campers/operations.js";
import { selectCamperDetails } from "../redux/campers/selectors.js";

export default function CamperDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCamperDetails);

  useEffect(() => {
    dispatch(fetchCamperDetails(id));
  }, [dispatch, id]);

  if (!camper) return <div>Loading...</div>;

  return (
    <div>
      <h2>{camper.name}</h2>
      <p>{camper.rating}</p>
      <p>{camper.location}</p>
      <p>Price: €{camper.price.toFixed(2)}</p>
      <img src={camper.gallery[0]?.thumb} alt={camper.name} />
      <img src={camper.gallery[1]?.thumb} alt={camper.name} />
      <img src={camper.gallery[2]?.thumb} alt={camper.name} />
      <p>{camper.description}</p>
    </div>
  );
}
