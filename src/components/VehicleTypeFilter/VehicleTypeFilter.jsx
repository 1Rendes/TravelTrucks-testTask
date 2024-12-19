import FilterComponent from "../FilterComponent/FilterComponent";
import css from "../VehicleEquipmentFilter/VehicleEquipmentFilter.module.css";

const VehicleTypeFilter = ({ inputName, type, filtersDefaultValue }) => {
  const filterData = [
    { key: "panelTruck", defaultValue: filtersDefaultValue.panelTruck },
    { key: "integrated", defaultValue: filtersDefaultValue.integrated },
    { key: "alcove", defaultValue: filtersDefaultValue.alcove },
  ];

  return (
    <div>
      <h3 className={css.filterName}>Vehicle type</h3>
      <div className={css.groupFilter}>
        {filterData.map(({ key, defaultValue }) => (
          <FilterComponent
            key={key}
            filterValue={key}
            type={type}
            inputName={inputName}
            defaultValue={defaultValue}
          />
        ))}
      </div>
    </div>
  );
};

export default VehicleTypeFilter;
