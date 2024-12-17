import { Link } from "react-router-dom";
import css from "./Home.module.css";

const Home = () => {
  return (
    <div className={css.home}>
      <h1 className={css.mainHeader}>Campers of your dreams</h1>
      <h2 className={css.subHeader}>
        You can find everything you want in our catalog
      </h2>
      <Link className="button" to={"/catalog"}>
        View Now
      </Link>
    </div>
  );
};

export default Home;
