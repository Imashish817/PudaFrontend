import { Route, Routes } from "react-router-dom";
import { ADMIN } from "../Constants/Constant";
import ValidateFile from "../Components/Admin/ValidateFile";
import Dashboard from "./Dashboard";
import Verification from "../Components/Admin/Verification";
import Appointment from "../Components/Admin/Appointment";

export function Admin() {
  const options = [
    {
      head: "Initiate verification",
      description: "You can create new file with required applications",
      link: ADMIN.INDEX + ADMIN.VERIFICATION,
      img: "bi-plus-circle-fill",
      disabled: false,
    },
    {
      head: "Validate file",
      description:
        "You can issue complaints which will be sent to operations team",
      link: ADMIN.INDEX + ADMIN.VALIDATE_FILE,
      img: "bi-file-earmark-arrow-up-fill",
      disabled: false,
    },
    {
      head: "Book Appointment",
      description:
        "You can view your uploaded file and check its current status",
      link: ADMIN.INDEX + ADMIN.APPOINTMENT,
      img: "bi-eye-fill",
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
        <Route path={ADMIN.VALIDATE_FILE} element={<ValidateFile />}></Route>
        <Route path={ADMIN.VERIFICATION} element={<Verification />}></Route>
        <Route path={ADMIN.APPOINTMENT} element={<Appointment />}></Route>
      </Routes>
    </div>
  );
}
