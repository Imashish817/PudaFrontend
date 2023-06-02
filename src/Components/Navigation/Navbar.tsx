import { Link } from "react-router-dom";
import { ACCESS_MAP, DASHBOARD, USER } from "../../Constants/Constant.ts";
import React from "react";
import { MyContext, MyContextValues } from "../../Storage/Storage.tsx";
export default function Navbar() {
  const { aadhar, accessCode } = React.useContext<MyContextValues>(MyContext);
  return (
    <nav
      style={{ zIndex: "999" }}
      className="navbar navbar-expand-lg navbar-dark bg-dark"
    >
      <Link className="navbar-brand" to="/">
        Puda
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {!aadhar && (
            <Link className="nav-item nav-link" to={USER.LOGIN}>
              Login
            </Link>
          )}
          {accessCode && (
            <Link
              className="nav-item nav-link"
              to={ACCESS_MAP[`${accessCode}`]}
            >
              Dashboard
            </Link>
          )}
          {aadhar && (
            <Link className="nav-item nav-link" to={USER.LOGOUT}>
              Logout
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
