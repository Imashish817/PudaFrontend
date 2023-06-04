import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import create from "../../APIHandler/User/create.ts";
import { USER } from "../../Constants/Constant.ts";

export default function CreateUser() {
  const navigate = useNavigate();
  const [err, setErr] = useState(null);
  const [buttonText, setbuttonText] = useState("Register");
  const submitHandler = (event): void => {
    event.preventDefault();
    let form = event.target;
    let body = {
      Name: form[0].value + " " + form[1].value,
      MobileNo: form[2].value,
      AadharNo: form[5].value,
      Password: form[3].value,
      Password_Confirmation: form[4].value,
      UserType: "1",
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
    <form onSubmit={submitHandler}>
      <h1>Register</h1>
      {err ? (
        <div className="alert alert-danger" role="alert">
          {err}
        </div>
      ) : (
        <></>
      )}
      <div className="inputbox">
        <input type="text" id="inputFirstName" />
        <label htmlFor="inputFirstName">First Name *</label>
      </div>
      <div className="inputbox">
        <input type="text" id="inputLastName" />
        <label htmlFor="inputLastName">Last Name *</label>
      </div>
      <div className="inputbox">
        <input type="tel" id="phone" />
        <label htmlFor="phone">Mobile No. *</label>
      </div>
      <div className="inputbox">
        <input type="number" id="aadhar" />
        <label htmlFor="aadhar">Aadhar No. *</label>
      </div>
      <div className="inputbox">
        <input type="password" id="inputPassword" />
        <label htmlFor="inputPassword">Password *</label>
      </div>
      <div className="inputbox">
        <input type="password" id="inputPassword2" />
        <label htmlFor="inputPassword2">Confirm Password *</label>
      </div>
      <button type="submit">{buttonText}</button>
      <div className="register">
        <p>
          Don't have a account <Link to={USER.LOGIN}>Login</Link>
        </p>
      </div>
    </form>
  );
}
