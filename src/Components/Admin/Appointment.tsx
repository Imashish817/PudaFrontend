import React, { useEffect, useState } from "react";
import getCookie from "../../Cookie/getCookie";
import { COOKIE } from "../../Constants/Constant";
import usersForAppointment from "../../APIHandler/User/usersForAppointment";
import bookAppointment from "../../APIHandler/User/bookAppointment";

export default function Appointment() {
  const [alert, setAlert] = useState<string>("");
  const [buttonText, setButtonText] = useState<String>("Submit");
  const [aadhars, setAadhars] = useState<Set<string>>(new Set());
  useEffect(() => {
    usersForAppointment(getCookie(COOKIE.KEY)).then((users: any) => {
      let aadharsCopy = new Set(aadhars);
      for (let user of users.data) {
        aadharsCopy.add(user.FileNo);
      }
      setAadhars(aadharsCopy);
    });
  }, []);
  const submitter = (event) => {
    event.preventDefault();
    let form = event.target;
    setAlert("");
    bookAppointment(
      getCookie(COOKIE.KEY),
      form[0].value,
      form[1].value,
      form[2].value
    )
      .then((res: any) => {
        setAlert(res.message);
        let aadharsCopy = new Set(aadhars);
        aadharsCopy.delete(form[0].value);
        setAadhars(aadharsCopy);
      })
      .catch((err) => {
        window.alert(err.message);
      });
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
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
          {alert.split("$")[0]}
        </div>
      ) : (
        <></>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div style={{ width: "300px", margin: "auto" }}>
          <form onSubmit={submitter}>
            <div style={{ marginBottom: "3.5rem" }}>
              <label htmlFor="exampleFormControlInput1">File No</label>
              <select
                className="form-control"
                name="aadhar"
                id="exampleFormControlInput1"
              >
                {(() => {
                  let res = [];
                  aadhars.forEach((aadhar: string) => {
                    return res.push(<option value={aadhar}>{aadhar}</option>);
                  });
                  return res;
                })()}
              </select>
            </div>
            <div style={{ marginBottom: "3.5rem" }}>
              <label htmlFor="exampleFormControlInput2">Date</label>
              <input
                className="form-control"
                type="date"
                id="exampleFormControlInput2"
              />
            </div>
            <div style={{ marginBottom: "3.5rem" }}>
              <label htmlFor="exampleFormControlTextarea">Message</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea"
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
