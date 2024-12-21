import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.centredWrapper}>
      <img
        width={200}
        height={200}
        src="/src/img/soitev_karavan.gif"
        alt="Loading..."
      />
    </div>
  );
};

export default Loader;
