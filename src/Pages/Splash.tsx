import React from "react";

export default function Splash() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="spinner-border text-info"
        style={{ width: "200px", height: "200px" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
