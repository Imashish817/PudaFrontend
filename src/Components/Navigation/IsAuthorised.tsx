import { Navigate } from "react-router-dom";
import { USER } from "../../Constants/Constant";
import React from "react";
import { MyContext, MyContextValues } from "../../Storage/Storage.tsx";

export default function IsAuthorised({ element: Component, userType: code }) {
  const { aadhar, accessCode } = React.useContext<MyContextValues>(MyContext);
  return (
    <>
      {(() => {
        if (aadhar && accessCode == code) return React.cloneElement(Component);
        return <Navigate to={USER.LOGIN} />;
      })()}
    </>
  );
}
