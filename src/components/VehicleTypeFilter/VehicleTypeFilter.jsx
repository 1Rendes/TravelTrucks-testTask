import FilterComponent from "../FilterComponent/FilterComponent";
import css from "../VehicleEquipmentFilter/VehicleEquipmentFilter.module.css";

const VehicleTypeFilter = () => {
  return (
    <div>
      <h3 className={css.filterName}>Vehicle type</h3>
      <div className={css.groupFilter}>
        <FilterComponent
          filterName="panelTruck"
          type={"radio"}
          inputName="VehicleTypeFilter"
        />
        <FilterComponent
          filterName="integrated"
          type={"radio"}
          inputName="VehicleTypeFilter"
        />
        <FilterComponent
          filterName="alcove"
          type={"radio"}
          inputName="VehicleTypeFilter"
        />
      </div>
    </div>
  );
};

export default VehicleTypeFilter;
