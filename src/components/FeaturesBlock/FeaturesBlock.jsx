import Features from "../Features/Features.jsx";
import css from "./FeaturesBlock.module.css";
import { useSelector } from "react-redux";
import { selectCamperDetails } from "../../redux/campers/selectors.js";

export default function FeaturesBlock() {
  const truck = useSelector(selectCamperDetails);
  return (
    <div className={css.featuresBlock}>
      <Features truck={truck} />
      <div className={css.vehicle}>
        <h3 className={css.vehicleTitle}>Vehicle details</h3>
        <div className={css.vehicleLine}></div>
        <div className={css.vehicleInfo}>
          <div className={css.vehicleInfoText}>
            <p>Form</p>
            <p>{truck.form}</p>
          </div>
          <div className={css.vehicleInfoText}>
            <p>Length</p>
            <p>{truck.length}</p>
          </div>
          <div className={css.vehicleInfoText}>
            <p>Width</p>
            <p>{truck.width}</p>
          </div>
          <div className={css.vehicleInfoText}>
            <p>Height</p>
            <p>{truck.height}</p>
          </div>
          <div className={css.vehicleInfoText}>
            <p>Tank</p>
            <p>{truck.tank}</p>
          </div>
          <div className={css.vehicleInfoText}>
            <p>Consumption</p>
            <p>{truck.consumption}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
