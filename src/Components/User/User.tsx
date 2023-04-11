import { Route, Routes } from "react-router-dom";
import { Login } from "../../Pages/Login.tsx";
import Logout from "./Logout.tsx";
import { Register } from "../../Pages/Register.tsx";
import ResourceError from "../../Pages/ResourceError.tsx";

export default function User() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#dcdcdc00",
      }}
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<ResourceError errorCode={404} />} />
      </Routes>
    </div>
  );
}
