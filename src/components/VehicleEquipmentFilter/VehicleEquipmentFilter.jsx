import FilterComponent from "../FilterComponent/FilterComponent";
import css from "./VehicleEquipmentFilter.module.css";

const VehicleEquipmentFilter = ({ filters, type, inputName }) => {
  const { AC, TV, bathroom, transmission, kitchen } = filters;
  return (
    <div>
      <p className={css.filters}>Filters</p>
      <h3 className={css.filterName}>Vehicle equipment</h3>
      <div className={css.groupFilter}>
        <FilterComponent
          defaultValue={AC}
          inputName={inputName}
          filterValue={"AC"}
          type={type}
        />
        <FilterComponent
          inputName={inputName}
          filterValue={"automatic"}
          type={type}
          defaultValue={transmission}
        />
        <FilterComponent
          inputName={inputName}
          filterValue={"kitchen"}
          type={type}
          defaultValue={kitchen}
        />
        <FilterComponent
          inputName={inputName}
          filterValue={"TV"}
          type={type}
          defaultValue={TV}
        />
        <FilterComponent
          defaultValue={bathroom}
          inputName={inputName}
          filterValue={"bathroom"}
          type={type}
        />
      </div>
    </div>
  );
};

export default VehicleEquipmentFilter;
