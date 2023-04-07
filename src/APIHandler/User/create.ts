import axios from "axios";
import ApiConstants from "../../Constants/ApiConstants";
import { User } from "./userTemplate";

export default function create(
  body
): Promise<User> {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: process.env.REACT_APP_BASE_URL + ApiConstants.USER.REGISTER,
      data: body,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
