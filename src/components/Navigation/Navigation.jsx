import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.scss";
import logo from "../../assets/logo-trucks.png";
export default function Navigation() {
  const classLink = ({ isActive }) =>
    clsx(css.header__link, isActive && css.active);

  return (
    <header className={css.header}>
      <div className={css.header__container}>
        <img className={css.header__logo} src={logo} alt="logo travel trucks" />
        <nav className={css.header__linkwrapper}>
          <NavLink className={classLink} to="/">
            Home
          </NavLink>
          <NavLink className={classLink} to="/catalog">
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
