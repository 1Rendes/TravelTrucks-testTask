import { Link, NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import logo from "../../img/icons.svg";
import clsx from "clsx";

export const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.menuButton, isActive && css.isActive);
  };

  return (
    <div className={css.navigation}>
      <Link to="/">
        <svg className={css.logo} width={136} height={15}>
          <use href={`${logo}#icon-logo`}></use>
        </svg>
      </Link>
      <div className={css.menu}>
        <NavLink className={buildLinkClass} to="/">
          HomePage
        </NavLink>
        <NavLink className={buildLinkClass} to="/catalog">
          Catalog
        </NavLink>
      </div>
    </div>
  );
};
