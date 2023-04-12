import React, { useEffect } from "react";
import { MyContext } from "../../Storage/Storage";
import setCookie from "../../Cookie/setCookie";
import { COOKIE, USER } from "../../Constants/Constant";
import { Navigate } from "react-router-dom";

export function Logout() {
  const { updateUser } = React.useContext(MyContext);
  useEffect(() => {
    updateUser("", "", "");
    setCookie(COOKIE.KEY, "", -1);
  }, []);
  return <Navigate to={USER.LOGIN} />;
}
