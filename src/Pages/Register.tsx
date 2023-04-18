import { Link } from "react-router-dom";
import CreateUser from "../Components/User/CreateUser.tsx";
import { USER } from "../Constants/Constant.ts";
import "./CSS/Register.css";
export function Register() {
  return (
    <div className="Register">
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "#3e7651",
          }}
          className="card rounded-3 text-white"
        >
          <div
            style={{ margin: "10px", padding: "10px 20px" }}
            className="card-body"
          >
            <Link to={USER.LOGIN}>
              <button className="switch btn btn-outline-light">
                Login
                <i
                  style={{ fontSize: "18pt" }}
                  className="bi bi-arrow-right"
                ></i>
              </button>
            </Link>
            <CreateUser />
          </div>
        </div>
      </div>
    </div>
  );
}
