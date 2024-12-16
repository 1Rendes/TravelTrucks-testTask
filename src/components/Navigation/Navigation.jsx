import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <NavLink to="/">HomePage</NavLink>
      <NavLink to="/campers">Catalog</NavLink>
      <NavLink to="/campers/333">Camper</NavLink>
    </>
  );
};
