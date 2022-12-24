import React from "react";
import { Col, Row } from "react-bootstrap";
import "../../Style.css";
import "./Technician.css";
import { useState } from "react";

function TechnicianCoolingUnit({complaint, failureComplaintsList}) {
 



  return (
    <>
        <div className="page_two_complaint_failure">
        <h2>
          <b>Breakdown Analysis For Cooling Unit</b>{" "}
        </h2>
        <div className="page_two_complaint_tab" style={{ columnGap: "0.1rem" }}>
          <div className="tables">
            <table className="Table_Customer">
              <thead>
                <tr>
                  <th className="Cust_t1">
                    Customer 
                     complaint <i class="fa-solid fa-plus" onClick={() => complaint(456)} style={{marginTop: "-2rem"}}></i>{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Engine Oil Leak</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="tables">
            <table className="Break_Cust">
              <thead>
                <tr>
                  <th className="Cust_t1">
                    Failure 
                    Reason <i class="fa-solid fa-plus" onClick={() => complaint(456)} style={{marginTop: "-2rem"}}></i>
                  </th>
                </tr>
              </thead>
              <tbody>
                {failureComplaintsList.map((item) => (
                  <tr>
                    <td>{item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div> 
    </>
  );
}

export default TechnicianCoolingUnit;
