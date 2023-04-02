import axios from "axios";
import { COOKIE } from "../../Constants/Constant";
import getCookie from "../../Cookie/getCookie";
import ApiConstants from "../../Constants/ApiConstants";
import { User } from "./userTemplate";

export default function fetchViaToken(): Promise<any> {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: process.env.REACT_APP_BASE_URL + ApiConstants.USER.VALIDATE_TOKEN,
      headers: {
        Authorization: `Bearer ${getCookie(COOKIE.KEY)}`,
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
