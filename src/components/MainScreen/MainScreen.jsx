import { NavLink } from "react-router-dom";
import css from "./MainScreen.module.css";

export default function MainScreen() {
  return (
    <div className={css.mainScreen}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <h2 className={css.titleText}>
        You can find everything you want in our catalog
      </h2>
      <NavLink to="/catalog">
        {" "}
        <button className={css.titleButton}>View Now</button>
      </NavLink>
    </div>
  );
}
