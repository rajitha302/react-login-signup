import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.scss";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import logo from "./logo.png";
import Btn from "../components/btn";

function login() {
  return (
    <div className="login login--bg pt-5">
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

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Col className="d-flex justify-content-end pr-0">
                  <Button variant="link" className="pr-0 login__btn--small">
                    Forgot Password?
                  </Button>
                </Col>
              </Form.Group>

              <Btn name="Login" />
            </Form>
            <Col className="text-center pt-4">
              <p>
                Don't have an account yet?
                <span>
                  <Button variant="link" className="login__btn">
                    Register here
                  </Button>
                </span>
              </p>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default login;
