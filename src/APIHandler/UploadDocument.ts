import axios from "axios";

export default function uploadDocument(
  image: Blob | undefined
): Promise<string> | undefined {
  if (!image) return undefined;
  let formdata = new FormData();
  formdata.append("WrittenApplication", image);
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: process.env.REACT_APP_BASE_URL + "/api/File/upload",
      data: formdata,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
