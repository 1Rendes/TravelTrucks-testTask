import { Suspense } from "react";
import { Navigation } from "../Navigation/Navigation.jsx";
import css from "./Layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={css.layout}>
      <Navigation />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
