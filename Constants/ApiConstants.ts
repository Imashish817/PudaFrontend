export default class ApiConstants {
  static URL = {
    BASE: process.env.BACKEND_BASE_URL,
    USER: {
      AUTH: "/api/user/login",
      REGISTER: "crm/app-integration/connect",
      LOGOUT: "crm/app-integration/disconnect",
    },
    MEDIA: {
      UPLOAD: "/api/File/upload",
    },
  };
}
