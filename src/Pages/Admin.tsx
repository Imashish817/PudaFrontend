import { Route, Routes } from "react-router-dom";
import Dashboard from "../Components/Admin/Dashboard";

export default function Admin() {
  return (
    <div
      style={{
        width: "100%",
        height: "90%",
        background: "#3e7651",
        color: "white",
      }}
    >
      <Routes>
        <Route index element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}
