import React, { useState } from "react";
import "./Technician.css";

function RootCause({ rootCauseComplaintList, handleShowBtn }) {


  return (
    <>
      <div className="page_two_complaint_failure">
        <div
          className="page_two_complaint_tab RootCause"
          style={{ columnGap: "0.1rem" }}
        >
          <div className="tables">
            <table className="Table_Customer">
              <thead>
                <tr>
                  <th className="Cust_t1">
                    Probable Root{" "}
                    <i
                      class="fa-solid fa-plus"
                      onClick={() => handleShowBtn()}
                      style={{ marginTop: "-2rem" }}
                    ></i>{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                {rootCauseComplaintList.map((val, key) => (
                  <tr key={key.id}>
                    <td>{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="tables">
            <table className="Break_Cust">
              <thead>
                <tr>
                  <th className="Cust_t1">
                    Suggested Rectification{" "}
                    <i
                      class="fa-solid fa-plus"
                      onClick={() => ""}
                      style={{ marginTop: "-2rem" }}
                    ></i>
                  </th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default RootCause;
