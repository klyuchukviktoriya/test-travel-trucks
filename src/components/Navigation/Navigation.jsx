import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import logo from "../../assets/logo-trucks.png";
export default function Navigation() {
  const classLink = ({ isActive }) => clsx(css.link, isActive && css.active);

  return (
    <div className={css.header}>
      <img className={css.logo} src={logo} />
      <nav className={css.linkwrapper}>
        <NavLink className={classLink} to="/">
          Home
        </NavLink>
        <NavLink className={classLink} to="/catalog">
          Catalog
        </NavLink>
      </nav>
    </div>
  );
}
