import React, { useState } from "react";
import DataGrid from "../DataGrid/DataGrid";
import approve from "../../APIHandler/Dashboard/approve";
import { useNavigate } from "react-router-dom";
import { PATWARI } from "../../Constants/Constant";
import reject from "../../APIHandler/Dashboard/reject";

export function Plot(props) {
  const [columns, setColumns] = useState<Array<any>>([
    {
      value: "",
    },
    {
      value: "Ind.",
    },
    {
      value: "Ind.",
    },
    {
      value: "Ind.",
    },
    {
      value: "SCO(3 FAR)",
    },
    {
      value: "SCO(3 FAR)",
    },
    {
      value: "Shop(2 FAR)",
    },
  ]);
  const [rows, setRows] = useState<Array<any>>([
    ["Size", "111", "111", "111", "111", "111", "111"],
    ["1 acre(8 kanal)", "", "", "", "", "", ""],
    ["0.5 acre(4 kanal)", "", "", "", "", "", ""],
    ["0.25 acre(2 kanal)", "", "", "", "", "", ""],
  ]);
  const [readOnlyRow, setReadOnlyRow] = useState<Array<any>>([
    [true, true, true, true, true, true, true, true],
    [true, false, false, false, false, false, false],
    [true, false, false, false, false, false, false],
    [true, false, false, false, false, false, false],
  ]);
  let onDocUpdate = (updatedRowTemp) => {
    setRows(updatedRowTemp);
  };
  const navigate = useNavigate();
  return (
    <div
      style={{
        background: "white",
        color: "black",
        padding: "20px",
        borderRadius: "1rem",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        readOnly={readOnlyRow}
        onDocUpdate={onDocUpdate}
      />
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => {
            let breakupRow1 = [...rows[1]];
            let breakupRow2 = [...rows[2]];
            let breakupRow3 = [...rows[3]];
            breakupRow1 = breakupRow1.splice(
              breakupRow1.indexOf(breakupRow1[0]),
              1
            );
            breakupRow2 = breakupRow2.splice(
              breakupRow2.indexOf(breakupRow2[0]),
              1
            );
            breakupRow3 = breakupRow3.splice(
              breakupRow3.indexOf(breakupRow3[0]),
              1
            );
            approve(
              props.fileId,
              props.aadhar,
              breakupRow1,
              breakupRow2,
              breakupRow3
            )
              .then((res) => {
                alert(res);
                navigate(PATWARI.INDEX + PATWARI.CHECK_FILES);
              })
              .catch((res) => {
                alert(res);
                navigate(PATWARI.INDEX + PATWARI.CHECK_FILES);
              });
          }}
          className="btn btn-outline-primary"
        >
          Approve
        </button>
        <button
          onClick={() => {
            reject(props.fileId, props.aadhar)
              .then((res) => {
                alert(res);
                navigate(PATWARI.INDEX + PATWARI.CHECK_FILES);
              })
              .catch((res) => {
                alert(res);
                navigate(PATWARI.INDEX + PATWARI.CHECK_FILES);
              });
          }}
          className="btn btn-outline-primary"
        >
          Reject
        </button>
      </div>
    </div>
  );
}
