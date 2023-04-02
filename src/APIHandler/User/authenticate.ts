import axios from "axios";
import { COOKIE, MEDIA } from "../../Constants/Constant";
import getCookie from "../../Cookie/getCookie";
import ApiConstants from "../../Constants/ApiConstants";
import { User } from "./userTemplate";

export default function authenticate(
  aadhar: string,
  mobile: string,
  password: string
): Promise<User> {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: process.env.REACT_APP_BASE_URL + ApiConstants.USER.AUTH,
      data: {
        AadharNo: aadhar,
        MobileNo: mobile,
        Password: password,
      },
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
