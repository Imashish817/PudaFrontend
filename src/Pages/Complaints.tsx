import React, { useState } from "react";
import { MyContext } from "../Storage/Storage";

export default function Complaints() {
  const { name, aadhar } = React.useContext(MyContext);
  const [alert, setAlert] = useState<boolean>(false);
  const [Cname, setCName] = useState<String>(name);
  const [Caadhar, setCAadhar] = useState<String>(aadhar);
  const [buttonText, setButtonText] = useState<String>("Submit");
  const submitter = (event) => {
    event.preventDefault();
    setAlert(true);
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#3e7651",
        color: "white",
        padding: "20px",
      }}
    >
      {alert ? (
        <div
          style={{ width: "600px", margin: "20px auto" }}
          className="alert alert-primary text-center"
          role="alert"
        >
          Your complaint has been sent to operations team
        </div>
      ) : (
        <></>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height:"100%"
        }}
      >
        <div style={{ width: "300px", margin: "auto" }}>
          <form onSubmit={submitter}>
            <div style={{marginBottom:"3.5rem"}}>
              <label htmlFor="exampleFormControlInput1">Name</label>
              <input
                style={{
                  background: "transparent",
                  borderRadius: "0rem",
                  borderWidth: "0 0 1px 0",
                  color: "white",
                }}
                type="name"
                className="form-control"
                id="exampleFormControlInput1"
                value={String(Cname)}
                onChange={(event) => setCName(event.target.value)}
              />
            </div>
            <div style={{marginBottom:"3.5rem"}}>
              <label htmlFor="exampleFormControlInput1">Aadhar</label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                style={{
                  background: "transparent",
                  borderRadius: "0rem",
                  borderWidth: "0 0 1px 0",
                  color: "white",
                }}
                value={String(Caadhar)}
                onChange={(event) => setCAadhar(event.target.value)}
              />
            </div>
            <div style={{marginBottom:"3.5rem"}}>
              <label htmlFor="exampleFormControlTextarea1">Message</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
              ></textarea>
            </div>
            <div style={{ textAlign: "center" }}>
              <button type="submit" className="btn btn-outline-light">
                {buttonText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
