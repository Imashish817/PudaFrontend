import { Route, Routes } from "react-router-dom";
import { ACCOUNTS } from "../Constants/Constant";
import Dashboard from "./Dashboard";
import CheckFiles from "../Components/Accounts/CheckFiles";

export function Accounts() {
  const options = [
    {
      head: "Check files",
      description: "You can create new file with required applications",
      link: ACCOUNTS.INDEX + ACCOUNTS.CHECK_FILES,
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
      }}
    >
      <Routes>
        <Route index element={<Dashboard options={options} />}></Route>
        <Route path={ACCOUNTS.CHECK_FILES} element={<CheckFiles />}></Route>
      </Routes>
    </div>
  );
}
