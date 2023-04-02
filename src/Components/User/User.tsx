import { Route, Routes } from "react-router-dom";
import { Login } from "../../Pages/Login.tsx";
import NotFound from "../../Pages/NotFound.tsx";
import Logout from "./Logout.tsx";

export default function User() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
