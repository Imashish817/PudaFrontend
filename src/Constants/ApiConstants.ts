export default class ApiConstants {
  public static USER = {
    AUTH: "/api/user/login",
    REGISTER: "/api/user/register",
    UNVERIFIED_OP: "/api/admin/GetUnverifiedUsersForOps",
    UNVERIFIED_CST: "/api/admin/GetUnverifiedUsersForCon",
    UNVERIFIED_PWT: "/api/admin/GetUnverifiedUsersForPat",
    UNVERIFIED_ACC: "/api/admin/GetUnverifiedUsersForAcc",
    LOGOUT: "crm/app-integration/disconnect",
    VALIDATE_TOKEN: "/api/user/loggeduser",
    APPOINTMENT_USERS: "/api/admin/usersToBookAppointment",
    BOOK_APPOINTMENT: "/api/admin/BookAppointment",
  };
  public static MEDIA = {
    UPLOAD: "/api/File/upload",
  };
}
