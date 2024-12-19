import FilterComponent from "../FilterComponent/FilterComponent";
import css from "./VehicleEquipmentFilter.module.css";

const VehicleEquipmentFilter = ({ filtersDefaultValue, type, inputName }) => {
  const filterData = [
    { key: "AC", defaultValue: filtersDefaultValue.AC },
    { key: "automatic", defaultValue: filtersDefaultValue.transmission },
    { key: "kitchen", defaultValue: filtersDefaultValue.kitchen },
    { key: "TV", defaultValue: filtersDefaultValue.TV },
    { key: "bathroom", defaultValue: filtersDefaultValue.bathroom },
  ];

  return (
    <div>
      <p className={css.filters}>Filters</p>
      <h3 className={css.filterName}>Vehicle equipment</h3>
      <div className={css.groupFilter}>
        {filterData.map(({ key, defaultValue }) => (
          <FilterComponent
            key={key}
            inputName={inputName}
            filterValue={key}
            type={type}
            defaultValue={defaultValue}
          />
        ))}
      </div>
    </div>
  );
};

export default VehicleEquipmentFilter;
