export type User = {
  AadharNo: string;
  MobileNo: string;
  Name: string;
  UserType: string;
  token: string;
  verified:boolean;
  filePaths: Array<string> | string;
  URLPaths: Array<string> | string;
};
