import { TailSpin } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.centredWrapper}>
      <TailSpin
        visible={true}
        height="40"
        width="40"
        color="red"
        ariaLabel="tail-spin-loading"
        radius="1"
        strokeWidth="7"
      />
    </div>
  );
};

export default Loader;
