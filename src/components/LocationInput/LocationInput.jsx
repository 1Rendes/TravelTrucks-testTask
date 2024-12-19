import css from "./LocationInput.module.css";
import icons from "../../img/icons.svg";

const LocationInput = ({ state }) => {
  return (
    <div className={css.groupLocationFilter}>
      <span className={css.location}>Location</span>
      <div className={css.groupInput}>
        <input
          className={css.input}
          defaultValue={state}
          type="text"
          placeholder="City"
        />
        <svg className={css.locationIcon}>
          <use href={`${icons}#icon-map`}></use>
        </svg>
      </div>
    </div>
  );
};

export default LocationInput;
