import { useState } from "react";
import { DASHBOARD } from "../Constants/Constant";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [options, setOptions] = useState<
    Array<{
      head: String;
      description: String;
      link: String;
      img: String;
    }>
  >([
    {
      head: "Create new file",
      description: "You can create new file with required applications",
      link: DASHBOARD.ENTITLEMENT,
      img: "bi-plus-circle-fill",
    },
    {
      head: "Complaints",
      description:
        "You can issue complaints which will be sent to operations team",
      link: DASHBOARD.COMPLAINT,
      img: "bi-file-earmark-arrow-up-fill",
    },
    {
      head: "Check files",
      description:
        "You can view your uploaded file and check its current status",
      link: DASHBOARD.FILES,
      img: "bi-eye-fill",
    },
  ]);
  return (
    <div
      style={{
        height: "90%",
      }}
    >
      <div
        style={{
          height: "100%",
          background: "#3e7651",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
        }}
        className="text-center"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {options.map((value, idx) => {
            return (
              <Link
                key={idx}
                style={{
                  textDecoration: "none",
                  color: "black",
                  margin: "10px",
                }}
                to={String(value.link)}
              >
                <div
                  className="card"
                  style={{
                    width: "18rem",
                  }}
                >
                  <i
                    className={`bi ${String(value.img)} card-img-top`}
                    style={{ fontSize: "25pt" }}
                  ></i>
                  <div className="card-body">
                    <h5 className="card-title">{value.head}</h5>
                    <p className="card-text">{value.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
