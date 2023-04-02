import { createContext, useState } from "react";
import React from "react";

export type MyContextValues = {
  name: string;
  aadhar: string;
  mobile: string;
  updateName: (name: string) => void;
  updateMobile: (mobile: string) => void;
  updateAadhar: (aadhar: string) => void;
  updateUser: (name: string, mobile: string, aadhar: string) => void;
};
export const MyContext = createContext<MyContextValues>({
  name: "",
  aadhar: "",
  mobile: "",
  updateAadhar: (name: string) => {},
  updateMobile: (mobile: string) => {},
  updateName: (aadhar: string) => {},
  updateUser: (name: string, mobile: string, aadhar: string) => {},
});

export function MyProvider({ children }: { children: React.ReactNode }) {
  const [userInfo, setUserInfo] = useState({
    name: "",
    mobile: "",
    aadhar: "",
  });

  const updateUser = (name: string, mobile: string, aadhar: string) => {
    setUserInfo({ name, mobile, aadhar });
  };
  const updateName = (name: string) => {
    let mobile = userInfo.mobile;
    let aadhar = userInfo.aadhar;
    setUserInfo({ name, mobile, aadhar });
  };
  const updateMobile = (mobile: string) => {
    let name = userInfo.name;
    let aadhar = userInfo.aadhar;
    setUserInfo({ name, mobile, aadhar });
  };
  const updateAadhar = (aadhar: string) => {
    let name = userInfo.name;
    let mobile = userInfo.mobile;
    setUserInfo({ name, mobile, aadhar });
  };
  const contextValues: MyContextValues = {
    name: userInfo.name,
    mobile: userInfo.mobile,
    aadhar: userInfo.aadhar,
    updateName,
    updateMobile,
    updateAadhar,
    updateUser,
  };

  return (
    <MyContext.Provider value={contextValues}>{children}</MyContext.Provider>
  );
}
