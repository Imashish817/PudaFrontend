import { useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard(props) {
  const [options, setOptions] = useState<
    Array<{
      head: String;
      description: String;
      link: String;
      img: String;
      disabled:any;
    }>
  >(props?.options?props.options:[]);
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
            if(value.disabled){
              return (<></>)
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
