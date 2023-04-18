import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import Entitlement from "../../Pages/Entitlement.tsx";
import Dashboard from "../../Pages/Dashboard.tsx";
import Files from "../../Pages/Files.tsx";
import Complaints from "../../Pages/Complaints.tsx";

const ResourceError = React.lazy(() =>
  import("../../Pages/ResourceError.tsx").then(({ ResourceError }) => ({
    default: ResourceError,
  }))
);

export function DashboardModule() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/entitlement" element={<Entitlement />} />
      <Route path="/complaint" element={<Complaints />} />
      <Route path="/files" element={<Files />} />
      <Route path="*" element={<ResourceError errorCode={404} />} />
    </Routes>
  );
}
