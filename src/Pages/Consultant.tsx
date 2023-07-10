import { Route, Routes } from "react-router-dom";
import { CONSULTANT } from "../Constants/Constant";
import Dashboard from "./Dashboard";
import CheckFiles from "../Components/Consultant/CheckFiles";

export function Consultant() {
  const options = [
    {
      head: "Check files",
      description: "You can create new file with required applications",
      link: CONSULTANT.INDEX + CONSULTANT.CHECK_FILES,
      img: "bi-plus-circle-fill",
      disabled: false,
    },
  ];
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(to right, #3c1053, #ad5389)",
        color: "white",
        overflow: "auto",
      }}
    >
      <Routes>
        <Route index element={<Dashboard options={options} />}></Route>
        <Route path={CONSULTANT.CHECK_FILES} element={<CheckFiles />}></Route>
      </Routes>
    </div>
  );
}
