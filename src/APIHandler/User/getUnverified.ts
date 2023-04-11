import axios from "axios";
import ApiConstants from "../../Constants/ApiConstants";

export default function getUnverified(token: string): Promise<any> {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: process.env.REACT_APP_BASE_URL + ApiConstants.USER.UNVERIFIED,
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
