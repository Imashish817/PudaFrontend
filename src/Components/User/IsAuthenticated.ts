import React from "react";
import getCookie from "../../Cookie/getCookie.ts";
import { MyContext, MyContextValues } from "../../Storage/Storage";
import { COOKIE } from "../../Constants/Constant.ts";

export default function IsAuthenticated(): Boolean {
  const { name, mobile, aadhar, updateUser } = React.useContext<
    MyContextValues
  >(MyContext);
  console.log(name, mobile, aadhar);
  if (aadhar) {
    return true;
  } else if (getCookie(COOKIE.KEY)) {
    updateUser("harshit", "7206291795", "310766471824");
    return true;
  }
  return false;
}
