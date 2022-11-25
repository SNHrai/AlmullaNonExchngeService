import React from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import "../../foreman.css";

function ForemanCoolComplaint({ complaint, failure, coolComponent, datas }) {
  const options = [
    {
      label: "Send Report to Foremen",
      value: "Send Report to Foremen",
    },
    {
      label: "Shabbir",
      value: "Shabbir",
    },
    {
      label: "Hafizullah",
      value: "Hafizullah",
    },
    {
      label: "Faisal",
      value: "Assigned to Foreman - Faisal",
    },
  ];



  return (
    <>
      <div
        className="tw0_page_complaint"
        style={{ height: "30%", marginTop: "50px" }}
      >
        <div className="heading">
          <Col>
            <Row>
              <div className="d-flex flex-row justify-content-between">
                <b style={{color:"rgb(0,0,0)", fontSize:"18pt",marginTop:"100px",dispalay:"flex",paddingLeft:"20px"}}>Breakdown Analysis For Cooling Unit</b>{" "}
               
                <div className="down_value">
            <p><b> Assigned to Technician - </b></p>
              <select className="Drop_select"
                style={{

marginTop:"1%",

width:"60%",



border: "none",

backgroundcolor:"rgb(226,245,231)",

paddingLeft: "20px",

fontSize: "16pt",

color: "rgb(0,0,0)",

fontFamily: "Roboto-Bold",

}}
              >
               
                {options.map((option) => (
                  <option value={option.value}>
                    <b>{option.label}</b>
                  </option>
                ))}
              </select>
            </div>
              
              </div>
            </Row>
          </Col>
        </div>

        <div className="datatable">
          <table className="tabular">
            <tr>
              <th className="icon">
                Customer complaint <i class="fa-solid fa-plus" onClick={complaint}></i>{" "}
              </th>
              <th className="icon">
                Failure Reason <i class="fa-solid fa-plus" onClick={failure}></i>
              </th>

              <th>
                Probable <br />
                Root Cause
              </th>
              <th>
                Suggested <br />
                Rectifiction
              </th>
            </tr>

            {datas.map((val, key) => {
              return (
                <tr key={val.id}>
                  <td>{val.customerComplaint}</td>
                  <td>{val.failureReason}</td>
                  <td>{val.probableRootCause}</td>
                  <td>{val.suggestedRectifiction}</td>
                </tr>
              );
            })}
          </table>
        </div>

        {/* <div className="complaint_failure">
          <div className="complaint"></div>
          <div className="failure"></div>
        </div>
      </div>

      <div className="page_two_bothcomp_fail_list">
        <div className="comp_list"></div> */}
        {/* <div className="fail_list"></div> */}
      </div>



      <Container>
        <div className="horizontal_line"></div>
      </Container>
    </>
  );
}

export default ForemanCoolComplaint;
