import { useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard(props) {
  const gradients = [
    "linear-gradient(82.59deg, #00c48c 0%, #00a173 100%)",
    "linear-gradient(81.67deg, #0084f4 0%, #1a4da2 100%)",
    "linear-gradient(69.83deg, #0084f4 0%, #00c48c 100%)",
    "linear-gradient(81.67deg, #ff647c 0%, #1f5dc5 100%)",
  ];
  const [options, setOptions] = useState<
    Array<{
      head: String;
      description: String;
      link: String;
      img: String;
      disabled: any;
    }>
  >(props?.options ? props.options : []);
  return (
    <div
      style={{
        height: "100%",
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
            if (value.disabled) {
              return <></>;
            }
            return (
              <Link
                key={idx}
                style={{
                  textDecoration: "none",
                  color: "black",
                  margin: "10px 30px",
                }}
                to={String(value.link)}
              >
                <div
                  className="card"
                  style={{
                    maxWidth: "30rem",
                    color: "white",
                    background: gradients[idx % gradients.length],
                    borderRadius: "20px",
                    padding: "20px",
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
