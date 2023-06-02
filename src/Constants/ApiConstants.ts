export default class ApiConstants {
  public static USER = {
    AUTH: "/api/user/login",
    REGISTER: "/api/user/register",
    UNVERIFIED: "/api/admin/GetUnverifiedUsersForOps",
    LOGOUT: "crm/app-integration/disconnect",
    VALIDATE_TOKEN: "/api/user/loggeduser",
  };
  public static MEDIA = {
    UPLOAD: "/api/File/upload",
  };
}
