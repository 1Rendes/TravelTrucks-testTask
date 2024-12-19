import css from "./LoadMore.module.css";

const LoadMore = ({ handleLoadMore }) => {
  return (
    <button onClick={handleLoadMore} className={css.loadMore}>
      Load more
    </button>
  );
};

export default LoadMore;
