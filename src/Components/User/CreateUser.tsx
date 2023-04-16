import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import create from "../../APIHandler/User/create.ts";
import { USER } from "../../Constants/Constant.ts";

export default function CreateUser() {
  const navigate = useNavigate();
  const [err, setErr] = useState(null);
  const [buttonText, setbuttonText] = useState("Register");
  let submitHandler = (event): void => {
    event.preventDefault();
    let form = event.target;
    let body = {
      Name: form[0].value + " " + form[1].value,
      MobileNo: form[2].value,
      AadharNo: form[5].value,
      Password: form[3].value,
      Password_Confirmation: form[4].value,
      UserType: "Normal",
      tc: true,
    };
    let isValid = true;
    Object.keys(body).map((key) => {
      if (typeof body[key] === "string") {
        if (!body[key] || !body[key].trim()) isValid = false;
      }
    });
    if (!isValid) {
      setErr("All fields are mandatory");
      return;
    }
    if (body.Password.trim() !== body.Password_Confirmation.trim()) {
      setErr("Password and confirm password don't match");
      return;
    }
    if (
      !body.Password.trim().match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
      )
    ) {
      setErr("Invalid password format");
      return;
    }
    if (body.AadharNo.trim().length !== 12) {
      setErr("Invalid Aadhar format");
      return;
    }
    setbuttonText("Processing your request....");
    create(body)
      .then(() => {
        setbuttonText("Register");
        navigate(USER.LOGIN);
      })
      .catch((err) => {
        setbuttonText("Register");
        setErr(err.response.data.message);
      });
  };
  return (
    <form style={{ overflow: "auto" }} onSubmit={submitHandler}>
      {err ? (
        <div className="alert alert-danger" role="alert">
          {err}
        </div>
      ) : (
        <></>
      )}
      <div>
        <h3 style={{ margin: "20px 0" }}>Register</h3>
      </div>
      <div className="form-element form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputFirstName">First Name *</label>
          <input
            style={{
              borderWidth: "0px 0px 1px 0px",
              borderRadius: "0",
              backgroundColor: "transparent",
              color: "white",
            }}
            type="text"
            className="form-control"
            id="inputFirstName"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputLastName">Last Name *</label>
          <input
            style={{
              borderWidth: "0px 0px 1px 0px",
              borderRadius: "0",
              backgroundColor: "transparent",
              color: "white",
            }}
            type="text"
            className="form-control"
            id="inputLastName"
          />
        </div>
      </div>
      <div className="form-element form-group">
        <label htmlFor="phone">Mobile No. *</label>
        <input
          style={{
            borderWidth: "0px 0px 1px 0px",
            borderRadius: "0",
            backgroundColor: "transparent",
            color: "white",
          }}
          type="tel"
          className="form-control"
          id="phone"
        />
      </div>
      <div className="form-element form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputPassword">Password *</label>
          <input
            style={{
              borderWidth: "0px 0px 1px 0px",
              borderRadius: "0",
              backgroundColor: "transparent",
              color: "white",
            }}
            type="password"
            className="form-control"
            id="inputPassword"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputPassword2">Confirm Password *</label>
          <input
            style={{
              borderWidth: "0px 0px 1px 0px",
              borderRadius: "0",
              backgroundColor: "transparent",
              color: "white",
            }}
            type="password"
            className="form-control"
            id="inputPassword2"
          />
        </div>
      </div>
      <div className="form-element form-group">
        <label htmlFor="aadhar">Aadhar No. *</label>
        <input
          style={{
            borderWidth: "0px 0px 1px 0px",
            borderRadius: "0",
            backgroundColor: "transparent",
            color: "white",
          }}
          type="number"
          className="form-control"
          id="aadhar"
        />
      </div>

      <div style={{ margin: "20px 0" }} className="text-center pt-1 pb-1">
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
