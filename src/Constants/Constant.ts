export const USER = {
  INDEX: "/user",
  LOGIN: "/user/login",
  REGISTER: "/user/register",
  LOGOUT: "/user/logout",
};
export const ADMIN = {
  INDEX: "/admin",
  VALIDATE_FILE: "/validate",
  VERIFICATION: "/verification",
  APPOINTMENT: "/appointment",
};
export const PATWARI = {
  INDEX: "/patwari",
  CHECK_FILES: "/checkFiles",
};
export const CONSULTANT = {
  INDEX: "/consultant",
  CHECK_FILES: "/checkFiles",
};

export const ACCOUNTS = {
  INDEX: "/accounts",
  CHECK_FILES: "/checkFiles",
};
export const DASHBOARD = {
  INDEX: "/dashboard",
  ENTITLEMENT: "/dashboard/entitlement",
  COMPLAINT: "/dashboard/complaint",
  FILES: "/dashboard/files",
};
export const SUCCESS_APPROVE = "You have approved this file successfully";
export const SUCCESS_REJECT = "You have rejected this file successfully";

export const COOKIE = { LIFE: 4, KEY: "x-access-token" };
export const MEDIA = {
  UPLOAD_THUMBNAIL: `https://cdn.pixabay.com/photo/2017/01/18/17/39/cloud-computing-1990405_1280.png`,
  UPLOAD_URL: `/api/File/upload`,
};
export const ACCESS_MAP = {
  "1": DASHBOARD.INDEX,
  "2": ADMIN.INDEX,
  "3": CONSULTANT.INDEX,
  "4": PATWARI.INDEX,
  "5": ACCOUNTS.INDEX,
};
