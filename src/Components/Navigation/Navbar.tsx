import { Link } from "react-router-dom";
import { USER } from "../../Constants/Constant.ts";
export default function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
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
          <Link className="nav-item nav-link active" to="/">
            Home <span className="sr-only">(current)</span>
          </Link>
          <Link className="nav-item nav-link disabled" to={USER.LOGIN}>
            Login
          </Link>
          <Link className="nav-item nav-link disabled" to={USER.LOGIN}>
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}
