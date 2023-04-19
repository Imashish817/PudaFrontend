import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navigation/Navbar";

export default function Layout() {
  return (
    <>
      <section
        style={{
          height: "100%",
          width: "100%"
        }}
      >
        <Navbar />
        <Outlet />
      </section>
    </>
  );
}