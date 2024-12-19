import FilterComponent from "../FilterComponent/FilterComponent";
import css from "./VehicleEquipmentFilter.module.css";

const VehicleEquipmentFilter = () => {
  return (
    <div>
      <p className={css.filters}>Filters</p>
      <h3 className={css.filterName}>Vehicle equipment</h3>
      <div className={css.groupFilter}>
        <FilterComponent
          inputName={"equipmentFilter"}
          filterName={"AC"}
          type={"checkbox"}
        />
        <FilterComponent
          inputName={"equipmentFilter"}
          filterName={"automatic"}
          type={"checkbox"}
        />
        <FilterComponent
          inputName={"equipmentFilter"}
          filterName={"kitchen"}
          type={"checkbox"}
        />
        <FilterComponent
          inputName={"equipmentFilter"}
          filterName={"TV"}
          type={"checkbox"}
        />
        <FilterComponent
          inputName={"equipmentFilter"}
          filterName={"bathroom"}
          type={"checkbox"}
        />
      </div>
    </div>
  );
};

export default VehicleEquipmentFilter;
