import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCampers } from "../redux/campers/operations";

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);
  return <div>CatalogPage</div>;
};

export default CatalogPage;
