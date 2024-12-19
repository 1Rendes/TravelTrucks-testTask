import { useDispatch, useSelector } from "react-redux";
import CamperCard from "../CamperCard/CamperCard";
import {
  selectCampers,
  selectFavoriteCampers,
  selectIsLoading,
  selectNumberOfCampers,
} from "../../redux/campers/selectors";
import css from "./CampersList.module.css";
import { setFavoriteCampers } from "../../redux/campers/slice";
import LoadMore from "../LoadMore/LoadMore";
import Loader from "../Loader/Loader";

const CampersList = ({ handleLoadMore }) => {
  const campers = useSelector(selectCampers);
  const favoriteCampers = useSelector(selectFavoriteCampers);
  const totalCampers = useSelector(selectNumberOfCampers);
  const loading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const handleSetFavorite = (id) => {
    dispatch(setFavoriteCampers(id));
  };

  const renderLoadMore = campers.length < totalCampers;
  return (
    campers && (
      <div className={css.groupCamperListAndLoadMore}>
        <ul className={css.campersList}>
          {campers.map((camper) => (
            <li key={camper.id} className={css.listItem}>
              <CamperCard
                camperData={camper}
                favoriteCampers={favoriteCampers}
                handleSetFavorite={handleSetFavorite}
              />
            </li>
          ))}
        </ul>
        {loading && <Loader />}
        {renderLoadMore && !loading && (
          <LoadMore handleLoadMore={handleLoadMore} />
        )}
      </div>
    )
  );
};

export default CampersList;
