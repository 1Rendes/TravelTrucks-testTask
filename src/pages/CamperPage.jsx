import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCamperById } from "../redux/campers/operations";
import CamperDetails from "../components/CamperDetails/CamperDetails";
import { selectLoaded } from "../redux/campers/selectors";
import Loader from "../components/Loader/Loader";
import CamperPageContainer from "../components/CamperPageContainer/CamperPageContainer";
import AdditionalInfoAndBooking from "../components/AdditionalInfoAndBooking/AdditionalInfoAndBooking";

const CamperPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loaded = useSelector(selectLoaded);

  useEffect(() => {
    dispatch(getCamperById(id));
  }, []);

  return (
    <CamperPageContainer>
      {loaded ? (
        <>
          <CamperDetails />
          <AdditionalInfoAndBooking />
        </>
      ) : (
        <Loader />
      )}
    </CamperPageContainer>
  );
};

export default CamperPage;
