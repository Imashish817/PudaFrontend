import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import Entitlement from "../../Pages/Entitlement.tsx";
import Dashboard from "./Dashboard.tsx";

const ResourceError = React.lazy(() =>
  import("../../Pages/ResourceError.tsx").then(({ ResourceError }) => ({
    default: ResourceError,
  }))
);

export function DashboardModule() {
  return (
    <div
      style={{
        width: "100%",
        height: "90%",
      }}
    >
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/entitlement" element={<Entitlement />} />
        <Route path="*" element={<ResourceError errorCode={404} />} />
      </Routes>
    </div>
  );
}
