import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import Entitlement from "../../Pages/Entitlement.tsx";
import Dashboard from "../../Pages/Dashboard.tsx";
import Files from "../../Pages/Files.tsx";
import Complaints from "../../Pages/Complaints.tsx";
import { DASHBOARD } from "../../Constants/Constant.ts";
import { MyContext } from "../../Storage/Storage.tsx";

const ResourceError = React.lazy(() =>
  import("../../Pages/ResourceError.tsx").then(({ ResourceError }) => ({
    default: ResourceError,
  }))
);

export function DashboardModule() {
  const { files } = React.useContext(MyContext);
  const options=[
    {
      head: "Create new file",
      description: "You can create new file with required applications",
      link: DASHBOARD.ENTITLEMENT,
      img: "bi-plus-circle-fill",
      disabled:false
    },
    {
      head: "Complaints",
      description:
        "You can issue complaints which will be sent to operations team",
      link: DASHBOARD.COMPLAINT,
      img: "bi-file-earmark-arrow-up-fill",
      disabled:false
    },
    {
      head: "Check files",
      description:
        "You can view your uploaded file and check its current status",
      link: DASHBOARD.FILES,
      img: "bi-eye-fill",
      disabled:files.length==0
    },
  ]
  return (
    <Routes>
      <Route index element={<Dashboard options={options} />} />
      <Route path="/entitlement" element={<Entitlement />} />
      <Route path="/complaint" element={<Complaints />} />
      <Route path="/files" element={<Files />} />
      <Route path="*" element={<ResourceError errorCode={404} />} />
    </Routes>
  );
}
