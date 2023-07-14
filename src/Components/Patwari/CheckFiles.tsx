import React, { useEffect, useState } from "react";
import { MyContext } from "../../Storage/Storage";
import { User } from "../../APIHandler/User/userTemplate";
import GetUnverified from "../../APIHandler/User/GetUnverified";
import getCookie from "../../Cookie/getCookie";
import { COOKIE, PATWARI } from "../../Constants/Constant";
import getImage from "../../APIHandler/getImage";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Plot } from "../Plot/Plot";
import PopupWrapper from "../PopupWrapper/PopupWrapper";

export default function CheckFiles() {
  let { name, accessCode } = React.useContext(MyContext);
  let [options, setOptions] = useState<Array<string>>([]);
  let [selectedUser, setSelectedUser] = useState<User | null>(null);
  let [fileMappingUser, setFileMappingUser] = useState<Map<string, User>>();
  let [selectedFileNo, setSelectedFileNo] = useState<string>();
  const navigate = useNavigate();
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
    let userDetail = fileMappingUser.get(file);
    setSelectedFileNo(file.trim());
    setSelectedUser(userDetail);
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
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "auto",
                  height: "400px",
                }}
              >
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
                        style={{
                          margin: "10px 30px",
                          border: "1px solid white",
                        }}
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
                onClick={() => {
                  navigate(
                    PATWARI.INDEX + PATWARI.CHECK_FILES + `/${selectedFileNo}`
                  );
                }}
                className="btn btn-outline-light mt-2"
              >
                Fill data
              </button>
              <Routes>
                <Route path="/:files" element={<PopupWrapper />}>
                  <Route
                    index
                    element={
                      <Plot
                        fileId={selectedFileNo}
                        aadhar={selectedUser?.AadharNo}
                      />
                    }
                  />
                </Route>
              </Routes>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
