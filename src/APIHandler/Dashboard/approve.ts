import axios from "axios";
import { COOKIE } from "../../Constants/Constant";
import getCookie from "../../Cookie/getCookie";

export default function approve(
  fileNo: string,
  aadhar: string,
  breakupRow1?: Array<any>,
  breakupRow2?: Array<any>,
  breakupRow3?: Array<any>
): Promise<string> {
  let data =
    breakupRow1 && breakupRow2 && breakupRow3
      ? JSON.stringify({
          FileNo: fileNo,
          Aadharno: aadhar,
          breakupRow1: breakupRow1,
          breakupRow2: breakupRow2,
          breakupRow3: breakupRow3,
        })
      : JSON.stringify({
          FileNo: fileNo,
          Aadharno: aadhar,
        });
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: process.env.REACT_APP_BASE_URL + "/api/admin/Approve",
      data: data,
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
