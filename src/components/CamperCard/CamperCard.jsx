import { Link } from "react-router-dom";
import icons from "../../img/icons.svg";
import css from "./CamperCard.module.css";

const CamperCard = ({ camperData }) => {
  const { gallery, name, price, id } = camperData;
  return (
    <>
      <img className={css.image} src={gallery[0].thumb} alt="Truck photo" />
      <div>
        <div className={css.header}>
          <h3>{name}</h3>
          <h3>{price}</h3>
          <svg width={26} height={24}>
            <use href={`${icons}#icon-favorite`}></use>
          </svg>
        </div>
        <Link className="button" to={`/catalog/${id}`}>
          Show more
        </Link>
      </div>
    </>
  );
};

export default CamperCard;
