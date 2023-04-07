import { Link } from "react-router-dom";
import CreateUser from "../Components/User/CreateUser.tsx";
import { USER } from "../Constants/Constant.ts";

export function Register() {
  return (
    <div
      style={{
        border: "1px solid #e9ecea00",
        borderTop: "10px solid #e9ecea00",
        background: "#3e7651",
        width: "630px",
        margin: "10px",
      }}
      className="card rounded-3 text-white"
    >
      <div style={{ margin: "10px", padding: "60px" }} className="card-body">
        <Link to={USER.LOGIN}>
          <button
            style={{
              position: "absolute",
              top: "10px",
              right: "70px",
              display: "flex",
              alignItems: "center",
              width: "130px",
              paddingTop: "5px",
              paddingBottom: "5px",
              justifyContent: "space-around",
              borderRadius: "1rem",
            }}
            className="btn btn-outline-light"
          >
            Login
            <i style={{ fontSize: "18pt" }} className="bi bi-arrow-right"></i>
          </button>
        </Link>
        <CreateUser />
      </div>
    </div>
  );
}
