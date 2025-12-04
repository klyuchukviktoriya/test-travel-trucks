import { NavLink } from "react-router-dom";
import css from "./MainScreen.module.scss";

export default function MainScreen() {
  return (
    <section className={css.main}>
      <div className={css.container}>
        <div>
          <h1>Campers of your dreams</h1>
          <p>You can find everything you want in our catalog</p>
        </div>
        <NavLink to="/catalog" className={css.main__btn}>
          View now
        </NavLink>
      </div>
    </section>
  );
}
