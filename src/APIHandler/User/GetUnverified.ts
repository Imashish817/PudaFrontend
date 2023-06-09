import axios from "axios";
import ApiConstants from "../../Constants/ApiConstants";

export default function Getunverified(
  token: string,
  accessCode: string
): Promise<any> {
  let URL = process.env.REACT_APP_BASE_URL;
  switch (accessCode) {
    case "2":
      URL = URL.concat(ApiConstants.USER.UNVERIFIED_OP);
      break;
    case "3":
      URL = URL.concat(ApiConstants.USER.UNVERIFIED_CST);
      break;
    case "4":
      URL = URL.concat(ApiConstants.USER.UNVERIFIED_PWT);
      break;
    case "5":
      URL = URL.concat(ApiConstants.USER.UNVERIFIED_ACC);
      break;
  }
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        resolve(response.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
