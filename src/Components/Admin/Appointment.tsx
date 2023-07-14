import React, { useEffect, useState } from "react";
import getCookie from "../../Cookie/getCookie";
import { COOKIE } from "../../Constants/Constant";
import usersForAppointment from "../../APIHandler/User/usersForAppointment";
import bookAppointment from "../../APIHandler/User/bookAppointment";
import DataGrid from "../DataGrid/DataGrid";

export default function Appointment() {
  const [alert, setAlert] = useState<string>("");
  const [buttonText, setButtonText] = useState<String>("Submit");
  const [aadhars, setAadhars] = useState<Set<string>>(new Set());
  const [bookUser, setBookUser] = useState<Array<Array<string>>>([]);
  const [gridMap, setGriMap] = useState<Map<string, Array<any>>>(new Map());
  const [columns, setColumns] = useState<Array<any>>([
    {
      value: "",
    },
    {
      value: "Ind.",
    },
    {
      value: "Ind.",
    },
    {
      value: "Ind.",
    },
    {
      value: "SCO(3 FAR)",
    },
    {
      value: "SCO(3 FAR)",
    },
    {
      value: "Shop(2 FAR)",
    },
  ]);
  const [rows, setRows] = useState<Array<any>>([
    ["Size (sq yards)", "1100", "550", "255", "200", "100", "60"],
    ["1 acre(8 kanal)", "", "", "", "", "", ""],
    ["0.5 acre(4 kanal)", "", "", "", "", "", ""],
    ["0.25 acre(2 kanal)", "", "", "", "", "", ""],
  ]);
  const [readOnlyRow, setReadOnlyRow] = useState<Array<any>>([
    [true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true],
  ]);
  useEffect(() => {
    usersForAppointment(getCookie(COOKIE.KEY)).then((users: any) => {
      let aadharsCopy = new Set(aadhars);
      let firstFile = null;
      for (let user of users.data) {
        aadharsCopy.add(user.FileNo);
        if (!firstFile) firstFile = user.FileNo;
        gridMap.set(user.FileNo, [
          user.breakuprow1,
          user.breakuprow2,
          user.breakuprow3,
        ]);
      }
      setBookUser(gridMap.get(firstFile));
      setAadhars(aadharsCopy);
    });
  }, []);
  useEffect(() => {
    if (bookUser?.length > 0) {
      bookUser[0].unshift("1 acre(8 kanal)");
      bookUser[1].unshift("0.5 acre(4 kanal)");
      bookUser[2].unshift("0.25 acre(2 kanal)");
      bookUser.unshift([
        "Size (sq yards)",
        "1100",
        "550",
        "255",
        "200",
        "100",
        "60",
      ]);
      setRows(bookUser);
    }
  }, [bookUser]);
  const submitter = (event) => {
    event.preventDefault();
    let form = event.target;
    if (form && (!form[0]?.value || !form[1]?.value || !form[2]?.value)) {
      return;
    }
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
        <div style={{ margin: "auto" }}>
          <form style={{ width: "400px", margin: "auto" }} onSubmit={submitter}>
            <div style={{ marginBottom: "3.5rem" }}>
              <label htmlFor="exampleFormControlInput1">File No</label>
              <select
                onChange={(e) => {
                  setBookUser(gridMap.get(e.target.value));
                }}
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
            <div style={{ marginBottom: "3.5rem", textAlign: "center" }}>
              <button type="submit" className="btn btn-outline-light">
                {buttonText}
              </button>
            </div>
          </form>
          {bookUser && (
            <DataGrid
              rows={rows}
              columns={columns}
              readOnly={readOnlyRow}
              onDocUpdate={(x) => {}}
            />
          )}
        </div>
      </div>
    </div>
  );
}
