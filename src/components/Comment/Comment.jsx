import css from "./Comment.module.css";
import icons from "../../img/icons.svg";

const Comment = ({ review }) => {
  const { comment, reviewer_name, reviewer_rating } = review;
  const numberOfStars = 5;

  const stars = Array.from({ length: numberOfStars }, (_, index) => (
    <svg
      key={index}
      width={16}
      height={16}
      fill={index < reviewer_rating ? "var(--yellow)" : "var(--grey-icons)"}
    >
      <use href={`${icons}#icon-rating`}></use>
    </svg>
  ));
  console.log(stars);

  return (
    <div className={css.comment}>
      <div className={css.groupNameAndRating}>
        <p className={css.avatar}>{reviewer_name.split("")[0].toUpperCase()}</p>
        <div>
          <p className={css.name}>{reviewer_name}</p>
          {stars}
        </div>
      </div>
      <p className={css.text}>{comment}</p>
    </div>
  );
};

export default Comment;
