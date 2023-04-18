import { createContext, useState } from "react";
import React from "react";

export type MyContextValues = {
  name: string;
  aadhar: string;
  mobile: string;
  files: Array<{
    FileNo: String;
    SignedAplication: String;
    ApplicationsForm1: String;
    ApplicationsForm2: String;
    ApplicationsForm3: String;
    IsAproved: String;
  }>;
  updateName: (name: string) => void;
  updateMobile: (mobile: string) => void;
  updateAadhar: (aadhar: string) => void;
  updateUser: (
    name: string,
    mobile: string,
    aadhar: string,
    files: Array<{
      FileNo: String;
      SignedAplication: String;
      ApplicationsForm1: String;
      ApplicationsForm2: String;
      IsAproved: String;
    }>
  ) => void;
};
export const MyContext = createContext<MyContextValues>({
  name: "",
  aadhar: "",
  mobile: "",
  files: [],
  updateAadhar: (name: string) => {},
  updateMobile: (mobile: string) => {},
  updateName: (aadhar: string) => {},
  updateUser: (
    name: string,
    mobile: string,
    aadhar: string,
    files: Array<{
      FileNo: String;
      SignedAplication: String;
      ApplicationsForm1: String;
      ApplicationsForm2: String;
      ApplicationsForm3: String;
      IsAproved: String;
    }>
  ) => {},
});

export function MyProvider({ children }: { children: React.ReactNode }) {
  const [userInfo, setUserInfo] = useState({
    name: "",
    mobile: "",
    aadhar: "",
    files: [],
  });
  const updateUser = (
    name: string,
    mobile: string,
    aadhar: string,
    files: Array<{
      FileNo: String;
      SignedAplication: String;
      ApplicationsForm1: String;
      ApplicationsForm2: String;
      ApplicationsForm3: String;
      IsAproved: String;
    }>
  ) => {
    setUserInfo({ name, mobile, aadhar, files });
  };
  const updateName = (name: string) => {
    let mobile = userInfo.mobile;
    let aadhar = userInfo.aadhar;
    let files = userInfo.files;
    setUserInfo({ name, mobile, aadhar, files });
  };
  const updateMobile = (mobile: string) => {
    let name = userInfo.name;
    let aadhar = userInfo.aadhar;
    let files = userInfo.files;
    setUserInfo({ name, mobile, aadhar, files });
  };
  const updateAadhar = (aadhar: string) => {
    let name = userInfo.name;
    let mobile = userInfo.mobile;
    let files = userInfo.files;
    setUserInfo({ name, mobile, aadhar, files });
  };
  const contextValues: MyContextValues = {
    name: userInfo.name,
    mobile: userInfo.mobile,
    aadhar: userInfo.aadhar,
    files: userInfo.files,
    updateName,
    updateMobile,
    updateAadhar,
    updateUser,
  };
  return (
    <MyContext.Provider value={contextValues}>{children}</MyContext.Provider>
  );
}
