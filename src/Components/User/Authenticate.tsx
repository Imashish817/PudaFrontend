import React, { useState } from "react";
import { MyContext, MyContextValues } from "../../Storage/Storage";
import { useNavigate } from "react-router-dom";
import setCookie from "../../Cookie/setCookie";
import { COOKIE } from "../../Constants/Constant";

export default function Authenticate() {
  let [formPhone, setFormPhone] = useState("");
  let [formPassword, setFormPassword] = useState("");
  let { name, mobile, aadhar, updateUser } = React.useContext(MyContext);
  const navigate = useNavigate();
  let login = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    updateUser("harshit", formPhone, "310766471824");
    setCookie(COOKIE.KEY, "mytoken", COOKIE.LIFE);
    navigate("/");
    return;
  };
  return (
    <form onSubmit={login}>
      <p>Please login to your account</p>
      <div className="form-row">
        <div className="form-group w-100">
          <label htmlFor="inputEmail4">Phone</label>
          <input
            type="tel"
            className="form-control"
            id="inputEmail4"
            placeholder="Contact"
            value={formPhone}
            onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
              let value: string = event.target.value;
              if (!value.match(/.*[a-z,A-Z].*/i))
                setFormPhone(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group w-100">
          <label htmlFor="inputPassword4">Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            placeholder="Password"
            value={formPassword}
            onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
              let value: string = event.target.value;
              setFormPassword(value);
            }}
          />
        </div>
      </div>
      <div className="text-center pt-1 mb-5 pb-1">
        <button
          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
          type="submit"
          disabled={
            !formPhone.trim() ||
            !formPassword.trim() ||
            formPassword.trim().length < 6
          }
        >
          Log in
        </button>
      </div>
      <div className="d-flex align-items-center justify-content-center pb-4">
        <p className="mb-0 mr-4">Don't have an account? </p>
        <button type="button" className="btn btn-outline-danger">
          Create new
        </button>
      </div>
    </form>
  );
}
