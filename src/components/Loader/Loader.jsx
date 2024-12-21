import css from "./Loader.module.css";
import loader from "../../img/soitev_karavan.gif";

const Loader = () => {
  return (
    <div className={css.centredWrapper}>
      <img width={200} height={200} src={loader} alt="Loading..." />
    </div>
  );
};

export default Loader;
