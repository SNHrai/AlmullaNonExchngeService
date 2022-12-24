import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

function CoolComplaints({
  complaint,
  failure,
  deleteRow,
  deleteFailRow,
  failureComplaintsList,
  arrayList,
}) {
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
                    Customer complaint{" "}
                    <i
                      class="fa-solid fa-plus"
                      onClick={() => complaint(456)}
                    ></i>{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                {arrayList.map((key, val) => (
                  <tr className="Cust_t0" key={val}>
                    <td>
                      {key}{" "}
                      <button
                        style={{
                          position: "absolute",
                          left: "35.5em",
                          border: "none",
                        }}
                        onClick={(e) => deleteRow(val, e)}
                      >
                        <img
                          src="./images/minusbutton.png"
                          style={{ height: "1.5rem", border: "none" }}
                        />
                      </button>
                    </td>
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
                    Failure Reason{" "}
                    <i
                      class="fa-solid fa-plus"
                      onClick={() => complaint(456)}
                    ></i>
                  </th>
                </tr>
              </thead>
              <tbody>
                {failureComplaintsList.map((key, val) => {
                  return (
                    <tr className="Cust_t1" key={val}>
                      <td>
                        {key}
                        <button
                          style={{
                            position: "absolute",
                            left: "72.6em",
                            border: "none",
                          }}
                          onClick={(e) => deleteFailRow(val, e)}
                        >
                          <img
                            src="./images/minusbutton.png"
                            style={{ height: "1.5rem", border: "none" }}
                          />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoolComplaints;
