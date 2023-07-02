import axios from "axios";
import ApiConstants from "../../Constants/ApiConstants";

export default function bookAppointment(
  token: string,
  fileNo: string,
  date: string,
  msg: string
): Promise<any> {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: process.env.REACT_APP_BASE_URL + ApiConstants.USER.BOOK_APPOINTMENT,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        FileNo: fileNo,
        date: `${date}$${msg}`,
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
