import axios from "axios";
import { COOKIE } from "../Constants/Constant";
import getCookie from "../Cookie/getCookie";

export default function uploadDocument(image: File): Promise<string> {
  let formdata = new FormData();
  formdata.append("WrittenApplication", image);
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: process.env.REACT_APP_BASE_URL + "/api/File/upload",
      data: formdata,
      headers: {
        "Content-Type": "multipart/form-data",
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
