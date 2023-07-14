import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../Storage/Storage";

export default function Dashboard(props) {
  let { files } = React.useContext(MyContext);
  let [disable, setDisable] = useState(true);
  const gradients = [
    "linear-gradient(to right, #240b36, #c31432)",
    "linear-gradient(to right, #4286f4, #373B44)",
    "linear-gradient(to right, #3c1053, #ad5389)",
    "linear-gradient(to right, #24243e, #302b63, #0f0c29)",
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
  useEffect(() => {
    if (files && files.length > 0) {
      setTimeout(() => {
        setDisable(false);
      }, 10000);
    }
  }, []);
  return (
    <div
      style={{
        height: "100%",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
          position: "relative",
          flexDirection: "column",
          top: 0,
        }}
        className="text-center"
      >
        <img
          src="https://imagesforpuda.blob.core.windows.net/applications/forest-4824759_1280.webp"
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            filter: "contrast(0.3) brightness(2)",
          }}
        />
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
                    height: "216px",
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
        {files?.length > 0 && disable && (
          <div style={{ position: "absolute", bottom: "10px", width: "100%" }}>
            {files.map((file) => {
              return file?.AppointmentDate ? (
                <div
                  style={{ width: "600px", margin: "20px auto" }}
                  className="alert alert-primary text-center"
                  role="alert"
                >
                  Dear user, Your file No {file?.FileNo} is approved. Your
                  appointment date is {file?.AppointmentDate?.split("$")[0]} (
                  {file?.AppointmentDate?.split("$")[1]})
                </div>
              ) : (
                <></>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
