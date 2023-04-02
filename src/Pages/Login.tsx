import Authenticate from "../Components/User/Authenticate.tsx";
import "./css/Login.css";

export function Login() {
  return (
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-4">
                <div className="text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    style={{ width: "185px" }}
                    alt="logo"
                  />
                  <h4 className="mt-1 mb-5 pb-1">We are The Puda Team</h4>
                </div>
                <Authenticate />
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-4">{process.env.REACT_APP_HEAD}</h4>
                <p className="small mb-0">
                  {process.env.REACT_APP_DESCRIPTION}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
