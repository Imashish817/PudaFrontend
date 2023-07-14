import React, { useEffect, useState } from "react";
import { MyContext } from "../../Storage/Storage";
import { User } from "../../APIHandler/User/userTemplate";
import GetUnverified from "../../APIHandler/User/GetUnverified";
import getCookie from "../../Cookie/getCookie";
import { COOKIE } from "../../Constants/Constant";
import getImage from "../../APIHandler/getImage";
import approve from "../../APIHandler/Dashboard/approve";
import reject from "../../APIHandler/Dashboard/reject";
import sendToPatwari from "../../APIHandler/Dashboard/sendToPatwari";
import sendToAccounts from "../../APIHandler/Dashboard/sendToAccounts";

export default function CheckFiles() {
  let { name, accessCode } = React.useContext(MyContext);
  let [options, setOptions] = useState<Array<string>>([]);
  let [selectedUser, setSelectedUser] = useState<User | null>(null);
  let [fileMappingUser, setFileMappingUser] = useState<Map<string, User>>();
  let [selectedFileNo, setSelectedFileNo] = useState<string>();

  useEffect(() => {
    GetUnverified(getCookie(COOKIE.KEY), accessCode).then(
      (users: Array<any>) => {
        let options = [];
        let fileMappingUserCopy = new Map(fileMappingUser);
        for (let user of users) {
          fileMappingUserCopy.set(user.FileNo, user);
          options.push(user.FileNo);
        }
        setFileMappingUser(fileMappingUserCopy);
        setOptions(options);
      }
    );
  }, []);
  let getDetails = (event) => {
    event.preventDefault();
    let form = event.target;
    let file = form[0].value;
    if (!file || !file.trim()) return;
    setSelectedFileNo(file.trim());
    let userDetail = fileMappingUser.get(file);
    setSelectedUser(userDetail);
  };
  const approveSendToPatwari = () => {
    sendToPatwari(selectedFileNo, selectedUser.AadharNo)
      .then((res) => {
        alert(res);
      })
      .catch((err) => {
        alert(err);
      });
  };
  const approveSendToAccounts = () => {
    sendToAccounts(selectedFileNo, selectedUser.AadharNo)
      .then((res) => {
        alert(res);
      })
      .catch((err) => {
        alert(err);
      });
  };
  const approveSelected = () => {
    approve(selectedFileNo, selectedUser.AadharNo)
      .then((res) => {
        alert(res);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const rejectSelected = () => {
    reject(selectedFileNo, selectedUser.AadharNo)
      .then((res) => {
        alert(res);
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <div className="text-center">
        <h2>Admin Panel</h2>
      </div>
      <div
        style={{
          width: "600px",
        }}
        className="text-left m-auto"
      >
        <p>Name: {name}</p>
        <div
          style={{
            margin: "50px 0",
          }}
        >
          <form onSubmit={getDetails}>
            <div>
              <label htmlFor="aadhar">
                Select aadhar No. to initiate verification
              </label>
              <select
                className="form-control"
                style={{
                  background: "transparent",
                  borderWidth: "0 0 1px 0",
                  borderRadius: "0",
                  color: "white",
                }}
                id="aadhar"
              >
                {options.map((option, idx) => {
                  return (
                    <option key={idx} style={{ color: "black" }}>
                      {option}
                    </option>
                  );
                })}
              </select>
            </div>
            <div style={{ margin: "50px 0" }}>
              <button
                style={{
                  borderRadius: "1rem",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "170px",
                }}
                type="submit"
                className="btn btn-outline-light"
              >
                Get Details
                <i
                  style={{ fontSize: "18pt" }}
                  className="bi bi-arrow-right"
                ></i>
              </button>
            </div>
          </form>
          {selectedUser ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex" }}>
                {typeof selectedUser.URLPaths === "string" ? (
                  <div>
                    <img src={getImage(selectedUser.URLPaths)} />
                    <p>{selectedUser.filePaths}</p>
                  </div>
                ) : (
                  selectedUser.URLPaths.map((path) => {
                    if (!path) return;
                    return (
                      <div
                        style={{ margin: "0 30px", border: "1px solid white" }}
                      >
                        <a target="__blank" href={getImage(path)}>
                          <img
                            style={{ width: "300px" }}
                            src={getImage(path)}
                          />
                        </a>
                      </div>
                    );
                  })
                )}
              </div>
              <button
                style={{
                  borderRadius: "1rem",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "150px",
                  margin: "10px",
                }}
                type="submit"
                className="btn btn-outline-light"
                onClick={approveSendToAccounts}
              >
                Approve and send to accounts
                <i
                  style={{ fontSize: "18pt" }}
                  className="bi bi-arrow-right"
                ></i>
              </button>
              <button
                style={{
                  borderRadius: "1rem",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "150px",
                  margin: "10px",
                }}
                type="submit"
                className="btn btn-outline-light"
                onClick={approveSendToPatwari}
              >
                Approve and send to patwari
                <i
                  style={{ fontSize: "18pt" }}
                  className="bi bi-arrow-right"
                ></i>
              </button>
              <button
                style={{
                  borderRadius: "1rem",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "150px",
                  margin: "10px",
                }}
                type="submit"
                className="btn btn-outline-light"
                onClick={approveSelected}
              >
                Approve and send to patwari and accounts
                <i
                  style={{ fontSize: "18pt" }}
                  className="bi bi-arrow-right"
                ></i>
              </button>
              <button
                style={{
                  borderRadius: "1rem",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "150px",
                  margin: "10px",
                }}
                type="submit"
                className="btn btn-outline-light"
                onClick={rejectSelected}
              >
                Reject
                <i
                  style={{ fontSize: "18pt" }}
                  className="bi bi-arrow-right"
                ></i>
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
