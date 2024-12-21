import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.jsx";
import { lazy } from "react";
import "./styles/common.css";
import { Toaster } from "react-hot-toast";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage.jsx"));
const CamperPage = lazy(() => import("./pages/CamperPage.jsx"));

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
      <Toaster
        toastOptions={{
          error: {
            style: {
              background: "red",
              color: "white",
            },
            iconTheme: {
              primary: "white",
              secondary: "red",
            },
          },
        }}
      />
    </>
  );
};

export default App;
