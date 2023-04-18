import { useRef, useState } from "react";
import "./CSS/Entitlement.css";
import uploadApplications from "../APIHandler/Dashboard/uploadApplications";

export default function Entitlement() {
  const signedApplication = useRef<HTMLInputElement>();
  const application1 = useRef<HTMLInputElement>();
  const application2 = useRef<HTMLInputElement>();
  const application3 = useRef<HTMLInputElement>();
  const signedApplicationName = useRef<HTMLInputElement>();
  const application1Name = useRef<HTMLInputElement>();
  const application2Name = useRef<HTMLInputElement>();
  const application3Name = useRef<HTMLInputElement>();
  const [signedApplicationFile, setSignedApplicationFile] = useState<File>();
  const [application1File, setApplication1File] = useState<File>();
  const [application2File, setApplication2File] = useState<File>();
  const [application3File, setApplication3File] = useState<File>();
  let upload = () => {
    uploadApplications(
      signedApplicationFile,
      application1File || application2File,
      application3File
    )
      .then((message) => {
        alert(message);
      })
      .catch((errMessage) => {
        alert(errMessage);
      });
  };
  return (
    <div className="entitlement">
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="w-100">
          <div className="element-container">
            <p>Hand written application</p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <input
                ref={signedApplicationName}
                className="form-control text-white"
              />
              <input
                ref={signedApplication}
                type="file"
                style={{ display: "none" }}
                onChange={(event) => {
                  let file = event.target.files[0];
                  signedApplicationName.current.value = file.name;
                  setSignedApplicationFile(event.target.files[0]);
                }}
              />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  onClick={() => {
                    signedApplication.current.click();
                  }}
                  className="btn btn-outline-light"
                >
                  Browse
                </button>
                <a href={process.env.REACT_APP_SIGNED_APPLICATION} download>
                  <button className="btn btn-outline-light">
                    Download form
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="element-container">
            <p>Land application</p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <input
                ref={application1Name}
                className="form-control text-white"
              />
              <input
                ref={application1}
                type="file"
                style={{ display: "none" }}
                onChange={(event) => {
                  let file = event.target.files[0];
                  application1Name.current.value = file.name;
                  setApplication1File(file);
                }}
              />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  onClick={() => {
                    application1.current.click();
                  }}
                  className="btn btn-outline-light"
                >
                  Browse
                </button>
                <a href={process.env.REACT_APP_APPLICATION1} download>
                  <button className="btn btn-outline-light">
                    Download form
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="element-container">
            <p>Payment application</p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <input
                ref={application2Name}
                className="form-control text-white"
              />
              <input
                ref={application2}
                type="file"
                style={{ display: "none" }}
                onChange={(event) => {
                  let file = event.target.files[0];
                  application2Name.current.value = file.name;
                  setApplication2File(file);
                }}
              />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  onClick={() => {
                    application2.current.click();
                  }}
                  className="btn btn-outline-light"
                >
                  Browse
                </button>
                <a href={process.env.REACT_APP_APPLICATION2} download>
                  <button className="btn btn-outline-light">
                    Download form
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="element-container">
            <p>Confirmation application</p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <input
                ref={application3Name}
                className="form-control text-white"
              />
              <input
                ref={application3}
                type="file"
                onChange={(event) => {
                  let file = event.target.files[0];
                  application3Name.current.value = file.name;
                  setApplication3File(file);
                }}
                style={{ display: "none" }}
              />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  onClick={() => {
                    application3.current.click();
                  }}
                  className="btn btn-outline-light"
                >
                  Browse
                </button>
                <a href={process.env.REACT_APP_APPLICATION3} download>
                  <button className="btn btn-outline-light">
                    Download form
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ width: "70%", margin: "40px auto" }}>
            <button
              disabled={
                !(
                  signedApplicationFile &&
                  (application1File || application2File) &&
                  (!application1File || !application2File) &&
                  application3File
                )
              }
              onClick={upload}
              className="btn btn-outline-light w-100"
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
