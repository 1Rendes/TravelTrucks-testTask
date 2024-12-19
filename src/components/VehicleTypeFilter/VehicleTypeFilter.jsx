import FilterComponent from "../FilterComponent/FilterComponent";
import css from "../VehicleEquipmentFilter/VehicleEquipmentFilter.module.css";

const VehicleTypeFilter = ({ inputName, type, filtersDefaultValue }) => {
  const { panelTruck, integrated, alcove } = filtersDefaultValue;
  return (
    <div>
      <h3 className={css.filterName}>Vehicle type</h3>
      <div className={css.groupFilter}>
        <FilterComponent
          filterValue="panelTruck"
          type={type}
          inputName={inputName}
          defaultValue={panelTruck}
        />
        <FilterComponent
          filterValue="integrated"
          type={type}
          inputName={inputName}
          defaultValue={integrated}
        />
        <FilterComponent
          filterValue="alcove"
          type={type}
          inputName={inputName}
          defaultValue={alcove}
        />
      </div>
    </div>
  );
};

export default VehicleTypeFilter;
