import { Link } from "react-router-dom";
import CreateUser from "../Components/User/Register/CreateUser.tsx";
import { USER } from "../Constants/Constant.ts";

export function Register() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
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
            style={{ margin: "10px", padding: "10px 60px" }}
            className="card-body"
          >
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
