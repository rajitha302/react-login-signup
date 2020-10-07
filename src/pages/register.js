import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./register.scss";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import logo from "./logo.png";
import Btn from "../components/btn";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function register() {
  return (
    <div className="register pt-5">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col className="col-md-6 card p-5">
            <Col className="text-center pb-5">
              <img src={logo} alt="tlogo" width="50%" />
            </Col>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Btn name="Signup" />
            </Form>
            <Col className="text-center pt-4">
              <p>
                Already has an account?
                <span>
                  <Router>
                    <Link to="/resetpwd">
                      <Button variant="link" className="login__btn">
                        Login here
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

export default register;
