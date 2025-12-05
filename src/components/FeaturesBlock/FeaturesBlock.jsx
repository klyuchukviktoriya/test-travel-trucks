import Features from "../Features/Features.jsx";
import css from "./FeaturesBlock.module.scss";
import { useSelector } from "react-redux";
import { selectCamperDetails } from "../../redux/campers/selectors.js";

export default function FeaturesBlock() {
  const truck = useSelector(selectCamperDetails);
  return (
    <div className={css.featuresBlock}>
      <Features truck={truck} />
      <div className={css.featuresBlock__vehicle}>
        <h3>Vehicle details</h3>
        {/* <div className={css.featuresBlock__vehicle_info}>
          <div>
            <p>Form</p>
            <p>{truck.form}</p>
          </div>
          <div>
            <p>Length</p>
            <p>{truck.length}</p>
          </div>
          <div>
            <p>Width</p>
            <p>{truck.width}</p>
          </div>
          <div>
            <p>Height</p>
            <p>{truck.height}</p>
          </div>
          <div>
            <p>Tank</p>
            <p>{truck.tank}</p>
          </div>
          <div>
            <p>Consumption</p>
            <p>{truck.consumption}</p>
          </div>
        </div> */}
        <table className={css.featuresBlock__vehicle_info}>
          <tbody>
            <tr>
              <td>Form</td>
              <td>{truck.form}</td>
            </tr>
            <tr>
              <td>Length</td>
              <td>{truck.length}</td>
            </tr>
            <tr>
              <td>Width</td>
              <td>{truck.width}</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>{truck.height}</td>
            </tr>
            <tr>
              <td>Tank</td>
              <td>{truck.tank}</td>
            </tr>
            <tr>
              <td>Consumption</td>
              <td>{truck.consumption}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
