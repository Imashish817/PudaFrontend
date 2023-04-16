import { Route, Routes } from "react-router-dom";
import React from "react";
import { Login } from "../../Pages/Login";
import { Logout } from "./Logout";
import { ResourceError } from "../../Pages/ResourceError";
import { Register } from "../../Pages/Register";

export function User() {
  return (
    <div
      style={{
        height: "90%",
        overflow: "auto",
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
