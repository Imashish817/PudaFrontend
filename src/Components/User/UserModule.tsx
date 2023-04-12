import { Route, Routes } from "react-router-dom";
import React from "react";
const Login = React.lazy(() =>
  import("../../Pages/Login.tsx").then(({ Login }) => ({
    default: Login,
  }))
);
const Logout = React.lazy(() =>
  import("./Logout.tsx").then(({ Logout }) => ({
    default: Logout,
  }))
);
const RegisterModule = React.lazy(() =>
  import("./Register/RegisterModule.tsx").then(({ RegisterModule }) => ({
    default: RegisterModule,
  }))
);
const ResourceError = React.lazy(() =>
  import("../../Pages/ResourceError.tsx").then(({ ResourceError }) => ({
    default: ResourceError,
  }))
);

export function User() {
  return (
    <div
      style={{
        width: "100%",
        height: "90%",
      }}
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register/*" element={<RegisterModule />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<ResourceError errorCode={404} />} />
      </Routes>
    </div>
  );
}
