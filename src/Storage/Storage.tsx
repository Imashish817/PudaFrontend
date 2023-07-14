import { createContext, useState } from "react";
import React from "react";

export type MyContextValues = {
  name: string;
  aadhar: string;
  mobile: string;
  accessCode: string | null;
  files: Array<{
    FileNo: String;
    SignedAplication: String;
    ApplicationsForm1: String;
    ApplicationsForm2: String;
    ApplicationsForm3: String;
    AppointmentDate: String;
    IsAproved: String;
  }>;
  updateName: (name: string) => void;
  updateMobile: (mobile: string) => void;
  updateAadhar: (aadhar: string) => void;
  updateAccessCode: (code: string) => void;
  updateUser: (
    name: string,
    mobile: string,
    aadhar: string,
    code: string,
    files: Array<{
      FileNo: String;
      SignedAplication: String;
      ApplicationsForm1: String;
      ApplicationsForm2: String;
      ApplicationsForm3: String;
      AppointmentDate: String;
      ApprovedByacc: String;
      ApprovedBycon: String;
      ApprovedByops: String;
      ApprovedBypat: String;
    }>
  ) => void;
};
export const MyContext = createContext<MyContextValues>({
  name: "",
  aadhar: "",
  mobile: "",
  accessCode: "",
  files: [],
  updateAadhar: (name: string) => {},
  updateMobile: (mobile: string) => {},
  updateName: (aadhar: string) => {},
  updateAccessCode: (code: string) => {},
  updateUser: (
    name: string,
    mobile: string,
    aadhar: string,
    code: string,
    files: Array<{
      FileNo: String;
      SignedAplication: String;
      ApplicationsForm1: String;
      ApplicationsForm2: String;
      ApplicationsForm3: String;
      AppointmentDate: String;
      ApprovedByacc: String;
      ApprovedBycon: String;
      ApprovedByops: String;
      ApprovedBypat: String;
    }>
  ) => {},
});

export function MyProvider({ children }: { children: React.ReactNode }) {
  const [userInfo, setUserInfo] = useState({
    name: "",
    mobile: "",
    aadhar: "",
    code: "",
    files: [],
  });
  const updateUser = (
    name: string,
    mobile: string,
    aadhar: string,
    code: string,
    files: Array<{
      FileNo: String;
      SignedAplication: String;
      ApplicationsForm1: String;
      ApplicationsForm2: String;
      ApplicationsForm3: String;
      AppointmentDate: String;
      ApprovedByacc: String;
      ApprovedBycon: String;
      ApprovedByops: String;
      ApprovedBypat: String;
    }>
  ) => {
    setUserInfo({ name, mobile, aadhar, code, files });
  };
  const updateAccessCode = (code: string) => {
    let name = userInfo.name;
    let mobile = userInfo.mobile;
    let aadhar = userInfo.aadhar;
    let files = userInfo.files;
    setUserInfo({ name, mobile, aadhar, code, files });
  };
  const updateName = (name: string) => {
    let mobile = userInfo.mobile;
    let aadhar = userInfo.aadhar;
    let files = userInfo.files;
    let code = userInfo.code;
    setUserInfo({ name, mobile, aadhar, code, files });
  };
  const updateMobile = (mobile: string) => {
    let name = userInfo.name;
    let aadhar = userInfo.aadhar;
    let files = userInfo.files;
    let code = userInfo.code;
    setUserInfo({ name, mobile, aadhar, files, code });
  };
  const updateAadhar = (aadhar: string) => {
    let name = userInfo.name;
    let mobile = userInfo.mobile;
    let files = userInfo.files;
    let code = userInfo.code;
    setUserInfo({ name, mobile, aadhar, files, code });
  };
  const contextValues: MyContextValues = {
    name: userInfo.name,
    mobile: userInfo.mobile,
    aadhar: userInfo.aadhar,
    files: userInfo.files,
    accessCode: userInfo.code,
    updateName,
    updateMobile,
    updateAccessCode,
    updateAadhar,
    updateUser,
  };
  return (
    <MyContext.Provider value={contextValues}>{children}</MyContext.Provider>
  );
}
