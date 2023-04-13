import { useState } from "react";
import { PaymentForm } from "../Components/Dashboard/PaymentForm.tsx";
import LandForm from "../Components/Dashboard/LandForm.tsx";

export function Application1() {
  const [form, SetForm] = useState(0);
  const forms = [<PaymentForm />, <LandForm />];
  let toggleForm = function (event) {
    SetForm(event.target.value);
  };
  return (
    <div
      style={{
        background: "#3e7651",
        width: "100%",
        height: "100%",
        textAlign: "center",
        padding: "20px 40px",
      }}
    >
      <select
        style={{ width: "400px", margin: "auto" }}
        className="form-control"
        onChange={toggleForm}
      >
        <option value={0} defaultChecked>
          Payment
        </option>
        <option value={1}>Land</option>
      </select>
      {forms[form]}
    </div>
  );
}
