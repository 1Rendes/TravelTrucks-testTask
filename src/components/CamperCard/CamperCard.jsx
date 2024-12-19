import { Link } from "react-router-dom";
import icons from "../../img/icons.svg";
import css from "./CamperCard.module.css";
import EquipmentItem from "../EquipmentItem/EquipmentItem";

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
        <div className={css.groupRatingAndLocation}>
          <div className={css.groupRating}>
            <svg width={16} height={16} fill="#ffc531">
              <use href={`${icons}#icon-rating`}></use>
            </svg>
            <p
              className={css.rating}
            >{`${rating}(${reviews.length} reviews) `}</p>
          </div>
          <div className={css.groupLocation}>
            <svg width={16} height={16} fill="#101828">
              <use href={`${icons}#icon-map`}></use>
            </svg>
            <p className={css.rating}>
              {location.split(",").reverse().join(", ")}
            </p>
          </div>
        </div>
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
