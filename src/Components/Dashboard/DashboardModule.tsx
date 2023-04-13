import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import { DASHBOARD } from "../../Constants/Constant.ts";

const Application1 = React.lazy(() =>
  import("../../Pages/Application1.tsx").then(({ Application1 }) => ({
    default: Application1,
  }))
);
const Application2 = React.lazy(() =>
  import("../../Pages/Application2.tsx").then(({ Application2 }) => ({
    default: Application2,
  }))
);
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
        <Route index element={<Navigate to={DASHBOARD.APPLICATION1} />} />
        <Route path="/application1" element={<Application1 />} />
        <Route path="/application2" element={<Application2 />} />
        <Route path="*" element={<ResourceError errorCode={404} />} />
      </Routes>
    </div>
  );
}
