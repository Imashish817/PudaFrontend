import axios from "axios";
import ApiConstants from "../../Constants/ApiConstants";

export default function fetchViaToken(token: string): Promise<any> {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: process.env.REACT_APP_BASE_URL + ApiConstants.USER.VALIDATE_TOKEN,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        axios.defaults.headers.common["Authorization"] = token;
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
