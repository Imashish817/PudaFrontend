import { Link } from "react-router-dom";
import Authenticate from "../Components/User/Authenticate.tsx";
import { USER } from "../Constants/Constant.ts";
import "./CSS/Login.css";

export function Login() {
  return (
    <div className="Login">
      <section>
        <Authenticate />
      </section>
    </div>
  );
}
