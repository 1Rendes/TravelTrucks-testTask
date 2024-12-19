import css from "./FilterComponent.module.css";
import icons from "../../img/icons.svg";
import { makeFirstLetterToUpperCase } from "../../helpers/makeFirstLetterToUpperCase";

const FilterComponent = ({ filterValue, type, inputName, defaultValue }) => {
  return (
    <>
      <input
        className={css.acCheckbox}
        type={type}
        id={filterValue}
        value={filterValue}
        defaultChecked={defaultValue}
        name={inputName}
      ></input>
      <label className={css.acLabel} htmlFor={filterValue}>
        <svg width={32} height={32}>
          <use href={`${icons}#icon-${filterValue.toLowerCase()}`}></use>
        </svg>
        <p className={css.labelText}>
          {makeFirstLetterToUpperCase(filterValue)}
        </p>
      </label>
    </>
  );
};

export default FilterComponent;
