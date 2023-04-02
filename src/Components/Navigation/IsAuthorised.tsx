import { Navigate } from "react-router-dom";
import { USER } from "../../Constants/Constant";
import React from "react";

export default function IsAuthorised({ element: Component, validator }) {
  return (
    <>
      {(() => {
        if (validator()) return React.cloneElement(Component);
        return <Navigate to={USER.LOGIN} />;
      })()}
    </>
  );
}
