import React from "react";
import { MyContext } from "../../Storage/Storage";
import setCookie from "../../Cookie/setCookie";
import { COOKIE, USER } from "../../Constants/Constant";
import { Navigate } from "react-router-dom";

export default function Logout() {
  const { name, aadhar, updateUser } = React.useContext(MyContext);
  updateUser("", "", "");
  let key = COOKIE.KEY;
  setCookie(key, "", -1);
  return <Navigate to={USER.LOGIN} />;
}
