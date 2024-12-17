import { Link, NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import logo from "../../img/icons.svg";

export const Navigation = () => {
  return (
    <div className={css.navigation}>
      <Link to="/">
        <svg className={css.logo} width={136} height={15}>
          <use href={`${logo}#icon-logo`}></use>
        </svg>
      </Link>
      <div className={css.menu}>
        <NavLink className={css.menuButton} to="/">
          HomePage
        </NavLink>
        <NavLink className={css.menuButton} to="/catalog">
          Catalog
        </NavLink>
      </div>
    </div>
  );
};
