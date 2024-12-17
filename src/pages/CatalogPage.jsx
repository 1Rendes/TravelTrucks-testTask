import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCampers } from "../redux/campers/operations";
import Container from "../components/Container/Container";
import Filters from "../components/Filters/Filters";
import CampersList from "../components/CampersList/CampersList";

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);

  return (
    <Container>
      <Filters />
      <CampersList />
    </Container>
  );
};

export default CatalogPage;
