import { Link, NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import icons from "../../img/icons.svg";
import clsx from "clsx";
import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";

export const Navigation = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.menuButton, isActive && css.isActive);
  };
  const handleMenuClick = () => {
    setMenuIsOpen(true);
  };

  const closeIds = [
    "backdrop",
    "closeIcon",
    "closeButton",
    "closeUse",
    "homepage",
    "catalog",
  ];
  const handleCloseMenu = (e) => {
    console.log(e.target.id);

    if (closeIds.some((id) => e.target.id.includes(id))) {
      setMenuIsOpen(false);
    }
    return;
  };
  return (
    <div className={css.navigationLayout}>
      <div className={css.navigation}>
        <Link to="/">
          <svg className={css.logo} width={136} height={15}>
            <use href={`${icons}#icon-logo`}></use>
          </svg>
        </Link>
        <div className={css.menu}>
          <NavLink className={buildLinkClass} to="/">
            HomePage
          </NavLink>
          <NavLink className={buildLinkClass} to="/catalog" end>
            Catalog
          </NavLink>
        </div>
        <button
          type="button"
          onClick={handleMenuClick}
          className={css.mobileMenuButton}
        >
          <svg width={25} height={25}>
            <use href={`${icons}#icon-menu`}></use>
          </svg>
        </button>
        {menuIsOpen && <MobileMenu handleCloseMenu={handleCloseMenu} />}
      </div>
    </div>
  );
};
