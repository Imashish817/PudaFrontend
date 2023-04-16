import { Link } from "react-router-dom";
import Authenticate from "../Components/User/Authenticate.tsx";
import { USER } from "../Constants/Constant.ts";
import "./CSS/Login.css";

export function Login() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        padding: "10px",
      }}
    >
      <div
        style={{
          border: "1px solid #e9ecea00",
          borderTop: "10px solid #e9ecea00",
          background: "#3e7651",
          width: "500px",
        }}
        className="card rounded-3 text-white"
      >
        <div
          style={{ margin: "10px", padding: "10px 20px" }}
          className="card-body"
        >
          <Link to={USER.REGISTER}>
            <button className="switch btn btn-outline-light">
              Register
              <i style={{ fontSize: "18pt" }} className="bi bi-arrow-right"></i>
            </button>
          </Link>
          <Authenticate />
        </div>
      </div>
    </div>
  );
}
