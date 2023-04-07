import React from "react";
import { Route } from "react-router-dom";
import Home from "../../Pages/Home";
import UserInputForm from "../../Pages/UserInputForm";
import IsAuthorised from "../Navigation/IsAuthorised";

export default function Dashboard() {
  return (
    <>
      <Route element={<IsAuthorised element={<Home />} />} />
      <Route path="userForm" element={<UserInputForm />} />
    </>
  );
}
