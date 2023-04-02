import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navigation/Navbar.tsx";

export default function Layout() {
  return (
    <>
      <section
        style={{
          backgroundColor: "#eee",
          height: "100%",
          display: "flex",
          paddingTop: "60px",
        }}
      >
        <Navbar />
        <Outlet />
      </section>
    </>
  );
}
