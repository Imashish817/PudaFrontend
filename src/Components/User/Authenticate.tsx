import React, { useState } from "react";
import { MyContext } from "../../Storage/Storage";
import { useNavigate } from "react-router-dom";
import setCookie from "../../Cookie/setCookie";
import { COOKIE } from "../../Constants/Constant";
import authenticate from "../../APIHandler/User/authenticate.ts";

export default function Authenticate() {
  let [formPhone, setFormPhone] = useState("");
  let [formAadhar, setFormAadhar] = useState("");
  let [formPassword, setFormPassword] = useState("");
  let { updateUser } = React.useContext(MyContext);
  const [buttonText, setbuttonText] = useState("Login");

  const navigate = useNavigate();

  let login = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setbuttonText("Processing your request....");
    authenticate(formAadhar, formPhone, formPassword)
      .then((response) => {
        setbuttonText("Login");
        updateUser(response.Name, response.MobileNo, response.AadharNo);
        setCookie(COOKIE.KEY, response.token, COOKIE.LIFE);
        if (response.UserType !== "Normal") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        setbuttonText("Login");
        console.log(err);
      });
  };
  return (
    <form onSubmit={login}>
      <h3 style={{ margin: "20px 0" }}>Login</h3>
      <div>
        <div className="form-group w-100">
          <label htmlFor="inputEmail4">Aadhar *</label>
          <input
            style={{
              borderWidth: "0px 0px 1px 0px",
              borderRadius: "0",
              backgroundColor: "transparent",
            }}
            type="number"
            className="form-control"
            id="inputAadhar4"
            value={formAadhar}
            onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
              let value: string = event.target.value;
              if (!value.match(/.*[a-z,A-Z].*/i))
                setFormAadhar(event.target.value);
            }}
          />
        </div>
      </div>
      <div>
        <div className="form-group w-100">
          <label htmlFor="inputPhone4">Phone *</label>
          <input
            style={{
              borderWidth: "0px 0px 1px 0px",
              borderRadius: "0",
              backgroundColor: "transparent",
            }}
            type="tel"
            className="form-control"
            id="inputPhone4"
            value={formPhone}
            onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
              let value: string = event.target.value;
              if (!value.match(/.*[a-z,A-Z].*/i))
                setFormPhone(event.target.value);
            }}
          />
        </div>
      </div>
      <div>
        <div className="form-group w-100">
          <label htmlFor="inputPassword4">Password *</label>
          <input
            style={{
              borderWidth: "0px 0px 1px 0px",
              borderRadius: "0",
              backgroundColor: "transparent",
            }}
            type="password"
            className="form-control"
            id="inputPassword4"
            value={formPassword}
            onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
              let value: string = event.target.value;
              setFormPassword(value);
            }}
          />
        </div>
      </div>
      <div className="text-center pt-1 mb-5 mt-5 pb-1">
        <button
          type="submit"
          className="btn btn-outline-light btn-lg btn-block"
          style={{ borderRadius: "1rem" }}
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
}
