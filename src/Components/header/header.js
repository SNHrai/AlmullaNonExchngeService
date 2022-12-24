import React from "react";
import { Col, Row } from "react-bootstrap";
import "./header.css";

function header(props) {
  return (
    <>
      <div className="header_img">
        <img src="/images/bitmap@3x.png" alt="example" />
        <div className="vl"></div>
        <h3>
          <b> Welcome to Al Mulla Industries Service Mobile Solutions</b>
        </h3>
        <br />
          <span>{props.name}</span>
      </div>

      <div className="heading">
        <div className="logout_btn">
          <i>
            <img
              src="./images/shape@3x.png"
              alt=""
              onClick={() => (window.location.href = "/")}
            />
          </i>
          <h1 className="header_logout_btn">
            <b onClick={() => (window.location.href = "/")}>Logout</b>{" "}
          </h1>
        </div>
      </div>
      <Col>
        <Row className="header_text">
          <span>
            <b> Vehicle Receiver</b>
          </span>{" "}
        </Row>
      </Col>
    </>
  );
}

export default header;
