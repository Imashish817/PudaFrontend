export type User = {
  AadharNo: string;
  MobileNo: string;
  Name: string;
  UserType: string;
  token: string;
  verified: boolean;
  filePaths: Array<string> | string;
  URLPaths: Array<string> | string;
  Files: Array<{
    FileNo: String;
    SignedAplication: String;
    ApplicationsForm1: String;
    ApplicationsForm2: String;
    IsAproved: String;
  }>;
};