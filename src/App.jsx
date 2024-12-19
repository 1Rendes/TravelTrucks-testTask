import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.jsx";
import { lazy } from "react";
import "./styles/common.css";
import { Toaster } from "react-hot-toast";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage.jsx"));
const CamperPage = lazy(() => import("./pages/CamperPage.jsx"));

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/catalog" element={<CatalogPage />}></Route>
          <Route path="/catalog/:id" element={<CamperPage />}></Route>
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
