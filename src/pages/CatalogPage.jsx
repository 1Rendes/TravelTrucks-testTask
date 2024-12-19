import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCampers } from "../redux/campers/operations";
import Container from "../components/Container/Container";
import Filters from "../components/Filters/Filters";
import CampersList from "../components/CampersList/CampersList";
import { selectFilters } from "../redux/filters/selectors";
import { setCampersToInitial } from "../redux/campers/slice";
import { selectCampers } from "../redux/campers/selectors";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const campers = useSelector(selectCampers);
  const [currentPage, setCurrentPage] = useState(1);

  //useEffect for get new part of data initialy and after page changed
  useEffect(() => {
    const params = { ...filters, limit: 4, page: currentPage };
    dispatch(getAllCampers(params));
  }, [currentPage, dispatch, filters]);

  //useEffect for reset data to initial values after filters apply
  useEffect(() => {
    setCurrentPage(1);
    dispatch(setCampersToInitial());
  }, [dispatch, filters]);

  //useEffect for scroll page after new part of data added
  useEffect(() => {
    if (currentPage === 1) return;
    window.scrollBy({
      top: 500,
      behavior: "smooth",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [campers]);

  const handleLoadMore = () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
  };

  return (
    <Container>
      <Filters />
      <CampersList handleLoadMore={handleLoadMore} />
    </Container>
  );
};

export default CatalogPage;
