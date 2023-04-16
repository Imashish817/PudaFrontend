import axios from "axios";
import { COOKIE } from "../../Constants/Constant";
import getCookie from "../../Cookie/getCookie";

export default function uploadApplications(
  writtenApplication: File,
  application1: File,
  application2: File
): Promise<string> {
  let formdata = new FormData();
  formdata.append("WrittenApplication", writtenApplication);
  formdata.append("ApplicationsForm1", application1);
  formdata.append("ApplicationsForm2", application2);
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
        resolve(response.data.message);
      })
      .catch((err) => {
        reject(err.response.data.message);
      });
  });
}
