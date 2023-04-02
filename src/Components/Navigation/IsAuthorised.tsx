import { Navigate } from "react-router-dom";
import { USER } from "../../Constants/Constant";
import React from "react";
import { MyContext, MyContextValues } from "../../Storage/Storage.tsx";

export default function IsAuthorised({ element: Component }) {
  const { aadhar } = React.useContext<MyContextValues>(MyContext);
  return (
    <>
      {(() => {
        if (aadhar) return React.cloneElement(Component);
        return <Navigate to={USER.LOGIN} />;
      })()}
    </>
  );
}
