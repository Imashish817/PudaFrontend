import axios from "axios";
import { COOKIE } from "../../Constants/Constant";
import getCookie from "../../Cookie/getCookie";

export default function approve(
  fileNo: string,
  aadhar: string
): Promise<string> {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: process.env.REACT_APP_BASE_URL + "/api/admin/Approve",
      data: JSON.stringify({
        FileNo: fileNo,
        Aadharno: aadhar,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie(COOKIE.KEY)}`,
      },
    })
      .then((response) => {
        resolve(response.data.message);
      })
      .catch((err) => {
        reject(err.response.data.message);
      });
  });
}
