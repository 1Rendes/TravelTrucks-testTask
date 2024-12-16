import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import CamperPage from "./pages/CamperPage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/campers" element={<CatalogPage />}></Route>
        <Route path="/campers/:id" element={<CamperPage />}></Route>
      </Routes>
    </Layout>
  );
};

export default App;
