import { NavLink } from "react-router-dom";
import css from "./MainScreen.module.css";
import bgHome from "/src/assets/bg-home.jpg";


export default function MainScreen() {

const styles = {
  mainScreen: {
    backgroundImage: `url(${bgHome})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "260px 64px",
    color: "#f7f7f7",
  },
};
  return (
    <div style={styles.mainScreen}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <h2 className={css.titleText}>
        You can find everything you want in our catalog
      </h2>
      <NavLink to="/catalog">
        <button className={css.titleButton}>View Now</button>
      </NavLink>
    </div>
  );
}
