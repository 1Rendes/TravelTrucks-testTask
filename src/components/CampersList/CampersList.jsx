import { useSelector } from "react-redux";
import CamperCard from "../CamperCard/CamperCard";
import { selectCampers } from "../../redux/campers/selectors";
import css from "./CampersList.module.css";

const CampersList = () => {
  const campers = useSelector(selectCampers);
  return (
    campers && (
      <ul className={css.campersList}>
        {campers.map((camper) => (
          <li key={camper.id} className={css.listItem}>
            <CamperCard camperData={camper} />
          </li>
        ))}
      </ul>
    )
  );
};

export default CampersList;
