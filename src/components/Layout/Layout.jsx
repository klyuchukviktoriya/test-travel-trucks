import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Navigation from "../Navigation/Navigation.jsx";

export default function Layout() {
  return (
    <>
      <Navigation />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}
