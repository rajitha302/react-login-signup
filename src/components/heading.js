import React from "react";
import "./heading.scss";
import logo from "../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "react-bootstrap";

function heading() {
  return (
    <div>
      <Col className="text-center pb-5">
        <img src={logo} alt="tlogo" className="logo" />
      </Col>
    </div>
  );
}

export default heading;
