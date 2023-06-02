import React, { useEffect, useState } from "react";
import { MyContext } from "../../Storage/Storage";
import { User } from "../../APIHandler/User/userTemplate";
import getUnverified from "../../APIHandler/User/getUnverified";
import getCookie from "../../Cookie/getCookie";
import { COOKIE } from "../../Constants/Constant";

export default function Verification() {
  let { name } = React.useContext(MyContext);
  let [options, setOptions] = useState<Array<string>>([]);
  let [selectedUser, setSelectedUser] = useState<User | null>(null);
  let [aadharMappingUser, setAadharMappingUser] = useState<Map<string, User>>();
  useEffect(() => {
    getUnverified(getCookie(COOKIE.KEY)).then((users: Array<User>) => {
      let options = [];
      let aadharMappingUserCopy = new Map(aadharMappingUser);
      for (let user of users) {
        aadharMappingUserCopy.set(user.AadharNo, user);
        options.push(user.AadharNo);
      }
      setAadharMappingUser(aadharMappingUserCopy);
      setOptions(options);
    });
  }, []);
  let getDetails = (event) => {
    event.preventDefault();
    let form = event.target;
    let aadhar = form[0].value;
    if (!aadhar || !aadhar.trim()) return;
    let userDetail = aadharMappingUser.get(aadhar);
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
          <form
            onSubmit={(e) => {
              getDetails(e);
            }}
          >
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
                    <img src={selectedUser?.URLPaths} />
                    <p>{selectedUser?.filePaths}</p>
                  </div>
                ) : (
                  selectedUser.URLPaths.map((path) => {
                    if (!path) return;
                    return (
                      <div
                        style={{ margin: "0 30px", border: "1px solid white" }}
                      >
                        <img style={{ width: "300px" }} src={path} />
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
                  width: "220px",
                  margin: "10px",
                }}
                type="submit"
                className="btn btn-outline-light"
              >
                Send mail to GMADA and LAC
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
