import { useDispatch, useSelector } from "react-redux";
import CamperCard from "../CamperCard/CamperCard";
import {
  selectCampers,
  selectFavoriteCampers,
} from "../../redux/campers/selectors";
import css from "./CampersList.module.css";
import { setFavoriteCampers } from "../../redux/campers/slice";

const CampersList = () => {
  const campers = useSelector(selectCampers);
  const favoriteCampers = useSelector(selectFavoriteCampers);
  const dispatch = useDispatch();
  const handleSetFavorite = (id) => {
    dispatch(setFavoriteCampers(id));
  };
  return (
    campers && (
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
    )
  );
};

export default CampersList;
