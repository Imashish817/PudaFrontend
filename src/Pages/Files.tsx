import { MyContext } from "../Storage/Storage";
import React, { useEffect } from "react";

export default function Files() {
  const { files } = React.useContext(MyContext);
  const [applications, setApplications] = React.useState<Array<String>>();
  const [status, setStatus] = React.useState<String>();
  let setCurrentFile = (file) => {
    setApplications([
      file.SignedAplication,
      file.ApplicationsForm1,
      file.ApplicationsForm2,
    ]);
    console.log(file.IsAproved);
    switch (file.IsAproved) {
      case "1":
        setStatus("In progress");
        break;
      case "2":
        setStatus("Approved by operations team");
        break;
      case "3":
        setStatus("Approved by consultants team");
        break;
    }
  };
  let setApplicationData = (event) => {
    let file = files[event.target.value];
    setCurrentFile(file);
  };
  useEffect(() => {
    setCurrentFile(files[0]);
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "90%",
        padding: "10px",
        background: "#3e7651",
        color: "white",
      }}
    >
      <div className="text-center">
        <select
          style={{ width: "50%", margin: "auto" }}
          className="form-control"
          onChange={setApplicationData}
        >
          {files?.map((file, idx) => {
            return (
              <option key={idx} value={idx}>
                {file.FileNo}
              </option>
            );
          })}
        </select>
      </div>
      <div
        style={{
          padding: "50px 20px",
        }}
      >
        <p>Status: {status}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {applications?.map((url, idx) => {
            return (
              <div key={idx} className="text-center">
                <img
                  src={String(url)}
                  style={{
                    width: "200px",
                    height: "200px",
                    margin: "10px",
                    display: "block",
                  }}
                />
                <a
                  href={String(url)}
                  style={{ textDecoration: "none" }}
                  download
                >
                  <button className="btn btn-outline-light">Download</button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
