import { Route, Routes } from "react-router-dom";
import React from "react";
const Register = React.lazy(() =>
  import("../../../Pages/Register.tsx").then(({ Register }) => ({
    default: Register,
  }))
);
const UploadDocument = React.lazy(() =>
  import("../../../Pages/UploadDocument.tsx").then(({ UploadDocument }) => ({
    default: UploadDocument,
  }))
);
const ResourceError = React.lazy(() =>
  import("../../../Pages/ResourceError.tsx").then(({ ResourceError }) => ({
    default: ResourceError,
  }))
);

export function RegisterModule() {
  return (
    <Routes>
      <Route index element={<Register />} />
      <Route path="/uploadApplication" element={<UploadDocument />} />
      <Route path="*" element={<ResourceError errorCode={404} />} />
    </Routes>
  );
}
