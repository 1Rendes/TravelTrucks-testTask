import { NavLink } from "react-router-dom";
import css from "./MobileMenu.module.css";
import { useEffect } from "react";
import icons from "../../img/icons.svg";
import clsx from "clsx";

const MobileMenu = ({ handleCloseMenu }) => {
  useEffect(() => {
    const disableScroll = (e) => e.preventDefault();

    document.body.style.overflowY = "hidden";
    document.addEventListener("touchmove", disableScroll, { passive: false });

    return () => {
      document.body.style.overflowY = "scroll";
      document.removeEventListener("touchmove", disableScroll);
    };
  }, []);
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.menuButton, isActive && css.isActive);
  };

  return (
    <div className={css.backdrop} onClick={handleCloseMenu} id="backdrop">
      <div className={css.menu}>
        <button
          type="button"
          onClick={handleCloseMenu}
          className={css.closeIcon}
          id="closeButton"
        >
          <svg width={20} height={20} id="closeIcon">
            <use id="closeUse" href={`${icons}#icon-close`}></use>
          </svg>
        </button>

        <NavLink
          onClick={handleCloseMenu}
          id="homepage"
          className={buildLinkClass}
          to="/"
        >
          HomePage
        </NavLink>
        <NavLink
          onClick={handleCloseMenu}
          id="catalog"
          className={buildLinkClass}
          to="/catalog"
          end
        >
          Catalog
        </NavLink>
      </div>
    </div>
  );
};

export default MobileMenu;
