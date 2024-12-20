import { useSelector } from "react-redux";
import { selectChoosenCamper } from "../../redux/campers/selectors";
import css from "./CamperDetails.module.css";
import RatingAndLocation from "../RatingAndLocation/RatingAndLocation";

const CamperDetails = () => {
  const { name, price, rating, location, description, gallery, reviews } =
    useSelector(selectChoosenCamper);

  return (
    <div className={css.camperDetails}>
      <h2 className={css.name}>{name}</h2>
      <RatingAndLocation
        rating={rating}
        reviews={reviews}
        location={location}
      />
      <h2 className={css.price}>€{price}.00</h2>
      <ul className={css.images}>
        {gallery.map((photo) => (
          <li key={photo.thumb}>
            <img src={photo.thumb} alt="camper photo" className={css.image} />
          </li>
        ))}
      </ul>
      <p className={css.description}>{description}</p>
    </div>
  );
};

export default CamperDetails;
