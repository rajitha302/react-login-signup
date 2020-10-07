import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./register.scss";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import Btn from "../components/btn";
import { Link } from "react-router-dom";
import Logo from "../components/heading";

function register() {
  return (
    <div className="register pt-5">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col className="col-md-6 card p-5">
            <Logo />
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your name"
                />
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

              <Link to="/welcome">
                <Btn name="Signup" />
              </Link>
            </Form>
            <Col className="text-center pt-4">
              <p>
                Already has an account?
                <span>
                  <Button variant="link" className="register__btn">
                    <Link to="/"> Login here </Link>
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

export default register;
