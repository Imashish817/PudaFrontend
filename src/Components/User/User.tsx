import { Route, Routes } from "react-router-dom";
import { Login } from "./Login.tsx";
import NotFound from "../../Pages/NotFound.tsx";

export default function User() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
