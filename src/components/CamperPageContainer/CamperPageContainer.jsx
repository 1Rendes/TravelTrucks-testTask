import css from "./CamperPageContainer.module.css";

const CamperPageContainer = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default CamperPageContainer;
