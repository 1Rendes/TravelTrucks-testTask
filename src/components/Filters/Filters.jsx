import { useDispatch, useSelector } from "react-redux";
import LocationInput from "../LocationInput/LocationInput";
import VehicleEquipmentFilter from "../VehicleEquipmentFilter/VehicleEquipmentFilter";
import VehicleTypeFilter from "../VehicleTypeFilter/VehicleTypeFilter";
import { setFilters } from "../../redux/filters/slice";
import { selectFilters } from "../../redux/filters/selectors";

const Filters = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formElements = e.target.elements;
    const formData = {};
    if (formElements[0].value) formData.location = formElements[0].value;
    if (formElements.AC.checked) formData.AC = true;
    if (formElements.automatic.checked) formData.transmission = "automatic";
    if (formElements.kitchen.checked) formData.kitchen = true;
    if (formElements.TV.checked) formData.TV = true;
    if (formElements.bathroom.checked) formData.bathroom = true;
    if (formElements.VehicleTypeFilter.value)
      formData.form = formElements.VehicleTypeFilter.value;
    dispatch(setFilters(formData));
  };
  const filters = useSelector(selectFilters);
  const defaultVehicleTypeFilterState = {
    panelTruck: false,
    integrated: false,
    alcove: false,
  };
  defaultVehicleTypeFilterState[filters.form] = true;
  return (
    <form onSubmit={handleSubmit}>
      <LocationInput state={filters.location} />
      <VehicleEquipmentFilter
        inputName={"equipmentFilter"}
        type={"checkbox"}
        filtersDefaultValue={filters}
      />
      <VehicleTypeFilter
        inputName={"VehicleTypeFilter"}
        type={"radio"}
        filtersDefaultValue={defaultVehicleTypeFilterState}
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
};

export default Filters;
