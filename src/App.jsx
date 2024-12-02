import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./components/Layout/Layout.jsx";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/Loader/Loader.jsx";
import { ToastContainer } from "react-toastify";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage.jsx"));
const CamperDetailsPage = lazy(() => import("./pages/CamperDetailsPage.jsx"));

export default function App() {
  return (
    <Router>
      <ToastContainer />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CamperDetailsPage />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
