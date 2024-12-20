import { Link } from "react-router-dom";
import icons from "../../img/icons.svg";
import css from "./CamperCard.module.css";
import EquipmentItem from "../EquipmentItem/EquipmentItem";
import RatingAndLocation from "../RatingAndLocation/RatingAndLocation";

const CamperCard = ({ camperData, handleSetFavorite, favoriteCampers }) => {
  const {
    gallery,
    name,
    price,
    id,
    rating,
    reviews,
    location,
    description,
    transmission,
    engine,
    AC,
    kitchen,
    TV,
    bathroom,
  } = camperData;
  const isFavorite = favoriteCampers.includes(id);
  return (
    <>
      <img className={css.image} src={gallery[0].thumb} alt="Truck photo" />
      <div className={css.mainInfo}>
        <div className={css.header}>
          <h3 className={css.name}>{name}</h3>
          <div className={css.groupPriceAndFavorite}>
            <h3 className={css.price}>€{price}.00</h3>
            <button
              className={css.favoriteButton}
              onClick={() => {
                handleSetFavorite(id);
              }}
            >
              <svg
                className={isFavorite ? css.isFavorite : ""}
                width={26}
                height={24}
              >
                <use href={`${icons}#icon-favorite`}></use>
              </svg>
            </button>
          </div>
        </div>
        <RatingAndLocation
          rating={rating}
          reviews={reviews}
          location={location}
        />
        <p className={css.description}>{description}</p>
        <ul className={css.equipment}>
          <EquipmentItem str={transmission} />
          <EquipmentItem str={engine} />
          {AC && <EquipmentItem str={"AC"} />}
          {kitchen && <EquipmentItem str={"kitchen"} />}
          {TV && <EquipmentItem str={"TV"} />}
          {bathroom && <EquipmentItem str={"bathroom"} />}
        </ul>
        <Link className="button" to={`/catalog/${id}`}>
          Show more
        </Link>
      </div>
    </>
  );
};

export default CamperCard;
