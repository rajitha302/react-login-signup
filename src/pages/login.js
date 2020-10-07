import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.scss";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import Btn from "../components/btn";
import { Link } from "react-router-dom";
import Logo from "../components/heading";

function login() {
  return (
    <div className="login login--bg pt-5">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col className="col-md-6 card p-5">
            <Logo />
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
                    <Link to="resetpwd">Forgot Password?</Link>
                  </Button>
                </Col>
              </Form.Group>

              <Link to="/welcome">
                <Btn name="Login" />
              </Link>
            </Form>
            <Col className="text-center pt-4">
              <p>
                Don't have an account yet?
                <span>
                  <Button variant="link" className="login__btn">
                    <Link to="/register">Register here</Link>
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
