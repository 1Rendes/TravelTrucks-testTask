import { useSelector } from "react-redux";
import { selectChoosenCamper } from "../../redux/campers/selectors";
import Comment from "../Comment/Comment";
import css from "./Reviews.module.css";

const Reviews = () => {
  const { reviews } = useSelector(selectChoosenCamper);
  console.log(reviews);

  return (
    <div className={css.reviews}>
      <ul className={css.listOfComments}>
        {reviews.map((review, index) => (
          <li key={index} className={css.comment}>
            <Comment review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
