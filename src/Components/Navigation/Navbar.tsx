import { Link } from "react-router-dom";
import { ACCESS_MAP, DASHBOARD, USER } from "../../Constants/Constant.ts";
import React from "react";
import { MyContext, MyContextValues } from "../../Storage/Storage.tsx";
import "../../Pages/CSS/Navbar.css";
export default function Navbar() {
  const { aadhar, accessCode } = React.useContext<MyContextValues>(MyContext);
  return (
    <nav>
      <div className="logo">
        <div className="arrow-down"></div>
      </div>
      <ul>
        {!aadhar && (
          <li>
            <Link className="nav-item nav-link" to={USER.LOGIN}>
              Login
            </Link>
          </li>
        )}
        {accessCode && (
          <li>
            <Link
              className="nav-item nav-link"
              to={ACCESS_MAP[`${accessCode}`]}
            >
              Dashboard
            </Link>
          </li>
        )}
        {aadhar && (
          <li>
            <Link className="nav-item nav-link" to={USER.LOGOUT}>
              Logout
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
