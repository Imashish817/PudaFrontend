import { useEffect, useState } from "react";

export default function DataGrid(props) {
  const [rows, setRows] = useState<Array<any>>([]);
  const [columns, setColumns] = useState<Array<any>>([]);
  useEffect(() => {
    setRows(props.rows ? props.rows : []);
    setColumns(props.columns ? props.columns : []);
  }, [props.rows, props.columns]);
  return (
    <>
      {columns.length > 0 && rows.length > 0 && (
        <div className="container">
          <div className="row">
            {(() => {
              let temp = ["", "Industrial", "Commercial"].map((column, idx) => {
                if (idx === 0) {
                  return (
                    <div style={{ width: "100px" }} className="text-center">
                      <p>{column}</p>
                    </div>
                  );
                }
                return (
                  <div style={{ width: "150px" }} className="col text-center">
                    <p>{column}</p>
                  </div>
                );
              });
              return temp;
            })()}
          </div>
          <div className="row">
            {(() => {
              let temp = columns.map((column) => {
                return (
                  <div style={{ width: "150px" }} className="col text-center">
                    {column.value}
                  </div>
                );
              });
              return temp;
            })()}
          </div>
          {(() => {
            let data = rows.map((row, idx) => {
              return (
                <div style={{ margin: "10px 0" }} className="row">
                  {(() => {
                    let data = columns.map((column, cIdx) => {
                      return (
                        <div
                          style={{ width: "100%" }}
                          className="col text-center"
                        >
                          {props.readOnly[idx][cIdx] ? (
                            rows[idx][cIdx]
                          ) : (
                            <input
                              style={{ width: "100%", outline: "none" }}
                              onChange={(ele: any) => {
                                let rowsCopy = [...rows];
                                rowsCopy[idx][cIdx] = ele.target.value;
                                props.onDocUpdate(rowsCopy);
                              }}
                              value={rows[idx][cIdx]}
                            />
                          )}
                        </div>
                      );
                    });
                    return data;
                  })()}
                </div>
              );
            });
            return data;
          })()}
          {(() => {
            let temp = [
              "SCOs (24'X75' and 18'X50) and Shops (12'45') leave 8'3\"corridor on ground floor. Basement is allowed in all cases.",
              "Land owners can opt for bigger plot sizes wherever possible.",
            ].map((column, idx) => {
              return (
                <div className="col text-center">
                  <p>{column}</p>
                </div>
              );
            });
            return temp;
          })()}
        </div>
      )}
    </>
  );
}
