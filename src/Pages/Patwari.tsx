import { Route, Routes } from "react-router-dom";
import { PATWARI } from "../Constants/Constant";
import Dashboard from "./Dashboard";
import CheckFiles from "../Components/Patwari/CheckFiles";

export function Patwari() {
  const options = [
    {
      head: "Check files",
      description: "You can create new file with required applications",
      link: PATWARI.INDEX + PATWARI.CHECK_FILES,
      img: "bi-plus-circle-fill",
      disabled: false,
    },
  ];
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#3e7651",
        color: "white",
      }}
    >
      <Routes>
        <Route index element={<Dashboard options={options} />}></Route>
        <Route path={PATWARI.CHECK_FILES} element={<CheckFiles />}></Route>
      </Routes>
    </div>
  );
}