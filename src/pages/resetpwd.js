import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./resetpwd.scss";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import logo from "./logo.png";
import Btn from "../components/btn";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function resetpwd() {
  return (
    <div className="resetpwd pt-5">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col className="col-md-6 card p-5">
            <Col className="text-center pb-5">
              <img src={logo} alt="tlogo" width="50%" />
            </Col>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Btn name="Send a reset link" />
            </Form>
            <Col className="text-center pt-4">
              <p>
                Check our FAQ page,
                <span>
                  <Router>
                    <Link to="/">
                      <Button variant="link" className="login__btn">
                        Here
                      </Button>
                    </Link>
                  </Router>
                </span>
              </p>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default resetpwd;
