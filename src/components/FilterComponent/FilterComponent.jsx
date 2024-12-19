import css from "./FilterComponent.module.css";
import icons from "../../img/icons.svg";
import { makeFirstLetterToUpperCase } from "../../helpers/makeFirstLetterToUpperCase";

const FilterComponent = ({ filterName, type, inputName }) => {
  return (
    <>
      <input
        className={css.acCheckbox}
        type={type}
        id={filterName}
        value={filterName}
        name={inputName}
      ></input>
      <label className={css.acLabel} htmlFor={filterName}>
        <svg width={32} height={32}>
          <use href={`${icons}#icon-${filterName.toLowerCase()}`}></use>
        </svg>
        <p className={css.labelText}>
          {makeFirstLetterToUpperCase(filterName)}
        </p>
      </label>
    </>
  );
};

export default FilterComponent;
