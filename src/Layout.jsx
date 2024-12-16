import { Suspense } from "react";
import Navigation from "./components/Navigation/Navigation";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
