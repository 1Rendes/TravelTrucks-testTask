import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCampers } from "../redux/campers/operations";
import Container from "../components/Container/Container";
import Filters from "../components/Filters/Filters";
import CampersList from "../components/CampersList/CampersList";
import { selectFilters } from "../redux/filters/selectors";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  useEffect(() => {
    dispatch(getAllCampers(filters));
  }, [dispatch, filters]);

  return (
    <Container>
      <Filters />
      <CampersList />
    </Container>
  );
};

export default CatalogPage;
