import { useNavigate } from "react-router-dom";
import { MyContext } from "../Storage/Storage";
import React, { useEffect } from "react";
import { DASHBOARD } from "../Constants/Constant";
export default function Files() {
  const navigate = useNavigate();
  const { files } = React.useContext(MyContext);
  const [applications, setApplications] = React.useState<Array<String>>();
  const [approvedByacc, setApprovedByacc] = React.useState<String>();
  const [approvedBycon, setApprovedBycon] = React.useState<String>();
  const [approvedByops, setApprovedByops] = React.useState<String>();
  const [approvedBypat, setApprovedBypat] = React.useState<String>();
  const setCurrentFile = (file) => {
    setApplications([
      file?.SignedAplication,
      file?.ApplicationsForm1,
      file?.ApplicationsForm2,
    ]);
    switch (file?.ApprovedByacc) {
      case "true":
        setApprovedByacc("Approved by accountant");
        break;
      case "false":
        setApprovedByacc("In progress with accountant");
        break;
      case "reject":
        setApprovedByacc("Rejected by accountant");
        break;
    }
    switch (file?.ApprovedBycon) {
      case "true":
        setApprovedBycon("Approved by consulant");
        break;
      case "false":
        setApprovedByacc("In progress with consultant");
        break;
      case "reject":
        setApprovedByacc("Rejected by consultant");
        break;
    }
    switch (file?.ApprovedByops) {
      case "true":
        setApprovedByops("Approved by operations");
        break;
      case "false":
        setApprovedByops("In progress with operations");
        break;
      case "reject":
        setApprovedByops("Rejected by operations");
        break;
    }
    switch (file?.ApprovedBypat) {
      case "true":
        setApprovedBypat("Approved by patwari");
        break;
      case "false":
        setApprovedBypat("In progress with patwari");
        break;
      case "reject":
        setApprovedBypat("Rejected by patwari");
        break;
    }
  };
  const setApplicationData = (event) => {
    let file = files[event.target.value];
    setCurrentFile(file);
  };
  useEffect(() => {
    if (files.length > 0) {
      setCurrentFile(files[0]);
    } else {
      navigate(DASHBOARD.INDEX);
    }
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "10px",
        background: "linear-gradient(to right, #3c1053, #ad5389)",
        color: "white",
        overflow: "auto",
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
        <div>
          {approvedByops ? <p>{approvedByops}</p> : <></>}
          {approvedBycon ? <p>{approvedBycon}</p> : <></>}
          {approvedBypat ? <p>{approvedBypat}</p> : <></>}
          {approvedByacc ? <p>{approvedByacc}</p> : <></>}
        </div>
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
